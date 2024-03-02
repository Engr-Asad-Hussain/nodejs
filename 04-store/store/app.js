require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const productsRouter = require('./route/products')
const notFoundMiddleware = require('./middleware/not-found')

// create express instance
const app = express()

const startTime = new Date().toUTCString()
app.get('/api/healthCheck', (req, res) => {
  const data = {
    app: 'Store',
    appVersion: '0.0.0',
    appStartTime: startTime,
    message: 'Server is up!'
  }
  res.status(200).json(data)
})

// defined all the product routes as a middleware with base route as /api/v1
app.use('/api/v1', productsRouter)

// routes that does not match as a middleware
app.use(notFoundMiddleware)

// Initialize the application and database
const initializeApp = async () => {
  try {
    // accept APP_PORT if found in .env else use 5000 as default port
    const port = process.env.APP_PORT || 5000
    await connectDB(process.env.MONGO_URI).then(() => console.log('Connected to the database.'))
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
initializeApp()