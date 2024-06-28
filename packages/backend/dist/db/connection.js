"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('deposito_el_clavo', 'root', 'Ag2023q!', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = sequelize;
