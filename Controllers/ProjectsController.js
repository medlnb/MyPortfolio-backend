const express = require("express")
const Project = require("../Models/ProjectModel")


const getProjects = async(req, res) => {
  try {
    const Projects = await Project.find({}).sort({ createdAt: -1 })
    res.status(200).json(Projects)
  } catch (err) {
    res.status(200).json("error getting data from database")
  }
}
const createProject = async (req, res) => {
  const {page_shown,project_name,description,utils_data,landscape,img,link,presentation} = req.body
  try {
    const project = await Project.create({page_shown,project_name,description,utils_data,landscape,img,link,presentation})  
    res.status(200).json(project)
  } catch (err) {
    res.status(500).json({error:err.message})
  }
}



module.exports = {
  getProjects,
  createProject
}