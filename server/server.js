import dotenv from 'dotenv';
dotenv.config({path:"../config.env"});
import express from "express"
import mongoose from "mongoose"
import cors from "cors"


import secondSeriesRoutes from './routes/secondSeriesRoutes.js';
import firstSeriesRoutes from './routes/firstSeriesRoutes.js';
import labRoutes from './routes/labRoutes.js';
import projectRoutes from './routes/projectRoutes.js';


const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/firstseries', firstSeriesRoutes);
app.use('/api/secondseries', secondSeriesRoutes);
app.use('/api/labquestions', labRoutes);
app.use('/api/projectseminar', projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
