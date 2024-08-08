import { dagJson } from "@helia/dag-json";
import node from "./client";
import { CreateRequestParams } from "../types";
import { CID, Version } from 'multiformats/cid'
/**
 * storeRequest - Function to store rquest details in IPFS.
 * @param args The request creation parameters.
 */
export async function storeRequest(args: CreateRequestParams): Promise<CID<unknown, number, number, Version>> {
    try {
        const d = dagJson(node);
        const address = await d.add(args);
        return address;
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Store Request");
    }
}
