import { Request, Response } from 'express';
import { myDataSource } from "../app-data-source";
import { Utilizador } from "../entity/utilizador";
import { encrypt } from "../helpers/encrypt";

export class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(500).json({message: "Email e password obrigatório!"});
            }

            const utilizadorRep = myDataSource.getRepository(Utilizador);
            const utilizador = await utilizadorRep.findOne({where: { email }});

            const validPassword = encrypt.comparePassword(password, utilizador.password);
            if (!utilizador || !validPassword) {
                return res.status(404).json({message: "Email ou password incorreto!"});
            }

            const token = encrypt.generateToken({id: utilizador.id.toString()});

            return res.status(200).json({message: "Sessão iniciada", utilizador, token});
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Internal Server Error!"});
        }
    }

    static async getProfile(req: Request, res: Response) {
        if (!req[" currentUser"]) {
            return res.status(401).json({message: "Unauthorized"});
        }
        const utilizadorRep = myDataSource.getRepository(Utilizador);
        const utilizador = await utilizadorRep.findOne({where: { id: req[" currentUser"].id },});
        return res.status(200).json({ ...utilizador, password: undefined});
    }
}