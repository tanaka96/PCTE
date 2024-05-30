"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_data_source_1 = require("./app-data-source");
var utilizador_controller_1 = require("./controllers/utilizador.controller");
var auth_controller_1 = require("./controllers/auth.controller");
var authentification_1 = require("./middleware/authentification");
var authorization_1 = require("./middleware/authorization");
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
app.use(express.json());
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
app.get("/perfil", authentification_1.authentication, (0, authorization_1.authorization)(["user", "admin"]), auth_controller_1.AuthController.getProfile);
app.post("/signup", utilizador_controller_1.UtilizadorController.signUp);
app.post("/login", auth_controller_1.AuthController.login);
app.listen(3000, function () {
    console.log('Running on 3000');
});
