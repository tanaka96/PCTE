import * as express from "express"
import { Request, Response } from "express"
import { Tarifario } from "../entity/tarifario";
import { myDataSource } from "../app-data-source";


const tarifario = express()
tarifario.use(express.json())


tarifario.get("/", async function (req: Request, res: Response) {
    const tarifario = await myDataSource.getRepository(Tarifario).find()
    res.json(tarifario)
})

tarifario.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Tarifario).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

tarifario.post("/", async function (req: Request, res: Response) {
    const tarifario = await myDataSource.getRepository(Tarifario).create(req.body)
    const results = await myDataSource.getRepository(Tarifario).save(tarifario)
    return res.send(results)
})

tarifario.put("/:id", async function (req: Request, res: Response) {
    const tarifario = await myDataSource.getRepository(Tarifario).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Tarifario).merge(tarifario, req.body)
    const results = await myDataSource.getRepository(Tarifario).save(tarifario)
    return res.send(results)
})

tarifario.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Tarifario).delete(req.params.id)
    return res.send(results)
})

module.exports = tarifario;