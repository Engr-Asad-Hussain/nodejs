const express = require('express')
const {
  getAllTasks,
  createTasks,
  getSingleTask,
  deleteTask,
  updateTask
} = require('../controller/tasks')
const router = express.Router()

// router.get('/api/v1/tasks', (req, res) => {
//   res.send('ok')
// })

// another approach to declare routes with express.Router
router.route('/api/v1/tasks').get(getAllTasks)
router.route('/api/v1/tasks').post(createTasks)
router.route('/api/v1/tasks/:id').get(getSingleTask)
router.route('/api/v1/tasks/:id').delete(deleteTask)
router.route('/api/v1/tasks/:id').patch(updateTask)

module.exports = router