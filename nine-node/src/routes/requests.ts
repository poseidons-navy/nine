import Express from 'express';
import { createRequestSchema } from '../types';
import { createRequest } from '../requests';
const router = Express.Router();

router.get("/test", (req, res) => {
    res.send("Done");
})

router.post('/create', async(req, res) => {
    let body = req.body;
    console.log(body);

    let parsedBody = createRequestSchema.safeParse(body);
    if(!parsedBody.success) {
        return res.status(400).json({message: parsedBody.error.issues[0].message})
    } else {
        let parsed = parsedBody.data;
        let requestID = await createRequest(parsed);
        return res.status(201).json({requestID});
    }
})

export default router;