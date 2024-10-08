import Express from 'express';
import { createRequestSchema } from '../types';
import { createRequest, fetchPayments } from '../requests';
const router = Express.Router();
import db, {eq, users} from "db";
import {sendNotification} from "notifications";
import getRequests, { getAllRequests } from '../requests/get-requests';

router.get("/", async (req, res) => {
    try {
        let requests = await getRequests();
        res.json(requests);
    } catch(err: any) {
        res.json({error: err.toString()}).status(500);
    }
});

router.get("/all", async(req, res) => {
    try {
        let requests = await getAllRequests();
        res.json(requests);
    } catch(err) {
        console.log("Error Getting Requests", err);
        return res.status(500).json({message: "Error Getting Requests"})
    }
});

router.get("/one/:requestID", async (req, res) => {
    try {
        let requestID = req.params.requestID;
        let requests = await fetchPayments(requestID);
        res.json(requests);
    } catch(err: any) {
        res.json({error: err.toString()}).status(500);
    }
}
);


router.get("/test", async (req, res) => {
   res.send("Testing Requests"); 
})


router.post('/create', async(req, res) => {
    let body = req.body;
    console.log(body);

    try {
        
        let parsedBody = createRequestSchema.safeParse(body);
        if(!parsedBody.success) {
            return res.status(400).json({message: parsedBody.error.issues[0].message})
        } else {
            let parsed = parsedBody.data;
            let requestID = await createRequest(parsed);

            // Send user notification
            let userDetails = await db.select({
                token: users.expoToken
            }).from(users)
            .where(eq(users.address, parsed.requestInfo.payerAddress));

            if (userDetails.length <= 0) {
                return res.status(400).json({message: "Payer Account Does Not Exist"});
            } 
            await sendNotification([{
                title: "You Have Received A Payment Request",
                pushToken: userDetails[0].token,
                body: `You have received a payment request of ${parsed.requestInfo.expectedAmount} APT`,
                data: parsed
            }]);
            return res.status(201).json({requestID});
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
})

router.all('*', (req, res) => {
    res.json({error: "Route Does Not Exist"}).status(400);
})

export default router;
