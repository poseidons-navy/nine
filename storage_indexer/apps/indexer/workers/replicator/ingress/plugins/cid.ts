import { IngressPlugin } from "./definition";
import { EVENT_NAMES } from "../../../../types";
import { ServerWritableStream, events, sendUnaryData } from "@nine/grpc";
import { Cid as CidSchema } from "zschema";
export class CIdStoreEvent implements IngressPlugin {
    name(): EVENT_NAMES {
        console.log("Processing CidStoredEvent");
        return 'CidStoredEvent';
    }
    extract(event: Record<string, any>, sequence_number: string): events.Event | null {
        try {
            console.log("Processing CidStoredEvent");
            const parsed = CidSchema.safeParse(event);
            if (!parsed.success) {
                return null;
            }
            const parsed_data = parsed.data;
            return new events.Event({
                event_type: 'CidStoredEvent',
                sequence_number: parseInt(sequence_number),
                cid_stored: new events.CidStoredEvent({
                    cid: parsed_data.cid,
                    timestamp: parsed_data.timestamp.getTime(),
                    hid: parsed_data.hid,
                })

            });

        }
        catch(err){
            console.log('Error extracting CidStore event', err);    
            return null;
        }
    }
    async processSingle(callback: sendUnaryData<events.Event>, event: Record<string, any>, sequence_number: string) {
        console.log("Processing CidStoredEvent");
        const event_data = this.extract(event, sequence_number)
        if (event_data) {
            callback(null, event_data)
        }
        else {
            console.log("No event data");
            callback(new Error("Error parsing CidStoreevent event"), null)
        }
    }
    async process(call: ServerWritableStream<events.EventsRequest, events.Event>, event: Record<string, any>, sequence_number: string) {
        console.log("Processing CidStoredEvent");
        const event_data = this.extract(event, sequence_number)
        if (event_data) {

            call.write(event_data, (err: any) => {
                if (err) {
                    console.log(err)
                }
            })
        }
        else {
            console.log("Error parsing DelegateRegisterEvent event")
        }
    }


}