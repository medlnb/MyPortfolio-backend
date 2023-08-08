const express = require("express")
const {
  get_skills,
  create_skill
} = require("../Controllers/SkillsController")

const router = express.Router()

router.get('/', get_skills)
router.post('/', create_skill)

module.exports = router