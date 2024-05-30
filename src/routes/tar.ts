import * as express from "express"
import { Request, Response } from "express"
import { Tar } from "../entity/tar";
import { myDataSource } from "../app-data-source";


const tar = express()
tar.use(express.json())

tar.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tar']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: '0.0000',
              valorTarifario: '0.0000'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const tar = await myDataSource.getRepository(Tar).find()
    res.json(tar)
})

tar.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tar']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: '0.0000',
              valorTarifario: '0.0000'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Tar).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Tar).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

tar.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tar']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: '0.0000',
              valorTarifario: '0.0000'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const tar = await myDataSource.getRepository(Tar).create(req.body)
    const results = await myDataSource.getRepository(Tar).save(tar)
    return res.status(201).send(results)
})

tar.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tar']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: '0.0000',
              valorTarifario: '0.0000'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let tar: any
    if (!await myDataSource.getRepository(Tar).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        tar = await myDataSource.getRepository(Tar).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Tar).merge(tar, req.body)
    const results = await myDataSource.getRepository(Tar).save(tar)
    return res.send(results)
})

tar.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tar']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Tar).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Tar).delete(req.params.id)
    return res.send(results)
})

module.exports = tar;