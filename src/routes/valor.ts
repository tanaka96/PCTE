import * as express from "express"
import { Request, Response } from "express"
import { Valor } from "../entity/valor";
import { myDataSource } from "../app-data-source";


const valor = express()
valor.use(express.json())

valor.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idComercializador: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: 0.0000,
              valorEnergia: 0.0000,
              atualizado: 2024-05-24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const valor = await myDataSource.getRepository(Valor).find()
    return res.send(valor)
})

valor.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idComercializador: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: 0.0000,
              valorEnergia: 0.0000,
              atualizado: 2024-05-24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Valor).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Valor).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

valor.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              idComercializador: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: 0.0000,
              valorEnergia: 0.0000,
              atualizado: 2024-05-24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const valor = await myDataSource.getRepository(Valor).create(req.body)
    const results = await myDataSource.getRepository(Valor).save(valor)
    return res.status(201).send(results)
})

valor.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              idComercializador: 1,
              idPotencia: 1,
              idTarifario: 1,
              valorPotencia: 0.0000,
              valorEnergia: 0.0000,
              atualizado: 2024-05-24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let valor: any
    if (!await myDataSource.getRepository(Valor).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        valor = await myDataSource.getRepository(Valor).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Valor).merge(valor, req.body)
    const results = await myDataSource.getRepository(Valor).save(valor)
    return res.send(results)
})

valor.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Valor).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Valor).delete(req.params.id)
    return res.send(results)
})

module.exports = valor;