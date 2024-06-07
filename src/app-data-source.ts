//import { DataSource } from "typeorm"
const typeorm = require("typeorm");
const dotenv = require('dotenv')

dotenv.config()

export const myDataSource = new typeorm.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.js"],
    connectTimeout: 20000
    //logging: true,
    //synchronize: true,
})