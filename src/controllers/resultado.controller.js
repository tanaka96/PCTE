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
var ResultadoController = /** @class */ (function () {
    function ResultadoController() {
    }
    ResultadoController.Resultado = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, potencia, tarifa, dias, vazio, ponta, cheio, valorRep, max, taxaRep, tarRep, audiovisual, dgeg, iec, iva6, iva23, iva6F, iva23F, contagem, total, cemkW, resto, precoEnergia, precoPotencia, audio, dgegTotal, iecTotal, iva, tar, desconto, valor, precoVazio, precoNaoVazio, i, resultDataSent, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, gasto, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, valPot, tarPot, precoPot, valorVazio, valorNaoVazio, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 42, , 43]);
                        _a = req.body, potencia = _a.potencia, tarifa = _a.tarifa, dias = _a.dias, vazio = _a.vazio, ponta = _a.ponta, cheio = _a.cheio;
                        if (!potencia || !tarifa || !dias || !vazio || !ponta || !cheio) {
                            return [2 /*return*/, res.status(500).json({ message: "Campos obrigatórios!" })];
                        }
                        valorRep = app_data_source_1.myDataSource.getRepository(valor_1.Valor);
                        return [4 /*yield*/, valorRep.createQueryBuilder().select("MAX(id)", "max").getRawOne()];
                    case 1:
                        max = _b.sent();
                        taxaRep = app_data_source_1.myDataSource.getRepository(taxa_1.Taxa);
                        tarRep = app_data_source_1.myDataSource.getRepository(tar_1.Tar);
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
                        iva6F = iva6.valor;
                        iva23F = iva23.valor;
                        contagem = vazio + ponta + cheio;
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
                        desconto = 0;
                        valor = void 0;
                        precoVazio = 0;
                        precoNaoVazio = 0;
                        i = 1;
                        resultDataSent = [];
                        if (!(tarifa == "Simples")) return [3 /*break*/, 24];
                        if (!(potencia < "10.35")) return [3 /*break*/, 18];
                        if (!(potencia <= "3.45")) return [3 /*break*/, 12];
                        _b.label = 7;
                    case 7: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 8:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 9:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 10;
                    case 10:
                        if (i <= max.max) return [3 /*break*/, 7];
                        _b.label = 11;
                    case 11:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 12: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 13:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 14:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 15;
                    case 15:
                        if (i <= max.max) return [3 /*break*/, 12];
                        _b.label = 16;
                    case 16:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 17: return [3 /*break*/, 23];
                    case 18: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 19:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 20:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 21;
                    case 21:
                        if (i <= max.max) return [3 /*break*/, 18];
                        _b.label = 22;
                    case 22:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 23: return [3 /*break*/, 41];
                    case 24:
                        if (!(potencia < "10.35")) return [3 /*break*/, 36];
                        if (!(potencia <= "3.45")) return [3 /*break*/, 30];
                        _b.label = 25;
                    case 25: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 26:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 27:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 28;
                    case 28:
                        if (i <= max.max) return [3 /*break*/, 25];
                        _b.label = 29;
                    case 29:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 30: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 31:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 32:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 33;
                    case 33:
                        if (i <= max.max) return [3 /*break*/, 30];
                        _b.label = 34;
                    case 34:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 35: return [3 /*break*/, 41];
                    case 36: return [4 /*yield*/, valorRep.findOneBy({ id: i })];
                    case 37:
                        valPot = _b.sent();
                        valor = valPot.valor;
                        return [4 /*yield*/, tarRep.findOneBy({ potencia: potencia })];
                    case 38:
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
                            total = precoEnergia + precoPotencia + audio + dgegTotal + iecTotal;
                            resultDataSent[i - 1] = new resultado_dto_1.ResultadoResponce();
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
                        _b.label = 39;
                    case 39:
                        if (i <= max.max) return [3 /*break*/, 36];
                        _b.label = 40;
                    case 40:
                        result = resultDataSent.filter(function (element) { return element !== null; });
                        return [2 /*return*/, res.status(200).json({ result: result })];
                    case 41: return [3 /*break*/, 43];
                    case 42:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [2 /*return*/, res.status(500).json({ message: "Internal server error" })];
                    case 43: return [2 /*return*/];
                }
            });
        });
    };
    return ResultadoController;
}());
exports.ResultadoController = ResultadoController;
