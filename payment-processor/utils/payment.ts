import { requestParams } from "./types";
import { aptos, nineAdmin } from "./aptos"
import { Account } from "@aptos-labs/ts-sdk";
import { MODULE_ENTRY_FUNCTIONS } from "./module";
import { AccountAddress } from "@aptos-labs/ts-sdk";

/**
 * This function is used to make a payment to the receiver
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