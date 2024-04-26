import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "testuser",
    password: "Test123!",
    database: "pcte",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})