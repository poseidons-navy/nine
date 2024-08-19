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
