import * as express from "express"
import { Request, Response } from "express"
import { Comercializador } from "../entity/comercializador";
import { myDataSource } from "../app-data-source";


const comercializador = express()
comercializador.use(express.json())


comercializador.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    const comercializador = await myDataSource.getRepository(Comercializador).find()
    res.json(comercializador)
})

comercializador.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Comercializador).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

comercializador.post("/", async function (req: Request, res: Response) {
    const comercializador = await myDataSource.getRepository(Comercializador).create(req.body)
    const results = await myDataSource.getRepository(Comercializador).save(comercializador)
    return res.send(results)
})

comercializador.put("/:id", async function (req: Request, res: Response) {
    const comercializador = await myDataSource.getRepository(Comercializador).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Comercializador).merge(comercializador, req.body)
    const results = await myDataSource.getRepository(Comercializador).save(comercializador)
    return res.send(results)
})

comercializador.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Comercializador).delete(req.params.id)
    return res.send(results)
})

module.exports = comercializador;