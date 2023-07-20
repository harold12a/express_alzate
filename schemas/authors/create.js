import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().min(3).messages({
        "string.base" : "Name must be string",
        "string.empty" : "Name is required",
        "any.required" : "Name is required",
        'string.min' : "Name must be at least 3 characters long",
        'string.max' : "Name must be a maximum of 20 characters"
    }),
    lastname: joi.string().empty('').min(3).messages({
        "string.base" : "Last name must be string",
        'string.min' : "Last name must be at least 3 characters long",
        'string.max' : "Last name must be a maximum of 20 characters"
    }),
    city: joi.string().required().messages({
        "string.base" : "City must be string",
        "string.empty" : "City is required",
        "any.required" : "City is required"
    }),
    country: joi.string().required().messages({
        "string.base" : "Country must be string",
        "string.empty" : "Country is required",
        "any.required" : "Country is required"
    }),
    date: joi.date().max('now').messages({
        "date.base" : "Must be a valid date",
        "date.min" : "Must be a minimum of the current date"
    }),
    photo: joi.string().uri().required().messages({
        "any.required" : "Photo is required",
        "string.uri" : "Photo must be an URL",
        "string.base" : "Photo must be an URL",
        "string.empty" : "Photo is required"
    }),
   
})

export default schema