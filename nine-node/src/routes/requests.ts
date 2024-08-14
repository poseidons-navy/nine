import Express from 'express';
const router = Express.Router();

router.get("/test", (req, res) => {
    res.send("Done");
})

router.post('/create', async(req, res) => {
    res.send("Created");
})

export default router;