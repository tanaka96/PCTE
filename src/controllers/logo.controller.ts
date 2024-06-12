import * as multer from "multer"
import * as path from "node:path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './content/logos/')
    },
    filename: function (req,file, cb) {
        cb(null, file.originalname)
    },
});

const limits = {
    fileSize: 25000000
}

const fileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error('Tipo de ficheiro errado'))
    }

    cb(undefined, true)
}

export const upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
});

//module.exports = upload;