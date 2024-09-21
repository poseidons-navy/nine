import { CreateRequestParams } from "../types";
import { storeRequest } from "../ipfs";
import { storeCidOnchain } from "../utils";

/**
 * Create a request.
 * @param args The request creation parameters.
 */
export async function createRequest(args: CreateRequestParams): Promise<string> {
    try {
        // Store in IPFS
        const address = await storeRequest(args);
        // Store in blockchain
        await storeCidOnchain(address.toString());
        return address.toString();
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Create Request");
    }
}
