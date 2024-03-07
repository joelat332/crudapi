const mongoose= require('mongoose');

const productSchema= mongoose.Schema(
    {
       sampleName:{
        type : String,
        required:[true]
       },
       sampleNumber:{
        type : Number,
        required:[true]
       },
       sampleVendor:{
        id:{
            type:Number
        },
        name:{
            type:String
        }        
        },
        externalReference:[{
        id:{
            type:String
        },
        source:{
            type:String
        }
        }]
}
)

const Product=mongoose.model('Product',productSchema);

module.exports=Product;