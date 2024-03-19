const express =require("express");
const productcls =require("../controllers/product");
const validatorscls= require('../validations/productVal');
const router=express.Router();
const {validate}= require('express-validation')

const authorization=require('../middleware/auth')

router.get('/',authorization.read,productcls.handleGetAllProduct)
router.get('/:id',authorization.read,productcls.handleFindById)
router.post('/',authorization.write,validate(validatorscls.createAndUpdateVal),productcls.handleCreateNewProduct)
router.delete('/:id',authorization.write,productcls.handleDeleteProduct)
router.put('/:id',authorization.write,validate(validatorscls.createAndUpdateVal),productcls.handleUpdateProduct)
module.exports = router;