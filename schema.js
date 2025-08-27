// Validation for Schema

const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().allow('', null)
        }),
        latitude: Joi.number().allow(null, '').optional(),
        longitude: Joi.number().allow(null, '').optional(),
        category: Joi.string().valid(
            'Trending', 
            'Rooms', 
            'Iconic Cities', 
            'Mountains', 
            'Castles', 
            'Amazing Pools', 
            'Camping', 
            'Farms', 
            'Arctic',
            'Boats',
            'Domes'
        ).required()  
    }).required()
});

// Validation for review schema

module.exports.reviewSchema = Joi.object({
     review : Joi.object({
          rating : Joi.number().required().min(1).max(5),
          comment : Joi.string().required(),
     }).required()
    })


    