import express from 'express'
import cattleRoute from '../routes/cattle.routes.js'
import cors from 'cors'
const router = express.Router()

router.use(cors())

router.use('/cattle',cattleRoute)
router.use('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is responding...."
    })
})

export default router;
