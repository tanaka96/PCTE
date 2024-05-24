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
exports.Utilizador = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var crypto_1 = require("crypto");
var Utilizador = /** @class */ (function () {
    function Utilizador() {
    }
    Utilizador.prototype.hashPassword = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var salt = (0, crypto_1.randomBytes)(16).toString("hex");
            (0, crypto_1.scrypt)(_this.password, salt, 64, function (err, derivedKey) {
                console.log(_this.password);
                err ? reject(err) : resolve(_this.password = salt + ":" + derivedKey.toString("hex"));
            });
        });
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", Number)
    ], Utilizador.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], Utilizador.prototype, "first_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], Utilizador.prototype, "last_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], Utilizador.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], Utilizador.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], Utilizador.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Utilizador.prototype, "admin", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Utilizador.prototype, "hashPassword", null);
    Utilizador = __decorate([
        (0, typeorm_1.Entity)()
    ], Utilizador);
    return Utilizador;
}());
exports.Utilizador = Utilizador;
