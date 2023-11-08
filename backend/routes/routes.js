import express from "express";
import dotenv from 'dotenv'
import { MongoClient } from "mongodb";

dotenv.config()
const router = express.Router()

const base = process.env.MONGO_ELN
const nombrebase = 'JuanValdez'



router.get('/cafes', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('cafe')
        const result = await collection.find().toArray()

        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

export default router
