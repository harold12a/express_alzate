import joi from 'joi-oid'

const schema = joi.object({
    author_id: joi.objectId(),
    company_id: joi.objectId(),
    title: joi.string().required().min(3).max(20).messages({
        "string.base": "Title must be string",
        "string.empty": "Title is required",
        "any.required": "Title is required",
        'string.min': "Title must be at least 3 characters long",
        'string.max': "Title must be a maximum of 20 characters"
    }),
    category_id: joi.objectId().required().messages({
        "any.required": "Category is required",
    }),
    cover_photo: joi.string().uri().required().messages({
        "string.base": "Cover photo must be an URL",
        "string.empty": "Cover photo is required",
        "any.required": "Cover photo is required",
        "string.uri": "Cover photo must be an URL"
    }),
    description: joi.string().required().min(10).max(200).messages({
        "string.base": "Description must be string",
        "string.empty": "Description is required",
        "any.required": "Description is required",
        'string.min': "Description must be at least 10 characters long",
        'string.max': "Description must be a maximum of 200 characters long"
    }),

})

export default schema