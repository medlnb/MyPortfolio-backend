const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  page_shown: {
    type: String,
    required: true
  },
  project_name: {
    type: String,
    required: true,
    unique:true
  },
  description: {
    type: String,
    required: true
  },
  utils_data: {
    type: Array,
    required: true
  },
  landscape: {
    type: Boolean,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  presentation: {
    type: Array
  }
  
},{ timestamps: true })

module.exports = mongoose.model("Project",ProjectSchema)