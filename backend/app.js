import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import router from "./routes/routes.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT46

app.listen(port, ()=>{
    console.log("DB online");
})

app.use('/juanvaldez', router)