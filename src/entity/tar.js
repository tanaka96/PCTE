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
exports.Tar = void 0;
var typeorm_1 = require("typeorm");
var Tar = /** @class */ (function () {
    function Tar() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Tar.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 4, scale: 2 }),
        __metadata("design:type", Number)
    ], Tar.prototype, "potencia", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tar.prototype, "tarifario", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Tar.prototype, "valorPotencia", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Tar.prototype, "simples", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Tar.prototype, "vazio", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { precision: 5, scale: 4 }),
        __metadata("design:type", Number)
    ], Tar.prototype, "naoVazio", void 0);
    Tar = __decorate([
        (0, typeorm_1.Entity)()
    ], Tar);
    return Tar;
}());
exports.Tar = Tar;
