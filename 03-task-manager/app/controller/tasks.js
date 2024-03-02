const Task = require('../model/Tasks')
const asyncWrapper = require('../middleware/async-wrapper')
const { createException } = require('../error/base-class')

const getAllTasks = async (req, res) => {
  try {
    // .find() is used to gather all the documents
    const tasks = await Task.find()
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const createTasks = async (req, res, next) => {
  const { name, completed } = req.body
  try {
    // .create is used to create new document under collections/database
    const task = await Task.create({ name, completed })
    res.status(201).json({ task })
  } catch (error) {
    // this next will passed to the next middleware which is express built-in error handler class
    // we have customized this built-in base error handle
    // by providing a middleware in app.js
    return next(createException(error))
  }
}

const getSingleTask = async (req, res) => {
  const { id: taskId } = req.params
  try {
    // .findOne is used to filter document
    // if the document with given _id match - it returns it otherwise returns null
    const singleTask = await Task.findOne({ _id: taskId })
    if (!singleTask) {
      return res.status(404).json({ message: `Task does not exists: ${taskId}` })
    }
    res.status(200).json({ task: singleTask })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params
  try {
    // .findOneAndDelete is used to find and delete a document.
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
      return res.status(404).json({ message: `Task does not exists: ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

// everytime we are repeating the try/catch block
// this can be refactor by creating an async wrapper - doing it only in this route
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params
  const { name, completed } = req.body
  // .findOneAndUpdate is used for update, match the _id and update the record.
  // default, the schema validators will not applied automatically just like .create
  // with new: true, it will return the updated record otherwise older
  const task = await Task.findOneAndUpdate({ _id: taskId }, { name, completed }, {
    new: true,
    runValidators: true
  })
  if (!task) {
    return res.status(404).json({ message: `Task does not exists: ${taskId}` })
  }
  res.status(200).json({ task })
})

// the difference between put and patch is - patch is for partial update where as update is used to update record.
// What does partial update means? 
// it means that only specific property will be updated which is passed in the req.body, other will remain as perious.
// in case of put - the new record will totally depends on the req.body, what ever you pass will change the record schema.

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTask,
  deleteTask,
  updateTask
}