import Express from "express";
import cors from 'cors';
import "dotenv/config";

let app = Express();

app.use("/", cors({ origin: '*' }), Express.json())

app.get("/test", (req, res) => {
    res.send("Done");
})

const port = process.env.PORT ?? 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})