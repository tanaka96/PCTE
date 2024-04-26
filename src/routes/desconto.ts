import * as express from "express"
import { Request, Response } from "express"
import { Desconto } from "../entity/desconto";
import { myDataSource } from "../app-data-source";


const desconto = express()
desconto.use(express.json())

desconto.get("/", async function (req: Request, res: Response) {
    const desconto = await myDataSource.getRepository(Desconto).find()
    res.json(desconto)
})

desconto.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Desconto).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

desconto.post("/", async function (req: Request, res: Response) {
    const desconto = await myDataSource.getRepository(Desconto).create(req.body)
    const results = await myDataSource.getRepository(Desconto).save(desconto)
    return res.send(results)
})

desconto.put("/:id", async function (req: Request, res: Response) {
    const desconto = await myDataSource.getRepository(Desconto).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Desconto).merge(desconto, req.body)
    const results = await myDataSource.getRepository(Desconto).save(desconto)
    return res.send(results)
})

desconto.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Desconto).delete(req.params.id)
    return res.send(results)
})

module.exports = desconto;