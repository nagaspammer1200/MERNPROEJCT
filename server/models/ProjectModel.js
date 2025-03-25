import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    subjectName: String,
    semester: Number,
    time1: String,
    link1: String
});

const ProjectModel = mongoose.model("ProjectModel", ProjectSchema,'projectseminar');

export default ProjectModel;
