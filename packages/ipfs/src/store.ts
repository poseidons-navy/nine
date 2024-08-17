import pinata from './client';
export async function storeData(args: Record<string, any>): Promise<string> {
    try {
        const upload = await pinata.upload.json(args)
        return upload.IpfsHash;
    } catch (err) {
        console.log(err);
        throw new Error("Could Not Store Data");
    }
}
