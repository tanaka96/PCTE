import { NextFunction, Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Utilizador } from "../entity/utilizador";

export const authorization = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userRepo = myDataSource.getRepository(Utilizador);
        const user = await userRepo.findOne({
            where: { id: req[" currentUser"].id},
        });
        console.log(user);
        if (!roles.includes(user.admin)) {
            return res.status(403).json({ message: "Forbidden"});
        }
        next();
    };
};