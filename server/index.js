import express from 'express'
import * as dotenv from 'dotenv'
import connectDB from './db/connect.js'
import postsRoutes from './routes/postsRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors())
app.use('/api/v1/posts', postsRoutes)
app.use('/api/v1/dalle', dalleRoutes)
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
  res.send('hello from daal')
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () =>
      console.log('Server has started on port http://localhost:8080')
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()
