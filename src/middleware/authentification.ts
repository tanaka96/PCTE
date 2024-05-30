import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const authentication = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const header = req.headers.authorization;
    if(!header) {
        return res.status(401).send("Unauthorized");
    }
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decode) {
        return res.status(401).send("Unauthorized");
    }
    req[" currentUser"] = decode;
    next();
}