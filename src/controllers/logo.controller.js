"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './content/logos/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
var limits = {
    fileSize: 25000000
};
var fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Tipo de ficheiro errado'));
    }
    cb(undefined, true);
};
exports.upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
});
//module.exports = upload;
