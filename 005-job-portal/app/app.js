// parse the dotenv file to get secrets
require('dotenv').config();

// this package will help us get rid of errorWrappers and try/catch blocks
// when the exception get raised from the controller - it passed to the errorHandleMiddleware
require('express-async-errors');

// add the various security headers
const helmet = require('helmet')

// ensure endpoints accessible from other domains
const cors = require('cors')

// sanities the users input in req.body, req.query and req.params
// as a results protects from cross-site scripting attacks where the attacker tries to inject some malicious code
const xss = require('xss-clean')

// limit the amount of requests the user can make
const rateLimiter = require('express-rate-limit')

const express = require('express')
const swagger = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const connectDB = require('./db/connect')
const jobsRouter = require('./route/jobs')
const authRouter = require('./route/auth')
const routeNotExists = require('./middleware/does-not-exists')
const errorHandler = require('./middleware/error-handle')
const tokenValidator = require('./middleware/token-validator')


// create express instance
const app = express()

// middleware to parse json object (req.body)
app.use(express.json())

// middleware to access swagger
app.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

// Reference: https://express-rate-limit.mintlify.app/overview
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
  })
)
// other security headers as middleware
app.use(helmet())
app.use(cors())
app.use(xss())

const startTime = new Date().toTimeString()
app.get('/api/health', (req, res) => {
  const res_body = {
    app: 'Job-Portal',
    appVersion: '0.0.0',
    appStartTime: startTime
  }
  res.status(200).json(res_body)
})

// defined all the tasks routes as a middleware
app.use('/api/v1', authRouter)
app.use('/api/v1', tokenValidator, jobsRouter)

// custom error-handle middleware
app.use(errorHandler)

// routes that does not match as a middleware
app.use(routeNotExists)

// Initialize the application and database
const initializeApp = async () => {
  const port = process.env.APP_PORT
  try {
    await connectDB(process.env.MONGO_URI).then(() => console.log('Connected to the database.'))
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
initializeApp()