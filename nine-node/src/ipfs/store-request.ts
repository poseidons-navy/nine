import { CreateRequestParams } from "../types";
import {storeData} from "ipfs";
/**
 * storeRequest - Function to store rquest details in IPFS.
 * @param args The request creation parameters.
 */
export async function storeRequest(args: CreateRequestParams): Promise<string> {
    try {
        return await storeData(args);
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Store Request");
    }
    
    }

