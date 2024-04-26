import * as express from "express"
import { Request, Response } from "express"
import { Utilizador } from "../entity/utilizador";
import { myDataSource } from "../app-data-source";


const utilizador = express()
utilizador.use(express.json())

utilizador.get("/", async function (req: Request, res: Response) {
    const utilizador = await myDataSource.getRepository(Utilizador).find()
    res.json(utilizador)
})

utilizador.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Utilizador).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

utilizador.post("/", async function (req: Request, res: Response) {
    const utilizador = await myDataSource.getRepository(Utilizador).create(req.body)
    const results = await myDataSource.getRepository(Utilizador).save(utilizador)
    return res.send(results)
})

utilizador.put("/:id", async function (req: Request, res: Response) {
    const utilizador = await myDataSource.getRepository(Utilizador).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Utilizador).merge(utilizador, req.body)
    const results = await myDataSource.getRepository(Utilizador).save(utilizador)
    return res.send(results)
})

utilizador.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Utilizador).delete(req.params.id)
    return res.send(results)
})

module.exports = utilizador;