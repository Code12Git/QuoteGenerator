import Quote from '../models/quote.model.js';
import { quoteSchema } from '../validation/quoteValidation.js';
import { errors } from '@vinejs/vine';
import { CustomErrorReporter } from '../validation/CustomErrorReporter.js';
import vine from '@vinejs/vine';

export const createQuote = async (req, res) => {
  try {
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(quoteSchema);
    const payload = await validator.validate(req.body);
    const quote = await Quote.create({
      text: payload.text,
      authorName: payload.authorName,
    });
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
