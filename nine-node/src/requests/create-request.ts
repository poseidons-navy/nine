interface CreateRequestParams {
    requestInfo: {
        expectedAmount: number,

        // The payee identity. Not necessarily the same as the payment recipient.
        payeeAddress: string,

        // The payer identity. If omitted, any identity can pay the request.
        payerAddress: string,

        // The request creation timestamp.
        timestamp: Date,
    },

    // The contentData can contain anything.
    contentData: {
        reason: string,
        dueDate: Date,
    },

    // The identity that signs the request, either payee or payer identity.
    signerAddress: string,
}

export async function createRequest(args: CreateRequestParams) {
    try {
        // Store in IPFS
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Create Request");
    }
}