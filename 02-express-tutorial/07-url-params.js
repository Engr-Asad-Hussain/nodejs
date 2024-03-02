const express = require('express')
const { products } = require('./data.js')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send(`
    <h2>Products & Services</h2>
    <a href="/api/products">Products</a>
  `)
})

app.get('/api/products', (req, res) => {
  const filteredProducts = products.map((product) => {
    return { id: product.id, name: product.name, image: product.image }
  })
  res.status(200).send(filteredProducts)
})

// URL Params: Any parameter that is present in the URL. They come in several different flawors:
// 1. Path/Route Params: For example: https:.../questions/39266970 the 39266970 would be the id of the question.
app.get('/api/products/:id', (req, res) => {
  const filteredProducts = products.find(product => product.id === parseInt(req.params.id))
  if (!filteredProducts) {
    res.status(404).send('Product does not exists')
  } else {
    res.status(200).send(filteredProducts)
  }
})

// 2. Query/String Params: For example: https:.../questions/?slowClient=true, and with that parameter you may program a client 
// computer to perform any specific action for browsers running in slow computers.
app.get('/api/v1/products/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      if (product.name.includes(search)) return product
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, parseInt(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send({ success: true, data: [] })
  }
  res.status(200).send(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})