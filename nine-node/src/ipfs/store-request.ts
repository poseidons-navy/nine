import { dagJson } from "@helia/dag-json";
import { CreateRequestParams } from "../types";
import { CID, Version } from 'multiformats/cid';
import { createHelia } from "helia";
/**
 * storeRequest - Function to store rquest details in IPFS.
 * @param args The request creation parameters.
 */

export async function storeRequest(args: CreateRequestParams): Promise<CID<unknown, number, number, Version>> {
    const node = await createHelia();
    try {

        const d = dagJson(node);
        const address = await d.add(args)
        const content = await d.get(address)
        console.log("Content", content);
        await node.stop();
        return address;
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Store Request");
    }
    finally {
        if (node) {
            await node.stop();
        }
    }
}
//Test
(async () => {
    const CreateRequestParams = {
        requestInfo: {
            expectedAmount: 22,

            // The payee identity. Not necessarily the same as the payment recipient.
            payeeAddress: "string",

            // The payer identity. If omitted, any identity can pay the request.
            payerAddress: "string",

            // The request creation timestamp.
            timestamp: "string",
        },

        // The contentData can contain anything.
        contentData: {
            reason: "string",
            dueDate: "string",
        },

        // The identity that signs the request, either payee or payer identity.
        signerAddress: "number",
    }
    const cid = await storeRequest(CreateRequestParams)
    console.log("Cid incoming", cid);
})()
