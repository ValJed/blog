const Joi = require('@hapi/joi')

const ArticleSchema = Joi.object({
  _id: Joi.string()
    .required(),

  title: Joi.string()
    .allow('')
    .required(),

  imgPath: Joi.string()
    .allow('')
    .required(),

  content: Joi.string()
    .allow('')
    .required(),

  tags: Joi.array()
    .required()
    .max(10)
})

module.exports = ArticleSchema
