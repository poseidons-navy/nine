import { ProcessMonitor } from "../../../monitor";
import { EVENT_NAMES } from "../../../types";
import { ProcessorPlugin } from "../plugin";
import * as schema from 'zschema2'
import db from "db";
// import { schema as dschema } from "db";
import { readFromIPFS } from "ipfs";
import { CreateRequestParams } from "./type";
// const { cidEvents } = dschema
import { paymentEvents } from "../../../../../../packages/db";

export class CidProcessor implements ProcessorPlugin {
    name(): EVENT_NAMES {
        return 'PaymentEvent2';
    }
    async process(event: Record<string, any>, monitor: ProcessMonitor, sequence_number: string, signature: string) {
        console.log("Processing PaymentEvent, Adding to DB");
        event.amount = parseInt(event.amount)
        const parsed = schema.Cid.safeParse(event)

        if (!parsed.success) {
            console.log("Invalid Cid event", parsed.error)
            monitor.setFailed(sequence_number, { message: "Invalid Cid", error: parsed.error });
            return
        }

        const data = parsed.data
        //Try to get the payer_adress from IPFS
        
        try {
            await db.insert(paymentEvents).values({
                cid: data.cid,
                timestamp: data.timestamp,
                payer_address: data.payer_address,
                payee_address: data.payee_address,
                amount: data.amount

            })

        }
        catch (e) {
            monitor.setFailed(sequence_number, { message: "Could Not Store PaymentEvent", error: e });
        }

    }

}