import express from "express"
const router = express.Router();
import FirstSeries from '../models/firstSeriesModel.js';

// GET all first series records
router.get('/', async (req, res) => {
  try {
    const data = await FirstSeries.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router

