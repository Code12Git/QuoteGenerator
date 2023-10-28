import vine from '@vinejs/vine';

export const quoteSchema = vine.object({
  title: vine.string().minLength(4).trim(),
  authorName: vine.string().minLength(4).trim(),
});
