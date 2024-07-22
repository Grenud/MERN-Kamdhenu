import express from 'express'
import dontenv from 'dotenv'
import cattleRoute from './routes/cattle.routes.js'
import cors from 'cors'
import api from './api/index.js'
dontenv.config()
export const app = express()
const PORT = process.env.PORT;

app.use(cors())
app.use('/api/v1',api)



app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}..............`)
})


