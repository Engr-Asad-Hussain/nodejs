const express = require('express')
const tasks = require('./router/tasks')
const connectDB = require('./database/connect')
const routeNotExists = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

// create express instance
const app = express()

// middleware to parse json object (req.body)
app.use(express.json())

// middleware to host static assets
app.use(express.static('./public'))

// defined all the tasks routes as a middleware
app.use(tasks)

// routes that does not match as a middleware
app.use(routeNotExists)

// custom error-handle middleware
app.use(errorHandlerMiddleware)

// Initialize the application and database
const initializeServer = async () => {
  try {
    const port = process.env.PORT
    await connectDB(process.env.MONGO_URI).then(() => console.log('Connected to database.'))
    app.listen(port, () => console.log(`Server is listening on port ${port}...`))
  }
  catch (error) {
    console.log(error)
  }
}
initializeServer()