import { PaginationArg, Resolver } from "../../../types"
import db from "db"
import { schema } from "db"


interface ResolverMap {
    Query: {
        cid: Resolver<typeof schema.cidEvents, never, never>

    }
}


export const nineQueries: ResolverMap = {
    Query: {
        cid: async (_, args, __) => {
            const cid_query = await db.select({ cidEvents: schema.cidEvents }).from(schema.cidEvents)
            return cid_query ?? null
        },

    }
}