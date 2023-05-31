import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/version-prd";
const router = Router()
router.post('/version',create)
router.get('/versions',getAll)
router.patch('/version/:id',update)
router.delete('/version/:id',remove)

export default router