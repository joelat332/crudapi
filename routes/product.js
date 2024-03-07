const express =require("express");
const productcls =require("../controllers/product");
const validatorscls= require('../validations/productVal');
const router=express.Router();
const {validate}= require('express-validation')


router.get('/',productcls.handleGetAllProduct)
router.post('/',validate(validatorscls.createAndUpdateVal),productcls.handleCreateNewProduct)
router.get('/:id',productcls.handleFindById)
router.delete('/:id',productcls.handleDeleteProduct)
router.put('/:id',validate(validatorscls.createAndUpdateVal),productcls.handleUpdateProduct)
module.exports = router;