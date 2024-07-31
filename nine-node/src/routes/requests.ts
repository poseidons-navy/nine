import Express from 'express';
const  router = Express.Router();

router.get("/test", (req, res) => {
    res.send("Done");
})

export default router;