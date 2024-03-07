const Joi = require('joi');

class validatorscls{
    createAndUpdateVal = {
        body:Joi.object({
            sampleName:Joi.string().required(),
            sampleNumber:Joi.number().required(),
            sampleVendor:Joi.object({
                id:Joi.number().required(),
                name:Joi.string().required()
            }),
            externalReference:Joi.object({
                id:Joi.string(),
                source:Joi.string(),
            })
        })
    }
    
}
module.exports=new validatorscls