require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./model/Products')
const productsInventory = require('./inventory.json')

/*
 * this module will populate the records in the database - mongodb
 * the predefined records are present in inventory.json file.
 */
const populateDatabase = async () => {
  try {
    // make a connection to the database
    await connectDB(process.env.MONGO_URI)

    // delete all the previously populated documents in product database
    await Product.deleteMany()

    // .create also accepts an array containing the schema objects
    await Product.create(productsInventory)
    console.log('Successfully populate products record(s).')
    process.exit(0)
  } catch (error) {
    console.log(error)
  }
}
populateDatabase()
