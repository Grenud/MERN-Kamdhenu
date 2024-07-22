import express from 'express'
import dontenv from 'dotenv'
import cattleRoute from './routes/cattle.routes.js'
import cors from 'cors'
dontenv.config()
export const app = express()
const PORT = process.env.PORT;

app.use(cors())
app.use('/api/v1/cattle',cattleRoute)
app.use('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is responding...."
    })
})


app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}..............`)
})


