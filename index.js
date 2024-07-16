import bodyParser from 'body-parser'
import express from 'express'
import router from './router/index.js';
import dotenv from 'dotenv'
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    try {
        res.json({
            msg: 'Connected'
        })
    } catch (error) {
        console.log(error)
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))