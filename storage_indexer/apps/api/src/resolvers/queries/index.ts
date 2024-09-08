import { PaginationArg, Resolver } from "../../../types"
import db from "db"
import { cidEvents } from "db"


interface ResolverMap {
    Query: {
        cid: Resolver<typeof cidEvents, never, never>

    }
}


export const nineQueries: ResolverMap = {
    Query: {
        cid: async (_, args, __) => {
            const cid_query = await db.select({ cidEvents: cidEvents }).from(cidEvents)
            return cid_query ?? null
        },

    }
}