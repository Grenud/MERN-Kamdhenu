import express from 'express'
import dontenv from 'dotenv'
import cattleRoute from '../routes/cattle.routes.js'
import cors from 'cors'
dontenv.config()
const app = express()

app.use(cors())
app.use('/api/v1/cattle',cattleRoute)
app.use('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is responding...."
    })
})

export default app