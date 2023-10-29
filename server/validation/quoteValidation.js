import vine from '@vinejs/vine';

export const quoteSchema = vine.object({
  text: vine.string().minLength(10).trim(),
  authorName: vine.string().minLength(4).trim(),
});
