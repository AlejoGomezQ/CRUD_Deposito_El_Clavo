import { Router } from "express";

//Controllers
import { deleteProduct, getProduct, getProducts, saveProduct, updateProduct } from "../controllers/product";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)
router.post('/', saveProduct)

export default router;