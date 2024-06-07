import * as express from "express"
import { Request, Response } from "express"
import { Desconto } from "../entity/desconto";
import { myDataSource } from "../app-data-source";


const desconto = express()
desconto.use(express.json())

desconto.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Desconto']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Fatura Eletronica',
              percentagem: 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const desconto = await myDataSource.getRepository(Desconto).find()
    return res.send(desconto)
})

desconto.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Desconto']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Fatura Eletronica',
              percentagem: 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Desconto).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Desconto).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

desconto.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Desconto']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              tipo: 'Fatura Eletronica',
              percentagem: 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const desconto = await myDataSource.getRepository(Desconto).create(req.body)
    const results = await myDataSource.getRepository(Desconto).save(desconto)
    return res.status(201).send(results)
})

desconto.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Desconto']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Fatura Eletronica',
              percentagem: 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let desconto: any
    if (!await myDataSource.getRepository(Desconto).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        desconto = await myDataSource.getRepository(Desconto).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Desconto).merge(desconto, req.body)
    const results = await myDataSource.getRepository(Desconto).save(desconto)
    return res.send(results)
})

desconto.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Desconto']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Desconto).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Desconto).delete(req.params.id)
    return res.send(results)
})

module.exports = desconto;