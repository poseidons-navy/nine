import { NineServiceClient, credentials, events } from "@nine/grpc"

const client = new NineServiceClient('monorail.proxy.rlwy.net:24651', credentials.createInsecure())

function main() {
    const call = client.GetNineEvents(new events.EventsRequest({
        event_type: "CidStoredEvent",
        sequence_number: 0
    }))

    call.on('data', (data: events.EventsRequest) => {
        console.log("Data::", data.toObject())
    })

    call.on('end', () => {
        console.log("Call ended")
    })

    call.on('error', (error: any) => {
        console.log("Error::", error)
    })
}

main()