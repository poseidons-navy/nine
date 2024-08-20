import { requestParams } from "./types";
import { aptos, nineAdmin } from "./aptos"
import { Account } from "@aptos-labs/ts-sdk";
import { MODULE_ENTRY_FUNCTIONS } from "./module";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import {read} from "ipfs"

/**
 * This function is used to make a payment to the receiver
 * params: requestId - RequestId of the request
 *         requestData - The request data from IPFS
 *         payerAdress - Address of the person payin the request
 */
export async function payRequest(requestId: string, requestData: requestParams, payerAdress: string) {
    try {
        const makePaymentTransaction = await aptos.transaction.build.simple({
            sender: await AccountAddress.from(payerAdress),
            data: {
                function: MODULE_ENTRY_FUNCTIONS.make_payment,
                functionArguments: [
                    requestData.requestInfo.expectedAmount,
                    requestData.requestInfo.payeeAddress,
                    requestData.requestInfo.payerAddress,
                    requestId
                ]
            }
        })
        
    }
    catch (error) {
        throw Error((error as Error).message)
    }
}
//Test
(async()=>{
const requestId = "";
const requestData = await read(requestId);
//Some private key
const payer_address = ""

})()