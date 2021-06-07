const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const aboutRouter = require("./resources/about/about.router");
const awardsRouter = require("./resources/awards/awards.router");
const blogRouter = require("./resources/blog/blog.router");
const contactRouter = require("./resources/contact/contact.router");
const educationRouter = require("./resources/education/education.router");
const experienceRouter = require("./resources/experience/experience.router");
const projectsRouter = require("./resources/projects/projects.router");
const skillsRouter = require("./resources/skills/skills.router");
// const mongo = require("mongodb");
// const assert = require("assert");

// connect to mongoDB
mongoose.connect(
  "mongodb+srv://test:test@user1.dvglj.mongodb.net/sample_mflix?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// "mongodb+srv://login-details.dvglj.mongodb.net/test"
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB successfully connected!");
});

const app = express();
module.exports = app;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api/about", aboutRouter);
app.use("/api/awards", awardsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/contact", contactRouter);
app.use("/api/education", educationRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/skills", skillsRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}/api`);
});
