import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import api from './api/index.js'
export const app = express()
app.use(cors())
dotenv.config()
const PORT = process.env.PORT;

app.use('/api/v1',api)



app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}..............`)
})


