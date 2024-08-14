import { AptosConfig, Aptos, Network, Account, Ed25519PrivateKey } from '@aptos-labs/ts-sdk';
import "dotenv/config";
const NETWORK = process.env.NEXT_PUBLIC_NETWORK! as Network
const aptosConfig = new AptosConfig({ network: NETWORK ?? Network.TESTNET });
export const aptos = new Aptos(aptosConfig);
export const nineAdmin = Account.fromPrivateKey({
    privateKey: new Ed25519PrivateKey(process.env.NEXT_PUBLIC_NINE_ADMIN_PRIVATE_KEY!),
})