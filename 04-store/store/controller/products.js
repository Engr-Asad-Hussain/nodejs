const Product = require('../model/Products')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    // featured: false,
    // company: "Router",
    // name: { $regex: 'de', $options: 'i' }
    price: { $lte: 20 }
  })
    // .sort('name -price')
    // .select('name price')
    // .limit(1)
    // .skip(1)
  res.status(200).json({ nbHits: products.length, products })
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilter } = req.query
  const queryObject = {}

  /*
   * filter the results based on featured property
   * if user provide the argument than only include in the queryObject
   */
  if (featured && ['true', 'false'].includes(featured)) {
    queryObject.featured = featured === 'true' ? true : false
  }
  /*
   * filter the results based on the company property
   */
  if (company) {
    queryObject.company = company
  }
  /* 
   * filter the results based on the name property
   * used regular expression for keyward search - i stands for case-insensitive
   * reference: https://www.mongodb.com/docs/v4.2/reference/operator/query/
   */
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }
  /*
   * number filters are used for numeric conditioning i.e., <, >, <= ...
   * this string coming to the application is "price<50", "price<50,rating=3"
   */
  if (numericFilter) {
    const operatorMap = {
      '>': '$gt',
      '<': '$lt',
      '=': '$eq',
      '>=': '$gte',
      '<=': '$lte'
    }
    // numericFilter = price<50,rating>3
    const regEx = /\b(<|>|>=|=|<|<=)\b/g

    // filters = price-$lt-50,rating-$gt-3
    let filters = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    )

    // filters.split = [ 'price-$lt-50', 'rating-$gt-3' ]
    const options = ['price', 'rating']
    filters = filters.split(',').forEach((item) => {
      // price, $lt, 50 = item.split
      // rating, $gt, 3 = item.split
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = {[operator]: Number(value)}
        // queryObject: { price: { '$lt': 50 } } }
        // queryObject: { price: { '$lt': 50 }, rating: { '$gt': 3 } } }
      }
    })
  }
  let result = Product.find(queryObject)
  /*
   * sort the results based on the provided sort property
   * the string coming to the application is "name,-price", "name" i.e., spliting required
   */
  if (sort) {
    const sortString = sort.replace(' ', '').split(',').join(' ')
    result = result.sort(sortString)
    // need chain here cause if sort field is missing - not provided by client
    // then chaining with .find will leads to error.
  }
  /*
   * return only the selected fields which user provided.
   */
  if (fields) {
    const fieldString = fields.replace(' ', '').split(',').join(' ')
    result = result.select(fieldString)
  }
  /*
   * paginate the result-set based on page and limit properties
   * limit restricts number of products per page.
   * page is used to fetch items of particular page.
   */
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit
  result = result.limit(limit).skip(skip)

  // gather the filtered and sorted object from models instance
  const products = await result
  res.status(200).json({ nbHits: products.length, page, products })
}


module.exports = {
  getAllProducts,
  getAllProductsStatic
}