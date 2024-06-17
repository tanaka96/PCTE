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
exports.ResultadoController = void 0;
var app_data_source_1 = require("../app-data-source");
var tar_1 = require("../entity/tar");
var taxa_1 = require("../entity/taxa");
var valor_1 = require("../entity/valor");
var resultado_dto_1 = require("../dto/resultado.dto");
var desconto_1 = require("../entity/desconto");
var ResultadoController = /** @class */ (function () {
    function ResultadoController() {
    }
    ResultadoController.Resultado = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, potencia, tarifa, dias, vazio, ponta, cheio, desconto, valorRep, max, taxaRep, tarRep, descRep, audiovisual, dgeg, iec, iva6, iva23, desc, iva6F, iva23F, contagem, subtotal, total, cemkW, resto, precoEnergia, precoPotencia, audio, dgegTotal, iecTotal, iva, tar, descontoT, valor, precoVazio, precoNaoVazio, i, resultDataSent, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 43, , 44]);
                        _a = req.body, potencia = _a.potencia, tarifa = _a.tarifa, dias = _a.dias, vazio = _a.vazio, ponta = _a.ponta, cheio = _a.cheio, desconto = _a.desconto;
                        if (!potencia || !tarifa || !dias || !vazio || !ponta || !cheio) {
                            return [2 /*return*/, res.status(500).json({ message: "Campos obrigatórios!" })];
                        }
                        valorRep = app_data_source_1.myDataSource.getRepository(valor_1.Valor);
                        return [4 /*yield*/, valorRep.createQueryBuilder().select("MAX(id)", "max").getRawOne()];
                    case 1:
                        max = _b.sent();
                        taxaRep = app_data_source_1.myDataSource.getRepository(taxa_1.Taxa);
                        tarRep = app_data_source_1.myDataSource.getRepository(tar_1.Tar);
                        descRep = app_data_source_1.myDataSource.getRepository(desconto_1.Desconto);
                        return [4 /*yield*/, taxaRep.findOne({ where: { nome: "Audiovisual" } })];
                    case 2:
                        audiovisual = _b.sent();
                        return [4 /*yield*/, taxaRep.findOne({ where: { nome: "DGEG" } })];
                    case 3:
                        dgeg = _b.sent();
                        return [4 /*yield*/, taxaRep.findOne({ where: { nome: "Especial/kWh" } })];
                    case 4:
                        iec = _b.sent();
                        return [4 /*yield*/, taxaRep.findOne({ where: { nome: "IVA", valor: "6" } })];
                    case 5:
                        iva6 = _b.sent();
                        return [4 /*yield*/, taxaRep.findOne({ where: { nome: "IVA", valor: "23" } })];
                    case 6:
                        iva23 = _b.sent();
                        return [4 /*yield*/, descRep.findOne({ where: { tipo: desconto } })];
                    case 7:
                        desc = _b.sent();
                        iva6F = iva6.valor;
                        iva23F = iva23.valor;
                        contagem = vazio + ponta + cheio;
                        subtotal = 0;
                        total = 0;
                        cemkW = 0;
                        resto = 0;
                        precoEnergia = 0;
                        precoPotencia = 0;
                        audio = 0;
                        dgegTotal = 0;
                        iecTotal = 0;
                        iva = 0;
                        tar = 0;
                        descontoT = 0;
                        valor = void 0;
                        precoVazio = 0;
                        precoNaoVazio = 0;
                        i = 1;
                        resultDataSent = [];
                        if (!(tarifa == "Simples")) return [3 /*break*/, 25];
                        if (!(potencia < "10.35")) return [3 /*break*/, 19];
                        if (!(potencia <= "3.45")) return [3 /*break*/, 13];
                        _b.label = 8;
                    case 8: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 9:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 10:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        gasto = valPot.valorSimples;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else if (contagem <= 100) {
                            cemkW = contagem * gasto * (1 + (iva6F / 100));
                            precoEnergia = cemkW;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (contagem * gasto * (iva6F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva6F / 100))) + ((tarPot.simples * contagem) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        else if (contagem > 100) {
                            cemkW = 100 * gasto * (1 + (iva6F / 100));
                            resto = (contagem - 100) * gasto * (1 + (iva23F / 100));
                            precoEnergia = cemkW + resto;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (100 * gasto * (iva6F / 100)) + ((contagem - 100) * gasto * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva6F / 100))) + ((tarPot.simples * contagem) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoResto = resto.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 11;
                    case 11:
                        if (i <= max.max) return [3 /*break*/, 8];
                        _b.label = 12;
                    case 12:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 13: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 14:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 15:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        gasto = valPot.valorSimples;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else if (contagem <= 100) {
                            cemkW = contagem * gasto * (1 + (iva6F / 100));
                            precoEnergia = cemkW;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (contagem * gasto * (iva6F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + ((tarPot.simples * contagem) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        else if (contagem > 100) {
                            cemkW = 100 * gasto * (1 + (iva6F / 100));
                            resto = (contagem - 100) * gasto * (1 + (iva23F / 100));
                            precoEnergia = cemkW + resto;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (100 * gasto * (iva6F / 100)) + ((contagem - 100) * gasto * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + ((tarPot.simples * contagem) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoResto = resto.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 16;
                    case 16:
                        if (i <= max.max) return [3 /*break*/, 13];
                        _b.label = 17;
                    case 17:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 18: return [3 /*break*/, 24];
                    case 19: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 20:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 21:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        gasto = valPot.valorSimples;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else {
                            precoEnergia = contagem * gasto * (1 + (iva23F / 100));
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (contagem * gasto * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + ((tarPot.simples * contagem) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 22;
                    case 22:
                        if (i <= max.max) return [3 /*break*/, 19];
                        _b.label = 23;
                    case 23:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 24: return [3 /*break*/, 42];
                    case 25:
                        if (!(potencia < "10.35")) return [3 /*break*/, 37];
                        if (!(potencia <= "3.45")) return [3 /*break*/, 31];
                        _b.label = 26;
                    case 26: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 27:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 28:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        valorVazio = valPot.valorVazio;
                        valorNaoVazio = valPot.valorNaoVazio;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else if (contagem <= 100) {
                            precoVazio = vazio * valorVazio * (1 + (iva6F / 100));
                            precoNaoVazio = (ponta + cheio) * valorNaoVazio * (1 + (iva6F / 100));
                            precoEnergia = precoVazio + precoNaoVazio;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (vazio * valorVazio * (iva6F / 100)) + ((ponta + cheio) * valorNaoVazio * (iva6F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva6F / 100))) + (((tarPot.vazio * vazio) + (tarPot.naoVazio * (ponta + cheio))) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoVazio = precoVazio.toFixed(2);
                            resultDataSent[i - 1].precoNaoVazio = precoNaoVazio.toFixed(2);
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        else if (contagem > 100) {
                            cemkW = (((vazio * 100) / contagem) * valorVazio * (1 + (iva6F / 100))) + ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (1 + (iva6F / 100)));
                            resto = ((vazio - ((vazio * 100) / contagem)) * valorVazio * (1 + (iva23F / 100))) + (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (1 + (iva23F / 100)));
                            precoVazio = (((vazio * 100) / contagem) * valorVazio * (1 + (iva6F / 100))) + ((vazio - ((vazio * 100) / contagem)) * valorVazio * (1 + (iva23F / 100)));
                            precoNaoVazio = ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (1 + (iva6F / 100))) + (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (1 + (iva23F / 100)));
                            precoEnergia = cemkW + resto;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = ((((vazio * 100) / contagem) * valorVazio * (iva6F / 100))) + ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (iva6F / 100)) + ((vazio - ((vazio * 100) / contagem)) * valorVazio * (iva23F / 100)) +
                                (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva6F / 100))) + (((tarPot.vazio * vazio) + (tarPot.naoVazio * (ponta + cheio))) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoResto = resto.toFixed(2);
                            resultDataSent[i - 1].precoVazio = precoVazio.toFixed(2);
                            resultDataSent[i - 1].precoNaoVazio = precoNaoVazio.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 29;
                    case 29:
                        if (i <= max.max) return [3 /*break*/, 26];
                        _b.label = 30;
                    case 30:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 31: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 32:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 33:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        valorVazio = valPot.valorVazio;
                        valorNaoVazio = valPot.valorNaoVazio;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else if (contagem <= 100) {
                            precoVazio = vazio * valorVazio * (1 + (iva6F / 100));
                            precoNaoVazio = (ponta + cheio) * valorNaoVazio * (1 + (iva6F / 100));
                            precoEnergia = precoVazio + precoNaoVazio;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (vazio * valorVazio * (iva6F / 100)) + ((ponta + cheio) * valorNaoVazio * (iva6F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + (((tarPot.vazio * vazio) + (tarPot.naoVazio * (ponta + cheio))) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoVazio = precoVazio.toFixed(2);
                            resultDataSent[i - 1].precoNaoVazio = precoNaoVazio.toFixed(2);
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        else if (contagem > 100) {
                            cemkW = (((vazio * 100) / contagem) * valorVazio * (1 + (iva6F / 100))) + ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (1 + (iva6F / 100)));
                            resto = ((vazio - ((vazio * 100) / contagem)) * valorVazio * (1 + (iva23F / 100))) + (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (1 + (iva23F / 100)));
                            precoVazio = (((vazio * 100) / contagem) * valorVazio * (1 + (iva6F / 100))) + ((vazio - ((vazio * 100) / contagem)) * valorVazio * (1 + (iva23F / 100)));
                            precoNaoVazio = ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (1 + (iva6F / 100))) + (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (1 + (iva23F / 100)));
                            precoEnergia = cemkW + resto;
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = ((((vazio * 100) / contagem) * valorVazio * (iva6F / 100))) + ((((ponta + cheio) * 100) / contagem) * valorNaoVazio * (iva6F / 100)) + ((vazio - ((vazio * 100) / contagem)) * valorVazio * (iva23F / 100)) +
                                (((ponta + cheio) - (((ponta + cheio) * 100) / contagem)) * valorNaoVazio * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + (((tarPot.vazio * vazio) + (tarPot.naoVazio * (ponta + cheio))) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].preco100kW = cemkW.toFixed(2);
                            resultDataSent[i - 1].precoResto = resto.toFixed(2);
                            resultDataSent[i - 1].precoVazio = precoVazio.toFixed(2);
                            resultDataSent[i - 1].precoNaoVazio = precoNaoVazio.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 34;
                    case 34:
                        if (i <= max.max) return [3 /*break*/, 31];
                        _b.label = 35;
                    case 35:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 36: return [3 /*break*/, 42];
                    case 37: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 38:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 39:
                        tarPot = _b.sent();
                        precoPot = valPot.valorPotencia;
                        valorVazio = valPot.valorVazio;
                        valorNaoVazio = valPot.valorNaoVazio;
                        if (potencia != valPot.potencia) {
                            i++;
                        }
                        else {
                            precoEnergia = ((vazio * valorVazio) + ((ponta + cheio) * valorNaoVazio)) * (1 + (iva23F / 100));
                            precoPotencia = (precoPot * dias) * (1 + (iva23F / 100));
                            audio = audiovisual.valor * (1 + (iva6F / 100));
                            dgegTotal = dgeg.valor * (1 + (iva23F / 100));
                            iecTotal = iec.valor * contagem * (1 + (iva23F / 100));
                            iva = (((vazio * valorVazio) + ((ponta + cheio) * valorNaoVazio)) * (iva23F / 100)) + ((precoPot * dias) * (iva23F / 100)) + (audiovisual.valor * (iva6F / 100)) +
                                (dgeg.valor * (iva23F / 100)) + (iec.valor * contagem * (iva23F / 100));
                            tar = ((tarPot.valorPotencia * dias) * (1 + (iva23F / 100))) + (((tarPot.vazio * vazio) + (tarPot.naoVazio * (ponta + cheio))) * (1 + (iva23F / 100)));
                            subtotal = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            if (desc.percentagem == 0) {
                                total = subtotal;
                            }
                            else {
                                descontoT = subtotal * (desc.percentagem / 100);
                                total = subtotal - descontoT;
                            }
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponse();
                            resultDataSent[i - 1].comercializador = valPot.comercializador;
                            resultDataSent[i - 1].precoTotal = total.toFixed(2);
                            resultDataSent[i - 1].precoEnergia = precoEnergia.toFixed(2);
                            resultDataSent[i - 1].precoPotencia = precoPotencia.toFixed(2);
                            resultDataSent[i - 1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)
                            };
                            resultDataSent[i - 1].tar = tar.toFixed(2);
                            resultDataSent[i - 1].desconto = desconto.toFixed(2);
                            resultDataSent[i - 1].valor = valor;
                            i++;
                        }
                        _b.label = 40;
                    case 40:
                        if (i <= max.max) return [3 /*break*/, 37];
                        _b.label = 41;
                    case 41:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 42: return [3 /*break*/, 44];
                    case 43:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [2 /*return*/, res.status(500).json({ message: "Internal server error" })];
                    case 44: return [2 /*return*/];
                }
            });
        });
    };
    return ResultadoController;
}());
exports.ResultadoController = ResultadoController;
