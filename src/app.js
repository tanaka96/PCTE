"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_data_source_1 = require("./app-data-source");
var swaggerUi = require("swagger-ui-express");
var swaggerFile = require('./docs/apidoc');
app_data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = express();
app.use('/comercializador', require('./routes/comercializador'));
app.use('/desconto', require('./routes/desconto'));
app.use('/potencia', require('./routes/potencia'));
app.use('/tar', require('./routes/tar'));
app.use('/tarifario', require('./routes/tarifario'));
app.use('/taxa', require('./routes/taxa'));
app.use('/utilizador', require('./routes/utilizador'));
app.use('/valor', require('./routes/valor'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(3000);
