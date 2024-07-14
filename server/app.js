import express from 'express'
import dontenv from 'dotenv'
import cattleRoute from './routes/cattle.routes.js'
import cors from 'cors'
dontenv.config()
const app = express()
const PORT = process.env.PORT;

app.use(cors())
app.use('/api/v1/cattle',cattleRoute)


app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}..............`)
})