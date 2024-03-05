const express =require("express");
const productcls =require("../controllers/product")

const router=express.Router();


router.get('/',productcls.handleGetAllProduct)
router.post('/',productcls.handleCreateNewProduct)
router.get('/:id',productcls.handleFindById)
router.delete('/:id',productcls.handleDeleteProduct)
router.put('/:id',productcls.handleUpdateProduct)
module.exports = router;