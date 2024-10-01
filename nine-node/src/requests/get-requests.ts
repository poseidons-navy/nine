interface GetRequestData {
    payee_address: string,
    amount: string,
    requestID: string,
    reason: string,
    requestedDate: string
}
import db, { eq } from "db";
import { paymentEvents } from "db";
import { cidEvents } from "db";
import { readFromIPFS } from "ipfs";

export async function getAllRequests(): Promise<GetRequestData[]> {
    try {
        const requestIDs = await db.select({
            requestID: cidEvents.cid,
            requestDate: cidEvents.timestamp
        }).from(cidEvents);

        let requestsPromise: Promise<GetRequestData>[] = requestIDs.map(async (u) => {
            let rawData = await readFromIPFS(u.requestID);
    
            return {
                payee_address: (rawData['requestInfo']['payeeAddress']).toString(), 
                amount: (rawData['requestInfo']['expectedAmount']).toString(),
                requestID: u.requestID,
                reason: (rawData['contentData']['reason']).toString(),
                requestedDate: u.requestDate.toDateString()
            };
        });
        let requests = await Promise.all(requestsPromise);
        return requests;
    } catch(err) {
        console.log("Error Getting All Requests", err);
        throw "Error Getting All Requests";
    }
}

export default async function getRequests(): Promise<GetRequestData[]> {
    try {
        // Get all requests
        const requests = await db.select({
            requestID: cidEvents.cid,
            requestedDate: cidEvents.timestamp
        }).from(cidEvents)

        // Get requests in both storage and payment
        const paidRequests = await db.select({
            requestID: paymentEvents.cid
        }).from(paymentEvents)
        .innerJoin(cidEvents, eq(paymentEvents.cid, cidEvents.cid)); 

        // Remove those from payment
        const unpaidRequestIDs = requests.filter((r) => {
            return !(paidRequests.some((e) => e.requestID === r.requestID))
        });

        let unpaidRequestsPromise: Promise<GetRequestData>[] = unpaidRequestIDs.map(async (u) => {
            let rawData = await readFromIPFS(u.requestID);
    
            return {
                payee_address: (rawData['requestInfo']['payeeAddress']).toString(), 
                amount: (rawData['requestInfo']['expectedAmount']).toString(),
                requestID: u.requestID,
                reason: (rawData['contentData']['reason']).toString(),
                requestedDate: u.requestedDate.toDateString()
            };
        });
        let unpaidRequests = await Promise.all(unpaidRequestsPromise);
        return unpaidRequests;
    } catch(err) {
        throw "Could Not Get Requests"
    }
}
