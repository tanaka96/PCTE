import * as express from "express";
import {myDataSource} from "./app-data-source";

const cookieParser = require("cookie-parser");
var swaggerUi = require("swagger-ui-express");
var swaggerFile = require('./swagger-new.json');

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()


app.use('/comercializador', require('./routes/comercializador.ts'))

app.use('/desconto', require('./routes/desconto.ts'))

app.use('/potencia', require('./routes/potencia.ts'))

app.use('/tar', require('./routes/tar.ts'))

app.use('/tarifario', require('./routes/tarifario.ts'))

app.use('/taxa', require('./routes/taxa.ts'))

app.use('/utilizador', require('./routes/utilizador.ts'))

app.use('/valor', require('./routes/valor.ts'))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cookieParser())

app.listen(3000, () => {
    console.log('Running on 3000');
});