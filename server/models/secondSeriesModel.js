import mongoose from "mongoose";

const secondSeriesSchema = new mongoose.Schema({
    subjectName: String,
    semester: Number,
    time1: String,
    link1: String
});

const SecondSeries = mongoose.model("SecondSeries", secondSeriesSchema,'secondseries');

export default SecondSeries;
