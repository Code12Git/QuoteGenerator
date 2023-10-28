import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
