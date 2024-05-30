import * as express from "express"
import { Request, Response } from "express"
import { Tarifario } from "../entity/tarifario";
import { myDataSource } from "../app-data-source";


const tarifario = express()
tarifario.use(express.json())


tarifario.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tarifario']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Simples',
              valor: 'Fixo',
              contrato: 'Particular'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const tarifario = await myDataSource.getRepository(Tarifario).find()
    return res.send(tarifario)
})

tarifario.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tarifario']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Simples',
              valor: 'Fixo',
              contrato: 'Particular'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Tarifario).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Tarifario).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

tarifario.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tarifario']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              tipo: 'Simples',
              valor: 'Fixo',
              contrato: 'Particular'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const tarifario = await myDataSource.getRepository(Tarifario).create(req.body)
    const results = await myDataSource.getRepository(Tarifario).save(tarifario)
    return res.status(201).send(results)
})

tarifario.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tarifario']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              tipo: 'Simples',
              valor: 'Fixo',
              contrato: 'Particular'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let tarifario: any
    if (!await myDataSource.getRepository(Tarifario).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        tarifario = await myDataSource.getRepository(Tarifario).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Tarifario).merge(tarifario, req.body)
    const results = await myDataSource.getRepository(Tarifario).save(tarifario)
    return res.send(results)
})

tarifario.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Tarifario']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Tarifario).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Tarifario).delete(req.params.id)
    return res.send(results)
})

module.exports = tarifario;