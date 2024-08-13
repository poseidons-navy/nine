import { ProcessMonitor } from "../../../monitor";
import { EVENT_NAMES } from "../../../types";
import { ProcessorPlugin } from "../plugin";
import * as schema from 'zschema'
import db from "db";
import { schema as dschema } from "db";
const { cidEvents } = dschema


export class CidProcessor implements ProcessorPlugin {
    name(): EVENT_NAMES {
        return 'CidStoredEvent';
    }
    async process(event: Record<string, any>, monitor: ProcessMonitor, sequence_number: string, signature: string) {
        console.log("Processing CidStoredEvent, Adding to DB");
        const parsed = schema.Cid.safeParse(event)

        if (!parsed.success) {
            console.log("Invalid Cid event", parsed.error)
            monitor.setFailed(sequence_number, { message: "Invalid Cid", error: parsed.error });
            return
        }

        const data = parsed.data

        try {
            await db.insert(cidEvents).values({
                id: `${data.hid}`,
                cid: data.cid,
                timestamp: data.timestamp
            })

        }
        catch (e) {
            monitor.setFailed(sequence_number, { message: "Could Not Store CidEvent", error: e });
        }

    }

}