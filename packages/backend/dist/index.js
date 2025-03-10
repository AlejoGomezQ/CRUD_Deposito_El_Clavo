"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./models/server");
const dotenv_1 = __importDefault(require("dotenv"));
//Configuración de variables de entorno
dotenv_1.default.config();
const server = new server_1.Server();
