import express from 'express'
import db from './config/Database.js' // Ubah sesuai dengan path Anda
import router from './routes/index.js' // Ubah sesuai dengan path Anda
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
  }),
)
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Set additional headers to handle preflight requests
app.options('*', cors())

// Routes
app.use(router)

// Start server and database connection
const start = async () => {
  try {
    await db.getConnection((err, connection) => {
      if (err) {
        console.error('Database connection failed:', err.stack)
        return
      }
      console.log('Database connected as id', connection.threadId)
    })

    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

start()

export default app
