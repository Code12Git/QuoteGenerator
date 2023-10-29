import Quote from '../models/quote.model.js';
import { quoteSchema } from '../validation/quoteValidation.js';
import { errors } from '@vinejs/vine';
import { CustomErrorReporter } from '../validation/CustomErrorReporter.js';
import vine from '@vinejs/vine';

//Creating a quote
export const createQuote = async (req, res) => {
  try {
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(quoteSchema);
    const payload = await validator.validate(req.body);
    const quote = await Quote.create({
      text: payload.text,
      authorName: payload.authorName,
    });
    res.status(200).json(quote, { success: true });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).json({ errors: error.messages });
    } else {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  }
};

// Deleting a quote
export const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quotePresent = await Quote.findById(id);
    if (!quotePresent) {
      return res
        .status(404)
        .json({ message: 'Quote not found', success: false });
    }
    const quote = await Quote.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: 'Quote deleted successfully', success: true });
  } catch (err) {
    return res.status(500).json({ success: false, err: err.message });
  }
};

// Updating a Quote

export const updateQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await Quote.findByIdAndUpdate(id, req.body, { new: true });

    if (!quote) {
      return res
        .status(404)
        .json({ message: 'Quote not found', success: false });
    }

    return res.status(200).json({ quote, success: true });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).json({ errors: error.messages });
    } else {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  }
};

// Get All Quote
export const getAllQuote = async (req, res) => {
  try {
    const quotes = await Quote.find(); // Corrected the variable name to "quotes"
    res.status(200).json({ quotes, success: true }); // Corrected the response JSON structure
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

// Get  Quote
export const getQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await Quote.findById(id);
    if (!quote) {
      res.status(404).json({ message: 'No quote found' }, { success: false });
    }
    res.status(200).json(quote, { success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
