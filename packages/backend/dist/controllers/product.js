"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProduct = exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({ message: 'Get products' });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Get product',
        id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Delete product',
        id
    });
};
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Update product',
        id
    });
};
exports.updateProduct = updateProduct;
const saveProduct = (req, res) => {
    const { body } = req.params;
    console.log(body);
    res.json({
        message: 'Save product',
        body
    });
};
exports.saveProduct = saveProduct;
