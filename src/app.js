"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_data_source_1 = require("./app-data-source");
var cookieParser = require("cookie-parser");
var swaggerUi = require("swagger-ui-express");
var swaggerFile = require('./swagger-new.json');
app_data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = express();
app.use('/comercializador', require('./routes/comercializador.ts'));
app.use('/desconto', require('./routes/desconto.ts'));
app.use('/potencia', require('./routes/potencia.ts'));
app.use('/tar', require('./routes/tar.ts'));
app.use('/tarifario', require('./routes/tarifario.ts'));
app.use('/taxa', require('./routes/taxa.ts'));
app.use('/utilizador', require('./routes/utilizador.ts'));
app.use('/valor', require('./routes/valor.ts'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cookieParser());
app.listen(3000, function () {
    console.log('Running on 3000');
});
