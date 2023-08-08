const express = require("express")
const {
  getProjects,
  createProject
} = require("../Controllers/ProjectsController")

const router = express.Router()

router.get("/", getProjects)
router.post("/",createProject)



module.exports = router