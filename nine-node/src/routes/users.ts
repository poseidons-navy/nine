import Express from 'express';
const router = Express.Router();
import db, { users } from "db";
import "dotenv/config";
import { Webhook } from 'svix';

router.post('/create', async (req, res) => {
    try {
        // Verify svix webhook
        if(!process.env.WEBHOOK_SECRET) {
            console.log("WEBHOOK SECRET NOT KEPT");
            return res.status(501).json({message: "Could Not Create User Account"});
        }

        // Get details to verify webhook from headers
        const headers = req.headers
        const svix_id = headers['svix-id']
        const svix_timestamp = headers['svix-timestamp']
        const svix_signature = headers['svix-signature']

        // If there are no Svix headers, error out
        if (!svix_id || !svix_timestamp || !svix_signature) {
            console.log("Could Not Get Svix Headers");
            return res.status(501).json({message: "Could Not Create User Account"});
        }

        // Create a new Svix instance with your secret.
        const wh = new Webhook(process.env.WEBHOOK_SECRET)
        let evt;

        try {
            evt = wh.verify(req.body, {
                //@ts-ignore
                'svix-id': svix_id,
                //@ts-ignore
                'svix-timestamp': svix_timestamp,
                //@ts-ignore
                'svix-signature': svix_signature,
            })
        } catch(err) {
            console.log("Could Not Verify SVIX headers", err);
            return res.status(501).json({message: "Could Not Create User Status"});
        }
        
        // Get data from webhook
        //@ts-ignore
        const {address, expoToken} = evt.data;
        await db.insert(users).values({
            address,
            expoToken
        })
        res.json({message: "User Created Succesfully"}).status(201);
    } catch(err) {
        console.log("Could Not Create User Account")
    }
})

router.get('/test', (req, res) => {
    res.send("Done")
})

export default router;
