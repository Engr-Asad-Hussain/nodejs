const { StatusCodes } = require('http-status-codes')
const { DoesNotExists } = require('../error')
const Job = require('../model/Job')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs })
}

const getSingleJob = async (req, res) => {
  const jobId = req.params.id
  const job = await Job.findOne({ _id: jobId, createdBy: req.user.userId })
  if (!job) {
    throw new DoesNotExists(`Job template (${jobId}) does not exists.`)
  }
  res.status(StatusCodes.OK).json({ job })
}

const createJob = async (req, res) => {
  const { company, position, status } = req.body
  const createdBy = req.user.userId
  const job = await Job.create({ company, position, status, createdBy })
  res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
  const { company, position, status } = req.body
  const jobId = req.params.id
  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: req.user.userId },
    { company, position, status },
    { new: true, runValidators: true }
  )
  if (!job) {
    throw new DoesNotExists(`Job template (${jobId}) does not exists.`)
  }
  res.status(StatusCodes.OK).json({ job })
}

const deleteJob = async (req, res) => {
  const jobId = req.params.id
  const job = await Job.findOneAndDelete({ _id: jobId, createdBy: req.user.userId })
  if (!job) {
    throw new DoesNotExists(`Job template (${jobId}) does not exists.`)
  }
  res.status(StatusCodes.OK).json({ message: 'Job has been deleted successfully.' })
}

module.exports = {
  getAllJobs,
  getSingleJob,
  createJob,
  updateJob,
  deleteJob
}