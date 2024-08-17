import { aptos, nineAdmin } from "./aptos";
import { MODULE_ENTRY_FUNCTIONS } from "./modules";

/**
 * Store the CID on the blockchain
 */
export async function storeCidOnchain(cid: string) {
    try {
        const storeCidTransaction = await aptos.transaction.build.simple({
            sender: nineAdmin.accountAddress,
            data: {
                function: MODULE_ENTRY_FUNCTIONS.store_cid,
                functionArguments: [
                    cid
                ]
            }

        })
        const commitedTransaction = await aptos.transaction.signAndSubmitTransaction({
            transaction: storeCidTransaction,
            signer: nineAdmin
        })
        const transactionHash = commitedTransaction.hash
        // console.log("Transaction hash: ", transactionHash);
        const status = await aptos.transaction.waitForTransaction({
            transactionHash
        })
        // console.log("Transaction status: ", status);
        if (!status.success) {
            throw new Error("Transaction failed");
        }
    }
    catch (err) {
        throw Error((err as Error).message);
    }


}
// storeCidOnchain("SomethingCid");
(async()=>{
    // const CreateRequestParams = {
    //     requestInfo: {
    //         expectedAmount: 22,
    
    //         // The payee identity. Not necessarily the same as the payment recipient.
    //         payeeAddress: "string",
    
    //         // The payer identity. If omitted, any identity can pay the request.
    //         payerAddress: "string",
    
    //         // The request creation timestamp.
    //         timestamp: "string",
    //     },
    
    //     // The contentData can contain anything.
    //     contentData: {
    //         reason: "string",
    //         dueDate: "string",
    //     },
    
    //     // The identity that signs the request, either payee or payer identity.
    //     signerAddress: "string",
    // }
    await storeCidOnchain("baguqeerab6mqs6dblrmlayp2qwbjsvbkvoq6qn54pivzrmrutwkckguhupnq")
    console.log("Stored CID onchain: ");
})()