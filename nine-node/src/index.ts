import Express from "express";
import cors from 'cors';
import "dotenv/config";
import requests from "./routes/requests";
import users from "./routes/users";

let app = Express();

app.use("/", cors({ origin: '*' }), Express.json())
app.use("/request", requests);
app.use("/users", users);


app.get("/test", (req, res) => {
    res.send("Done");
})

const port = process.env.PORT ?? 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})