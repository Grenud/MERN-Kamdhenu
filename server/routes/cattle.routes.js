import { Router } from "express";
import {getCattle} from '../controllers/cattle.js'
const router = Router()


router.get('/get-cattle',getCattle);


export default router;