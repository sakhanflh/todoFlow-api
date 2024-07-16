import express from 'express'
import userRouter from './userRoutes.js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

router.use(userRouter)

export default router;
