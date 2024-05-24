import * as express from "express"
import { Request, Response } from "express"
import { Taxa } from "../entity/taxa";
import { myDataSource } from "../app-data-source";


const taxa = express()
taxa.use(express.json())

taxa.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    /* #swagger.responses[200] = {
          description: 'Some description...',
          schema: {
              name: 'John Doe',
              age: 29,
              about: ''
          }
  } */
    // #swagger.responses[500] = { description: 'Some description...' }
    const taxa = await myDataSource.getRepository(Taxa).find()
    res.json(taxa)
})

taxa.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    const results = await myDataSource.getRepository(Taxa).findOneBy({
        id: +req.params.id,
    })
    return res.send(results)
})

taxa.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    const taxa = await myDataSource.getRepository(Taxa).create(req.body)
    const results = await myDataSource.getRepository(Taxa).save(taxa)
    return res.send(results)
})

taxa.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    const taxa = await myDataSource.getRepository(Taxa).findOneBy({
        id: +req.params.id,
    })
    myDataSource.getRepository(Taxa).merge(taxa, req.body)
    const results = await myDataSource.getRepository(Taxa).save(taxa)
    return res.send(results)
})

taxa.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Taxa']
    const results = await myDataSource.getRepository(Taxa).delete(req.params.id)
    return res.send(results)
})

module.exports = taxa;