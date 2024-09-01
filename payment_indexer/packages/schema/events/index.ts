import { z } from "zod";
//TODO: ADD timestamp to grpc schema
const transformStringToDate = (v: string) => new Date(parseInt(v) / 1000)
export const Cid = z.object({
    cid: z.string(),
    timestamp: z.string().transform(transformStringToDate),
    hid: z.string().transform(v => parseInt(v)),
    amount: z.number(),
    payer_address: z.string(),
    payee_address: z.string()
})