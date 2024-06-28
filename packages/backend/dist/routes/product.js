"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controllers
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getProducts);
router.get('/:id', product_1.getProduct);
router.delete('/:id', product_1.deleteProduct);
router.put('/:id', product_1.updateProduct);
router.post('/', product_1.saveProduct);
exports.default = router;
