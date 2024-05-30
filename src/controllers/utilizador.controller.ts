import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Utilizador } from "../entity/utilizador";
import { encrypt } from "../helpers/encrypt";
import { UserResponce } from "../dto/user.dto";
import * as cache from "memory-cache";

export class UtilizadorController {
    static async signUp(req: Request, res: Response) {
        const { first_name, last_name, email, password, admin } = req.body;
        const encryptedPassword = await encrypt.encryptpass(password);
        const utilizador = new Utilizador();
        utilizador.first_name = first_name;
        utilizador.last_name = last_name;
        utilizador.email = email;
        utilizador.password = encryptedPassword;
        utilizador.admin = admin;

        const utilizadorRep = myDataSource.getRepository(Utilizador);
        const userEmail = await utilizadorRep.findOne({where: { email }})
        if (userEmail){
            return res.json({message: "Email já se encontra registado!"})
        } else {
            await utilizadorRep.create(utilizador);
            await utilizadorRep.save(utilizador);
        }

        const userDataSent = new UserResponce();
        userDataSent.name = utilizador.first_name;
        userDataSent.email = utilizador.email;
        userDataSent.role = utilizador.admin;

        const token = encrypt.generateToken({id: utilizador.id.toString()});
        return res.status(200).json({message: "Utilizador criado com sucesso", token, userDataSent});
    }

    static async getUtilizadores(req: Request, res: Response) {
        const data = cache.get("data");
        if (data) {
            console.log("serving from cache");
            return res.status(200).json({data,});
        } else {
            console.log("serving from database");
            const utilizadorRep = myDataSource.getRepository(Utilizador);
            const utilizadores = await utilizadorRep.find();

            cache.put("data", utilizadores, 6000);
            return res.status(200).json({data: utilizadores,});
        }
    }

    static async updateUtilizadores(req: Request, res: Response) {
        const { id } = req.params;
        const { first_name, last_name, email, password, admin } = req.body;
        const encryptedPassword = await encrypt.encryptpass(password);
        const utilizadorRep = myDataSource.getRepository(Utilizador);
        const utilizador = await utilizadorRep.findOne({where: { id },});
        utilizador.first_name = first_name;
        utilizador.last_name = last_name;
        utilizador.email = email;
        utilizador.password = encryptedPassword;
        if (utilizador.admin == "admin") {
            utilizador.admin = admin;
        }
        if (!utilizador) {
            return res.status(404).json({message: "Utilizador não encontrado!"});
        }
        await utilizadorRep.update(utilizador);
        res.status(200).json({ message: "Utilizador atualizado", utilizador});
    }

    static async deleteUtilizadores(req: Request, res: Response) {
        const { id } = req.params;
        const utilizadorRep = myDataSource.getRepository(Utilizador);
        const utilizadores = await utilizadorRep.findOne({where: { id },});
        if (!utilizadores) {
            return res.status(404).json({message: "Utilizador não encontrado!"})
        }
        await utilizadorRep.delete(utilizadores);
        res.status(200).json({ message: "Utilizador eliminado"});
    }
}