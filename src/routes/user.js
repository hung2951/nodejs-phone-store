import { Router } from "express";
import { decodeAuth, getAll, getOne, login, remove, signup, update } from "../controllers/user";
const router = Router()

router.post('/login',login)
router.post('/signup',signup)
router.get('/decode-auth',decodeAuth)
router.get('/users',getAll)
router.get('/user/:id',getOne)
router.patch('/user/:id',update)
router.delete('/user/:id',remove)


export default router