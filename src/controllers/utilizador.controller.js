"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorController = void 0;
var app_data_source_1 = require("../app-data-source");
var utilizador_1 = require("../entity/utilizador");
var encrypt_1 = require("../helpers/encrypt");
var tokenSender_1 = require("../helpers/tokenSender");
var user_dto_1 = require("../dto/user.dto");
var cache = require("memory-cache");
var validate = require('deep-email-validator').validate;
var UtilizadorController = /** @class */ (function () {
    function UtilizadorController() {
    }
    UtilizadorController.signUp = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, first_name, last_name, email, password, verificacao_pw, admin, encryptedPassword, utilizador, utilizadorRep, userEmail, userDataSent, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, first_name = _a.first_name, last_name = _a.last_name, email = _a.email, password = _a.password, verificacao_pw = _a.verificacao_pw, admin = _a.admin;
                        /*const resultado = await validate(email);
                        if (!resultado.valid){
                            return res.status(400).send({
                                status: 'error',
                                message: 'Endereço de email inválido!',
                                reason: resultado.reason
                            });
                        }*/
                        if (password != verificacao_pw) {
                            return [2 /*return*/, res.status(400).json({
                                    status: 'error',
                                    message: 'Passwords diferentes!'
                                })];
                        }
                        return [4 /*yield*/, encrypt_1.encrypt.encryptpass(password)];
                    case 1:
                        encryptedPassword = _b.sent();
                        utilizador = new utilizador_1.Utilizador();
                        utilizador.first_name = first_name;
                        utilizador.last_name = last_name;
                        utilizador.email = email;
                        utilizador.password = encryptedPassword;
                        utilizador.admin = admin;
                        utilizadorRep = app_data_source_1.myDataSource.getRepository(utilizador_1.Utilizador);
                        return [4 /*yield*/, utilizadorRep.findOne({ where: { email: email } })];
                    case 2:
                        userEmail = _b.sent();
                        if (!userEmail) return [3 /*break*/, 3];
                        return [2 /*return*/, res.json({ message: "Email já se encontra registado!" })];
                    case 3: return [4 /*yield*/, utilizadorRep.create(utilizador)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, utilizadorRep.save(utilizador)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        userDataSent = new user_dto_1.UserResponse();
                        userDataSent.name = utilizador.first_name;
                        userDataSent.email = utilizador.email;
                        userDataSent.role = utilizador.admin;
                        token = encrypt_1.encrypt.generateToken({ id: utilizador.id.toString() });
                        return [4 /*yield*/, (0, tokenSender_1.sendEmail)(utilizador.email, token)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Utilizador criado com sucesso", userDataSent: userDataSent })];
                }
            });
        });
    };
    UtilizadorController.getUtilizadores = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, utilizadorRep, utilizadores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cache.get("data");
                        if (!data) return [3 /*break*/, 1];
                        console.log("serving from cache");
                        return [2 /*return*/, res.status(200).json({ data: data, })];
                    case 1:
                        console.log("serving from database");
                        utilizadorRep = app_data_source_1.myDataSource.getRepository(utilizador_1.Utilizador);
                        return [4 /*yield*/, utilizadorRep.find()];
                    case 2:
                        utilizadores = _a.sent();
                        cache.put("data", utilizadores, 6000);
                        return [2 /*return*/, res.status(200).json({ data: utilizadores, })];
                }
            });
        });
    };
    UtilizadorController.updateUtilizadores = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, first_name, last_name, email, password, admin, encryptedPassword, utilizadorRep, utilizador;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, first_name = _a.first_name, last_name = _a.last_name, email = _a.email, password = _a.password, admin = _a.admin;
                        return [4 /*yield*/, encrypt_1.encrypt.encryptpass(password)];
                    case 1:
                        encryptedPassword = _b.sent();
                        utilizadorRep = app_data_source_1.myDataSource.getRepository(utilizador_1.Utilizador);
                        return [4 /*yield*/, utilizadorRep.findOne({ where: { id: id }, })];
                    case 2:
                        utilizador = _b.sent();
                        utilizador.first_name = first_name;
                        utilizador.last_name = last_name;
                        utilizador.email = email;
                        utilizador.password = encryptedPassword;
                        if (utilizador.admin == "admin") {
                            utilizador.admin = admin;
                        }
                        if (!utilizador) {
                            return [2 /*return*/, res.status(404).json({ message: "Utilizador não encontrado!" })];
                        }
                        return [4 /*yield*/, utilizadorRep.update(utilizador)];
                    case 3:
                        _b.sent();
                        res.status(200).json({ message: "Utilizador atualizado", utilizador: utilizador });
                        return [2 /*return*/];
                }
            });
        });
    };
    UtilizadorController.deleteUtilizadores = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, utilizadorRep, utilizadores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        utilizadorRep = app_data_source_1.myDataSource.getRepository(utilizador_1.Utilizador);
                        return [4 /*yield*/, utilizadorRep.findOne({ where: { id: id }, })];
                    case 1:
                        utilizadores = _a.sent();
                        if (!utilizadores) {
                            return [2 /*return*/, res.status(404).json({ message: "Utilizador não encontrado!" })];
                        }
                        return [4 /*yield*/, utilizadorRep.delete(utilizadores)];
                    case 2:
                        _a.sent();
                        res.status(200).json({ message: "Utilizador eliminado" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return UtilizadorController;
}());
exports.UtilizadorController = UtilizadorController;
