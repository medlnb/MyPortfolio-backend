const Skill = require("../Models/SkillModel")

const get_skills = async (req, res) => {
  try {
    const skills = await Skill.find({})
    res.status(201).json(skills)
  } catch (err) {

    res.status(501).json(err )
  } 
  
}
const update_skill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate({},)
}
const create_skill = async (req, res) => {
  const {title,persantage,graphColor,img} = req.body 
  try {
    const skill = await Skill.create({title,persantage,graphColor,img})  
    res.status(200).json(skill)
  } catch (err) {
    res.status(500).json({error:err.message})
  }
}
module.exports = {
  get_skills,
  create_skill,
  update_skill
}