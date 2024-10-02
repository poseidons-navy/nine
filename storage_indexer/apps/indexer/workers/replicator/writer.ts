import lmdb from "node-lmdb"
import { LamaReader } from "@nine/lama";
import { ProcessorPlugin, sleep } from "./plugin";
import _ from "lodash";
import { ProcessMonitor } from "../../monitor";
const { isNull } = _



export class DataProcessor {

    private dbi: lmdb.Dbi
    private env: lmdb.Env
    private registeredPlugins: ProcessorPlugin[] = []
    private monitor: ProcessMonitor


    constructor(dbi: lmdb.Dbi, env: lmdb.Env, monitor: ProcessMonitor) {
        this.dbi = dbi
        this.env = env
        this.monitor = monitor
    }

    async process(_last_read?: number, log?: boolean) {
        console.log("Processing data", _last_read)
        let last_read = "000000000"

        if (_last_read) {
            const s = `000000000${_last_read}`
            last_read = s.substring(s.length - 9)
        }
        console.log("Last read::", last_read)

        const txn = this.env.beginTxn({
            readOnly: true
        })
        const cursor = new lmdb.Cursor(txn, this.dbi)
        const atRange = last_read == "000000000" ? {} : cursor.goToRange(last_read)
        console.log("At Range::", atRange)
        if (!atRange) {
            console.log("No more data")
            cursor.close()
            txn.commit()
            await sleep(60_000)
            console.log("resuming")
            await this.process(parseInt(last_read))
            return
        }

        let key, value: Buffer | null;

        while ((key = cursor.goToNext()) !== null) {
            console.log("key::", key)
            process.on('SIGINT', () => {
                console.log("Ending process gracefully")
                process.exit(0);
            })
            value = cursor.getCurrentBinary()
            if (value && !isNull(value)) {
                const data = JSON.parse(value.toString())
                const event_type = data.type
                const signature = data.signature
                const event_data = JSON.parse(data.event)
                const chosenPlugin = this.registeredPlugins.find(p => p.name() === event_type)
                const logPlugin = this.registeredPlugins.find(p => p.name() === "LOG")

                if (chosenPlugin) {
                    try {

                        await chosenPlugin.process(event_data, this.monitor, key, signature)
                        if (logPlugin) {
                            await logPlugin.process(event_data, this.monitor, key, signature)
                        }
                        console.log("Data processed successfully")
                    }
                    catch (e) {
                        console.log("Something went wrong while processing data::", e)
                    }
                }


                last_read = key
            }
        }

        cursor.close()
        txn.commit()
        await this.monitor.updateLastRead(last_read)
        await sleep(60_000)
        console.log("resuming")
        await this.process(parseInt(last_read))
    }

    registerPlugin(plugin: ProcessorPlugin) {
        this.registeredPlugins.push(plugin)
    }

}