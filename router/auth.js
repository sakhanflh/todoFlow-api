import express from 'express'
import User from '../model/user.js'
const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {
    try {
        const isValid = await User.find({email: req.body.email})
        if(isValid.length !== 0){
            return res.json(isValid)
        }

        res.json({msg: 'Cant find Account'})
    } catch (error) {
        console.log(error)
    }
})

export default authRouter;