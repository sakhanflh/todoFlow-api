import express from 'express'
import User from '../model/user.js'
const userRouter = express.Router()

userRouter.get('/user', async (req, res) => {
    try {
        const getUser = await User.find({})
        res.status(200).json({
            msg: "Succes get user", data: getUser
        })
    } catch (error) {
        console.log(error)
    }
})

userRouter.post('/user', async (req, res) => {
    try {
        const newData = await User.create(req.body)
        newData.save()
        res.status(201).json(newData)
    } catch (error) {
        console.log(error)
    }
})

export default userRouter;