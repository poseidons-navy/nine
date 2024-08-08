import { CreateRequestParams } from "../types";
import { storeRequest } from "../ipfs";
/**
 * Create a request.
 * @param args The request creation parameters.
 */
export async function createRequest(args: CreateRequestParams) {
    try {
        // Store in IPFS
        const address = await storeRequest(args);
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Create Request");
    }
}