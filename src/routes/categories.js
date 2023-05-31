import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/categories";
const router = Router()
router.post('/category',create)
router.get('/categories',getAll)
router.patch('/category/:id',update)
router.delete('/category/:id',remove)

export default router