"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Valor = void 0;
var typeorm_1 = require("typeorm");
var Valor = /** @class */ (function () {
    function Valor() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Valor.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Valor.prototype, "comercializador", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 4, scale: 2 }),
        __metadata("design:type", Number)
    ], Valor.prototype, "potencia", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Valor.prototype, "tarifario", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Valor.prototype, "valor", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Valor.prototype, "valorPotencia", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Valor.prototype, "valorSimples", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Valor.prototype, "valorVazio", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Valor.prototype, "valorNaoVazio", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Valor.prototype, "atualizacao", void 0);
    Valor = __decorate([
        (0, typeorm_1.Entity)()
    ], Valor);
    return Valor;
}());
exports.Valor = Valor;
