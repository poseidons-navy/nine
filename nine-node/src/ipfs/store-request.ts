import { dagJson } from "@helia/dag-json";
import node from "./client";

export async function storeRequest() {
    try {
        const d = dagJson(node);

        const object1 = { hello: 'world' }
        const myImmutableAddress1 = await d.add(object1)
        
        const object2 = { link: myImmutableAddress1 }
        const myImmutableAddress2 = await d.add(object2)
        
        const retrievedObject = await d.get(myImmutableAddress2)
        console.log(retrievedObject)
        // { link: CID(baguqeerasor...) }
        
        // @ts-ignore
        console.log(await d.get(retrievedObject.link))
        // { hello: 'world' }
    } catch(err) {
        console.log(err);
        throw new Error("Could Not Store Request");
    }
}

async function test() {
    try {
        await storeRequest();
    } catch(err) {
        console.log("Error Testing =>", err);
    }
}
test()