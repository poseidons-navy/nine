import { createHelia } from 'helia'
import { dagJson } from '@helia/dag-json';
import { CID } from 'multiformats/cid'
// import { CreateRequestParams } from './type';
/**
 * Function to retrieve the payer address from IPFS
 */
export async function retrievePayerAdress(cidstring: string) {
    const helia = await createHelia()

    try {
        console.log("Trying");
        const d = dagJson(helia)
        const cid = CID.parse(cidstring)
        console.log("Cid incoming", cid);
        const requestdata: any= await d.get(cid)
        console.log("Got Request Data", requestdata);
        const payer_address = requestdata.requestInfo.payerAddress
        return payer_address;
    }
    catch (err) {
        console.log(err);
        throw new Error("Could Not Get Payer Address");
    }
    finally {
        if (helia) {
            await helia.stop()
        }
    }
}
(async () => {
    const addresss = await retrievePayerAdress("baguqeerab6mqs6dblrmlayp2qwbjsvbkvoq6qn54pivzrmrutwkckguhupnq")
    console.log("Incoming address", addresss);
})()