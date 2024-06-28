import { Server } from "./models/server";
import dotenv from 'dotenv';

//Configuración de variables de entorno
dotenv.config();

const server = new Server();