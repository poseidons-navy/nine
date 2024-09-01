import protos, { aptos } from "@aptos-labs/aptos-protos";
import { LevelDB } from "@nine/lama2";
import "dotenv/config";
const MODULE_ADDRESS = process.env.MODULE_ADDRESS!
console.log("Module address", MODULE_ADDRESS);
const NINE = `${MODULE_ADDRESS}::payment` as const


const SUPPORTED_EVENT_TYPES = [
    `${NINE}::PaymentEvent`,
]

export type ProcessingResult = {
    startVersion: bigint;
    endVersion: bigint;
};

export abstract class TransactionsProcessor {

    abstract name(): string;


    abstract processTransactions({
        transactions,
        startVersion,
        endVersion,
        db
    }: {
        transactions: aptos.transaction.v1.Transaction[];
        startVersion: bigint;
        endVersion: bigint;
        db: LevelDB
    }): Promise<ProcessingResult>;

}


export class ReadProcessor extends TransactionsProcessor {
    name(): string {
        return "read_processor";
    }

    async processTransactions({
        transactions,
        startVersion,
        endVersion,
        db
    }: {
        transactions: aptos.transaction.v1.Transaction[];
        startVersion: bigint;
        endVersion: bigint;
        db: LevelDB
    }): Promise<ProcessingResult> {
        for (const transaction of transactions) {

            if (transaction.type != protos.aptos.transaction.v1.Transaction_TransactionType.TRANSACTION_TYPE_USER) {
                // console.log("Continuing");
                continue
            }

            const userTransaction = transaction.user!;


            const hex_signature = userTransaction.request?.signature?.ed25519?.signature ?
                Buffer.from(userTransaction.request?.signature?.ed25519?.signature!).toString('hex') : ''

            if (!userTransaction.events) {
                console.log("No events")
                continue
            }

            const events = userTransaction.events!;

            for (const event of events) {

                const eventType = event.typeStr;
                // console.log("Event type", eventType);
                if (eventType && SUPPORTED_EVENT_TYPES.includes(eventType)) {
                    console.log("Our event type", eventType);
                    console.log("Processing event", eventType)
                    console.log("Event data", event.data);
                    console.log("Signature", hex_signature);
                    await db.put({
                        type: eventType?.split("::")?.at(2),
                        event: event.data,
                        signature: hex_signature
                    })
                    // await db.insertEvent(JSON.parse(event.data!));

                    
                }
            }

        }
        return {
            startVersion,
            endVersion
        };
    }
}