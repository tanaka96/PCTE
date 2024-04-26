import * as express from "express"
import { Request, Response } from "express"
import { Tar } from "../entity/tar";
import { myDataSource } from "../app-data-source";


const tar = express()
tar.use(express.json())

tar.get("/", async function (req: Request, res: Response) {
    const tar = await myDataSource.getRepository(Tar).find()
    res.json(tar)
})

tar.get("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Tar).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

tar.post("/", async function (req: Request, res: Response) {
    const tar = await myDataSource.getRepository(Tar).create(req.body)
    const results = await myDataSource.getRepository(Tar).save(tar)
    return res.send(results)
})

tar.put("/:id", async function (req: Request, res: Response) {
    const tar = await myDataSource.getRepository(Tar).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Tar).merge(tar, req.body)
    const results = await myDataSource.getRepository(Tar).save(tar)
    return res.send(results)
})

tar.delete("/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Tar).delete(req.params.id)
    return res.send(results)
})

module.exports = tar;