import {z} from "zod";

export const createRequestSchema = z.object({
    requestInfo: z.object({
        expectedAmount: z.number(),
        payeeAddress: z.string().length(66, "Payee address should be 66 characters long"),
        payerAddress: z.string().length(66, "Payer address should be 66 characters long"),
        timestamp: z.string()
    }),
    contentData: z.object({
        reason: z.string(),
        dueDate: z.string()
    }),
    signerAddress: z.string().length(66, "Signer address should be 66 characters long")
});

export type CreateRequestParams = z.infer<typeof createRequestSchema>;
// export interface CreateRequestParams {
//     requestInfo: {
//         expectedAmount: number,

//         // The payee identity. Not necessarily the same as the payment recipient.
//         payeeAddress: string,

//         // The payer identity. If omitted, any identity can pay the request.
//         payerAddress: string,

//         // The request creation timestamp.
//         timestamp: string,
//     },

//     // The contentData can contain anything.
//     contentData: {
//         reason: string,
//         dueDate: string,
//     },

//     // The identity that signs the request, either payee or payer identity.
//     signerAddress: string,
// }
