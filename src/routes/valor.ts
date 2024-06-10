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
              comercializador: 'EDP',
              potencia: '1.15',
              tarifario: 'Simples',
              valor: 'Fixo',
              valorPotencia: 0.0000,
              valorSimples: 0.0000,
              valorVazio: 0.0000,
              valorNaoVazio: 0.0000,
              atualizacao: 2024/05/24
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
              comercializador: 'EDP',
              potencia: '1.15',
              tarifario: 'Simples',
              valor: 'Fixo',
              valorPotencia: 0.0000,
              valorSimples: 0.0000,
              valorVazio: 0.0000,
              valorNaoVazio: 0.0000,
              atualizacao: 2024/05/24
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
              comercializador: 'EDP',
              potencia: '1.15',
              tarifario: 'Simples',
              valor: 'Fixo',
              valorPotencia: 0.0000,
              valorSimples: 0.0000,
              valorVazio: 0.0000,
              valorNaoVazio: 0.0000,
              atualizacao: 2024/05/24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const hoje = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const valor = await myDataSource.getRepository(Valor).create(req.body)
    valor.atualizacao = hoje
    const results = await myDataSource.getRepository(Valor).save(valor)
    return res.status(201).json(results)
})

valor.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Valor']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              comercializador: 'EDP',
              potencia: '1.15',
              tarifario: 'Simples',
              valor: 'Fixo',
              valorPotencia: 0.0000,
              valorSimples: 0.0000,
              valorVazio: 0.0000,
              valorNaoVazio: 0.0000,
              atualizacao: 2024/05/24
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let hoje = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let valor: any
    if (!await myDataSource.getRepository(Valor).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        valor = await myDataSource.getRepository(Valor).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Valor).merge(valor, req.body, valor.atualizacao = hoje)
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