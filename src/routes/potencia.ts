import * as express from "express"
import { Request, Response } from "express"
import { Potencia } from "../entity/potencia";
import { myDataSource } from "../app-data-source";


const potencia = express()
potencia.use(express.json())

potencia.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Potencia']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 29,
              potencia_contratada: '1.11'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const potencia = await myDataSource.getRepository(Potencia).find()
    return res.send(potencia)
})

potencia.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Potencia']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 29,
              potencia_contratada: '1.11'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Potencia).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Potencia).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

potencia.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Potencia']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 29,
              potencia_contratada: '1.11'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const potencia = await myDataSource.getRepository(Potencia).create(req.body)
    const results = await myDataSource.getRepository(Potencia).save(potencia)
    return res.status(201).send(results)
})

potencia.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Potencia']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 29,
              potencia_contratada: '1.11'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let potencia: any
    if (!await myDataSource.getRepository(Potencia).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        potencia = await myDataSource.getRepository(Potencia).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Potencia).merge(potencia, req.body)
    const results = await myDataSource.getRepository(Potencia).save(potencia)
    return res.send(results)
})

potencia.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Potencia']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Potencia).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Potencia).delete(req.params.id)
    return res.send(results)
})

module.exports = potencia;