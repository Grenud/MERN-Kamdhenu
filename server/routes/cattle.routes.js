import { Router } from "express";
import { getCattle, getCattleById } from "../controllers/cattle.js";
const router = Router();

router.get("/get-cattle", getCattle);
router.get("/get-cattle/:id",getCattleById);

export default router;
