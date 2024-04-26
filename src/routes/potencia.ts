import * as express from "express"
import { Request, Response } from "express"
import { Potencia } from "../entity/potencia";
import { myDataSource } from "../app-data-source";


const potencia = express()
potencia.use(express.json())

potencia.get("/", async function (req: Request, res: Response) {
    const potencia = await myDataSource.getRepository(Potencia).find()
    res.json(potencia)
})

potencia.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Potencia).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

potencia.post("/", async function (req: Request, res: Response) {
    const potencia = await myDataSource.getRepository(Potencia).create(req.body)
    const results = await myDataSource.getRepository(Potencia).save(potencia)
    return res.send(results)
})

potencia.put("/:id", async function (req: Request, res: Response) {
    const potencia = await myDataSource.getRepository(Potencia).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Potencia).merge(potencia, req.body)
    const results = await myDataSource.getRepository(Potencia).save(potencia)
    return res.send(results)
})

potencia.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Potencia).delete(req.params.id)
    return res.send(results)
})

module.exports = potencia;