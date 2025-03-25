import mongoose from "mongoose"

const firstSeriesSchema = new mongoose.Schema({
  subjectName: String,
  semester: Number,
  time1: String,
  link1: String
});
const FirstSeries = mongoose.model('FirstSeries', firstSeriesSchema, 'firstseries');
export default FirstSeries;
