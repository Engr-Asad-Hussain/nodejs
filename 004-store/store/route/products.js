const express = require('express')
const {
  getAllProducts,
  getAllProductsStatic
} = require('../controller/products')

// define the express.Router instance
const router = express.Router()

// another approach to declare routes with express.Router
// rather than using app.get, app.post, ...
router.route('/products').get(getAllProducts)
router.route('/products/static').get(getAllProductsStatic)

module.exports = router