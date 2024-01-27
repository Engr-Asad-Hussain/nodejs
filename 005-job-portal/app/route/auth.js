const express = require('express')
const { register, login } = require('../controller/auth')

// define the express.Router instance
const router = express.Router()

router.post('/auth/register', register)
router.post('/auth/login', login)

module.exports = router