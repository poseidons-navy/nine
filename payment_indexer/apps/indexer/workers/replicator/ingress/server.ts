import nine, { UnimplementedNineServiceService, sendUnaryData, events } from "@nine/grpc2";
import dataprocessor from './setup';

class NineServer implements UnimplementedNineServiceService {
    [method: string]: nine.UntypedHandleCall;
    async GetNineEvents(call: nine.ServerWritableStream<events.EventsRequest, events.Event>) {
        const request = call.request.toObject();
        const starting_sequence_number = request.sequence_number
        try {
            await dataprocessor.process(call, starting_sequence_number)
        }
        catch (e) {
            console.log("Error::", e)
        }
        call.end()
    }

    async GetNineEvent(call: nine.ServerUnaryCall<events.EventRequest, events.Event>, callback: nine.sendUnaryData<events.Event>) {
        try {
            await dataprocessor.singleEvent(call, callback)
        }
        catch (e) {
            console.log("Error::", e)
            callback(Error("Something unexpected happened"), null)
        }
    }
}

const nineSever = new NineServer()

export default nineSever