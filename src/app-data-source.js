"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
//import { DataSource } from "typeorm"
var typeorm = require("typeorm");
var dotenv = require('dotenv');
dotenv.config();
exports.myDataSource = new typeorm.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.js"],
    timeout: 120000,
    waitForConnections: true,
    //logging: true,
    //synchronize: true,
});
