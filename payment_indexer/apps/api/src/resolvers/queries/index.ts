import { PaginationArg, Resolver } from "../../../types"
import db from "db"
import { paymentEvents } from "db"


interface ResolverMap {
    Query: {
        cid: Resolver<typeof paymentEvents, never, never>

    }
}


export const nineQueries: ResolverMap = {
    Query: {
        cid: async (_, args, __) => {
            const cid_query = await db.select({ cidEvents: paymentEvents }).from(paymentEvents)
            return cid_query ?? null
        },

    }
}