"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_1 = require("../controllers/product");
exports.router = (0, express_1.Router)();
exports.router.get('/', product_1.getProducts);
