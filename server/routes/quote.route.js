import express from 'express';
import {
  createQuote,
  deleteQuote,
  getAllQuote,
  getQuote,
  updateQuote,
} from '../controllers/quote.controller.js';

const router = express.Router();

//Create Quote
router.post('/', createQuote);

// Update Quote
router.put('/:id', updateQuote);

// Delete Quote
router.delete('/:id', deleteQuote);

// Get Quote
router.get('/:id', getQuote);

// Get All Quote
router.get('/', getAllQuote);

export default router;
