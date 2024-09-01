import { requestParams } from "./types";
import { aptos, nineAdmin } from "./aptos"
import { Account, Ed25519PublicKey, Ed25519Account, AccountAuthenticator, AnyRawTransaction, Deserializer, RawTransaction, Serializer } from "@aptos-labs/ts-sdk";
import { MODULE_ENTRY_FUNCTIONS } from "./module";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { readFromIPFS } from "ipfs"

/**
 * This function is used to make a payment to the receiver
 * params: requestId - RequestId of the request
 *         requestData - The request data from IPFS
 *         payerAdress - Address of the person payin the request
 */
export async function payRequest(requestId: string, requestData: requestParams, payerAdress: Ed25519Account) {
    try {
        const makePaymentTransaction = await aptos.transaction.build.simple({
            // sender: payerAdress.accountAddress,
            sender: nineAdmin.accountAddress,
            data:{
                function: MODULE_ENTRY_FUNCTIONS.store_payment_details,
                functionArguments: [
                    requestData.requestInfo.payerAddress,
                    requestData.requestInfo.payeeAddress,
                    requestData.requestInfo.expectedAmount,
                    requestId
                ]
            }
        })
        console.log("We awaiting");
        const pendingTxn = await aptos.signAndSubmitTransaction({
            signer: nineAdmin,
            transaction: makePaymentTransaction
        })
        const response = await aptos.waitForTransaction({
            transactionHash: pendingTxn.hash,
        });
        console.log("Stored details and emitting events", response.hash);

    }
    catch (error) {
        throw (error)
    }
}
// //Test
// (async () => {
//     const requestId = "bafkreigybl3dilz3kzd6wpx2o47bqn2e6hv5hmbqcugy3zxmc6m26ud3t4";
//     const requestData = await readFromIPFS(requestId);
//     console.log("Request data", requestData);
//     //Some private key

//     await payRequest(requestId, requestData as unknown as requestParams, nineAdmin)
// })()