import Express from 'express';
import { Request } from 'express-serve-static-core';
const router = Express.Router();
import db, { users, eq } from "db";
import "dotenv/config";
import { Webhook } from 'svix';
import { DEFAULT_VALUE } from '../utils/constants';
import { ClerkExpressWithAuth, WithAuthProp } from '@clerk/clerk-sdk-node';

router.post('/create', async (req, res) => {
    try {
        res.send("Done");
        // // Verify svix webhook
        // if(!process.env.WEBHOOK_SECRET) {
        //     console.log("WEBHOOK SECRET NOT KEPT");
        //     return res.status(501).json({message: "Could Not Create User Account"});
        // }

        // // Get details to verify webhook from headers
        // const headers = req.headers
        // const svix_id = headers['svix-id']
        // const svix_timestamp = headers['svix-timestamp']
        // const svix_signature = headers['svix-signature']
        // console.log("SVIX details => ", svix_id, svix_signature, svix_timestamp);

        // // If there are no Svix headers, error out
        // if (!svix_id || !svix_timestamp || !svix_signature) {
        //     console.log("Could Not Get Svix Headers");
        //     return res.status(501).json({message: "Could Not Create User Account"});
        // }

        // // Create a new Svix instance with your secret.
        // const wh = new Webhook(process.env.WEBHOOK_SECRET)
        // let evt;

        // try {
        //     evt = wh.verify(JSON.stringify(req.body), {
        //         //@ts-ignore
        //         'svix-id': svix_id,
        //         //@ts-ignore
        //         'svix-timestamp': svix_timestamp,
        //         //@ts-ignore
        //         'svix-signature': svix_signature,
        //     })
        // } catch(err) {
        //     console.log("Could Not Verify SVIX headers", err);
        //     return res.status(501).json({message: "Could Not Create User Status"});
        // }
        
        // // Get data from webhook
        // //@ts-ignore
        // const {id} = evt.data;
        // await db.insert(users).values({
        //     clerkID: id,
        //     address: DEFAULT_VALUE,
        //     expoToken: DEFAULT_VALUE
        // });
        // res.json({message: "User Created Succesfully"}).status(201);
    } catch(err) {
        console.log("Could Not Create User Account", err)
    }
})

router.post('/initialize', ClerkExpressWithAuth(), async (req: WithAuthProp<Request>, res) => {
    try {
        console.log("BODY => ", req.body);
       // Get clerk ID from somewhere
        const clerkID = req.auth.userId;
        if(!clerkID) {
            console.log("Headers => ", req.headers);
            console.log("Auth Details => ", req.auth);
            return res.status(400).json({message: "Please Log In!"});
        } else {
            console.log(clerkID)
        }

        const {expoToken, address} = req.body;
        await db.insert(users).values({
            clerkID,
            expoToken,
            address
        })
        return res.json({message: "User Initialized Succesfully"}).status(201);
    } catch(err) {
        console.log("Could Not Initialize User Account => ", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
});

router.get('/test', (req, res) => {
    res.send("Done")
})

export default router;
