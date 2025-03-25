import express from "express"
const router = express.Router();
import SecondSeries from '../models/secondSeriesModel.js';

// GET all second series records
router.get('/', async (req, res) => {
  try {
    const data = await SecondSeries.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router

