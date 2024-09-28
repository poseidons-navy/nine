import db, { eq } from "db";
import { paymentEvents } from "db";

/**
 * Polling function to fetch payments from the server
 */
export async function fetchPayments(requestId: string) {
    const paidRequest = await db.select({
        requestID: paymentEvents.cid
    }).from(paymentEvents)
    if (paidRequest) {
        return {
            status: "PAID",
            data: paidRequest
        };
    }
    else {
        return {
            status: "PENDING"
        }
    }
}