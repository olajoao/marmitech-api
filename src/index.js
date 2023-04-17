import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes/index.js'

const port = process.env.PORT ?? 4000

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

routes(app)

app.listen(port, () => console.log('Server is running on port ', port))
