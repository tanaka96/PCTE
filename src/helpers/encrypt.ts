import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { payload } from "../dto/user.dto"

dotenv.config();
export class encrypt {
    static async encryptpass(password: string) {
        return bcrypt.hashSync(password, 12);
    }
    static comparePassword(password: string, encryptedPassword: string) {
        return bcrypt.compare(password, encryptedPassword);
    }

    static generateToken(payload: payload) {
        return jwt.sign(payload, process.env.TOKEN_SECRET, {})
    }
}