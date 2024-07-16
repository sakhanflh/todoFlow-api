import express from 'express'
import userRouter from './userRoutes.js'
import dotenv from 'dotenv'
import authRouter from './auth.js'

dotenv.config()
const router = express.Router()

router.use(userRouter)
router.use(authRouter)

export default router;
