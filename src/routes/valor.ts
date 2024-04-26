import * as express from "express"
import { Request, Response } from "express"
import { Valor } from "../entity/valor";
import { myDataSource } from "../app-data-source";


const valor = express()
valor.use(express.json())

valor.get("/", async function (req: Request, res: Response) {
    const valor = await myDataSource.getRepository(Valor).find()
    res.json(valor)
})

valor.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Valor).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

valor.post("/", async function (req: Request, res: Response) {
    const valor = await myDataSource.getRepository(Valor).create(req.body)
    const results = await myDataSource.getRepository(Valor).save(valor)
    return res.send(results)
})

valor.put("/:id", async function (req: Request, res: Response) {
    const valor = await myDataSource.getRepository(Valor).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Valor).merge(valor, req.body)
    const results = await myDataSource.getRepository(Valor).save(valor)
    return res.send(results)
})

valor.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Valor).delete(req.params.id)
    return res.send(results)
})

module.exports = valor;