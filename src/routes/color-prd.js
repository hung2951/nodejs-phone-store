import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/color-prd";
const router = Router()
router.post('/color',create)
router.get('/colors',getAll)
router.patch('/color/:id',update)
router.delete('/color/:id',remove)

export default router