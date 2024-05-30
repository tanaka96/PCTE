import * as express from "express"
import { Request, Response } from "express"
import { Taxa } from "../entity/taxa";
import { myDataSource } from "../app-data-source";


const taxa = express()
taxa.use(express.json())

taxa.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              nome: 'IVA',
              valor: '1.111'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const taxa = await myDataSource.getRepository(Taxa).find()
    res.json(taxa)
})

taxa.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              nome: 'IVA',
              valor: '1.111'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Taxa).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Taxa).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

taxa.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              nome: 'IVA',
              valor: '1.111'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const taxa = await myDataSource.getRepository(Taxa).create(req.body)
    const results = await myDataSource.getRepository(Taxa).save(taxa)
    return res.status(201).send(results)
})

taxa.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              nome: 'IVA',
              valor: '1.111'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let taxa: any
    if (!await myDataSource.getRepository(Taxa).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        taxa = await myDataSource.getRepository(Taxa).findOneBy({
            id: +req.params.id,
        })
    myDataSource.getRepository(Taxa).merge(taxa, req.body)
    const results = await myDataSource.getRepository(Taxa).save(taxa)
    return res.send(results)
})

taxa.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Taxa).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Taxa).delete(req.params.id)
    return res.send(results)
})

module.exports = taxa;