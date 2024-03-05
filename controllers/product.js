const Product = require("../models/productModel");
class productcls{

handleGetAllProduct = async (req,res) => {
    try {
        const product =await Product.find({});
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}


async handleCreateNewProduct(req,res){
    try {

        const product =await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
}

//find by ID
async handleFindById(req,res){
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
//delete by ID
async handleDeleteProduct(req,res){
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//update 
async handleUpdateProduct(req,res){
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

}
module.exports= new productcls