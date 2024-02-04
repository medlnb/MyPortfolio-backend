const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const SkillsRouter = require("./routes/SkillsRouter")
const ProjectsRouter = require("./routes/ProjectsRouter")
require("dotenv").config()

const app = express()


app.use(express.json())
app.use(cors())

app.use("/api/skills", SkillsRouter)
app.use("/api/projects",ProjectsRouter)


mongoose.connect(process.env.MONGO_URI,)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on 000 and db connected")
})
})

