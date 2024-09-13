import Express from 'express';
const router = Express.Router();
import db, { users } from "db";

router.post('/create', async (req, res) => {
    try {
        const {address, expoToken} = req.body;
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