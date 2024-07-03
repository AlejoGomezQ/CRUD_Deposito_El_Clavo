"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProduct = exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productList = yield product_1.Product.findAll();
    res.json(productList);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByPk(id);
    if (product) {
        yield product.destroy();
        res.json({
            msg: `El producto con el id ${id} fue eliminado`
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield product_1.Product.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: `El producto con el id ${id} fue actualizado`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: `Ocurrio un error al intentar actualizar el producto. Comuniquese con soporte.`
        });
    }
});
exports.updateProduct = updateProduct;
const saveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield product_1.Product.create(body);
        res.json({
            msg: 'Producto creado con exito'
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: `Ocurrio un error al intentar agregar el producto. Comuniquese con soporte.`
        });
    }
});
exports.saveProduct = saveProduct;
