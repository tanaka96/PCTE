"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var app_data_source_1 = require("./app-data-source");
var utilizador_controller_1 = require("./controllers/utilizador.controller");
var auth_controller_1 = require("./controllers/auth.controller");
var authentification_1 = require("./middleware/authentification");
var authorization_1 = require("./middleware/authorization");
var resultado_controller_1 = require("./controllers/resultado.controller");
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
app.post("/resultado", resultado_controller_1.ResultadoController.Resultado);
app.listen(3000, function () {
    console.log('Running on 3000');
});
