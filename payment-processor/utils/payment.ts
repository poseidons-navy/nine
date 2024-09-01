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
        const account2 = Account.generate()
        const makePaymentTransaction = await aptos.transaction.build.simple({
            // sender: payerAdress.accountAddress,
            sender: nineAdmin.accountAddress,
            data: {
                function: MODULE_ENTRY_FUNCTIONS.make_payment,
                functionArguments: [100000, "0x1dc1d5999fc92580f0324e270318ce6465a428d30e2d488b0471fd764aad39cc", "Some_cid"  ]
            }
            // data: {
            //     function: MODULE_ENTRY_FUNCTIONS.make_payment,
            //     typeArguments: [],
            //     functionArguments: [
            //         requestData.requestInfo.expectedAmount,
            //         // requestData.requestInfo.payeeAddress,
            //         // requestData.requestInfo.payerAddress,

            //         account2.accountAddress,
                   

            //         requestId
            //     ]
            // }
        })
        console.log("We awaiting");
        const pendingTxn = await aptos.signAndSubmitTransaction({
            signer: nineAdmin,
            transaction: makePaymentTransaction
        })
        const response = await aptos.waitForTransaction({
            transactionHash: pendingTxn.hash,
        });
        console.log("Transferred coins", response.hash);

    }
    catch (error) {
        throw (error)
    }
}
//Test
(async () => {
    const requestId = "bafkreihmijlixhujrzlf2cqvrtomnyilmltdpgpuf5suotnkgmz2i2vkuy";
    const requestData = await readFromIPFS(requestId);
    console.log("Request data", requestData);
    //Some private key

    await payRequest(requestId, requestData as unknown as requestParams, nineAdmin)
})()