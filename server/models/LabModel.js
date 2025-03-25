import mongoose from "mongoose";

const LabSchema = new mongoose.Schema({
    subjectName: String,
    semester: Number,
    time1: String,
    link1: String
});

const LabModel = mongoose.model("LabModel", LabSchema,'labquestions');

export default LabModel;
