const express = require('express')
const {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob
} = require('../controller/jobs')

// define the express.Router instance
const router = express.Router()

router.route('/jobs').get(getAllJobs)
router.route('/jobs/:id').get(getSingleJob)
router.route('/jobs').post(createJob)
router.route('/jobs/:id').patch(updateJob)
router.route('/jobs/:id').delete(deleteJob)

// instead of adding tokenValidator here for each router: 
// i.e, .router('..').get([tokenValidatr, getAllJobs])
// we can make use of app.use middleware
// it will be applied to all the jobs routes

module.exports = router