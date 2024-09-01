import { AptosConfig, Aptos, Network, Account, Ed25519PrivateKey } from '@aptos-labs/ts-sdk'
import "dotenv/config";
const NETWORK = process.env.NEXT_PUBLIC_NETWORK! as Network
console.log(process.env.NEXT_PUBLIC_NINE_ADMIN_PRIVATE_KEY!);
const aptosConfig = new AptosConfig({ network: NETWORK ?? Network.TESTNET });
export const aptos = new Aptos(aptosConfig);
export const nineAdmin = Account.fromPrivateKey({
    privateKey: new Ed25519PrivateKey("0x642ff352273942d5446599aceb9977ba5ee082c366093cc9267ad0c41c6a8038"),
})