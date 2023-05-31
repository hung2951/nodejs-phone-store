import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/products";
const router = Router()
router.post('/product',create)
router.get('/products',getAll)
router.patch('/product/:id',update)
router.delete('/product/:id',remove)

export default router