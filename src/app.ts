import * as express from "express";
import {myDataSource} from "./app-data-source";

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('./swagger-output.json');

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()


app.use('/comercializador', require('./routes/comercializador'))

app.use('/desconto', require('./routes/desconto'))

app.use('/potencia', require('./routes/potencia'))

app.use('/tar', require('./routes/tar'))

app.use('/tarifario', require('./routes/tarifario'))

app.use('/taxa', require('./routes/taxa'))

app.use('/utilizador', require('./routes/utilizador'))

app.use('/valor', require('./routes/valor'))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000)