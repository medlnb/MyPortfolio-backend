const mongoose = require("mongoose")


const Schema = mongoose.Schema

const SkillModel = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  persantage: {
    type: Number,
    required: true
  },
  graphColor: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
})
module.exports = mongoose.model("Skill",SkillModel)