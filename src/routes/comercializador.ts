import * as express from "express"
import {Request, Response} from "express"
import {Comercializador} from "../entity/comercializador";
import {myDataSource} from "../app-data-source";
import { upload } from "../controllers/logo.controller"
import * as multer from "multer"


const comercializador = express()
comercializador.use(express.json())


comercializador.get("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              empresa: 'Exemplo',
              logo: 'content\\logos\\exemplo.png'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const comercializador = await myDataSource.getRepository(Comercializador).find()
    //res.json(comercializador)
    return res.send(comercializador)
})

comercializador.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              empresa: 'Exemplo',
              logo: 'content\\logos\\exemplo.png'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Comercializador).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Comercializador).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

comercializador.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              empresa: 'Exemplo',
              id: 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    const comercializador = await myDataSource.getRepository(Comercializador).create(req.body)
    const results = await myDataSource.getRepository(Comercializador).save(comercializador)
    return res.status(201).send(results)
})

comercializador.put("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              empresa: 'Exemplo',
              logo: 'content\\logos\\exemplo.png'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let comercializador: any
    if (!await myDataSource.getRepository(Comercializador).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        comercializador = await myDataSource.getRepository(Comercializador).findOneBy({
            id: +req.params.id,
        })
        myDataSource.getRepository(Comercializador).merge(comercializador, req.body)
        const results = await myDataSource.getRepository(Comercializador).save(comercializador)
        return res.send(results)
})

comercializador.delete("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "raw": [],
              "affected": 1
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any;
    if (!await myDataSource.getRepository(Comercializador).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Comercializador).delete(req.params.id)
        return res.send(results)
})

comercializador.put("/upload/:id", upload.single("logo"), async (req, res) => {
    // #swagger.tags = ['Comercializador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              empresa: 'Exemplo',
              logo: 'content\\logos\\exemplo.png'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let comercializador: any
    if (!await myDataSource.getRepository(Comercializador).findOneBy({id: +req.params.id})) {
        return res.status(404).send("Comercializador não encontrado")
    } else {
        comercializador = await myDataSource.getRepository(Comercializador).findOneBy({
            id: +req.params.id,
        })
        const ficheiro = req.file.path
        myDataSource.getRepository(Comercializador).merge(comercializador, req.body)
        comercializador.logo = ficheiro
        const results = await myDataSource.getRepository(Comercializador).save(comercializador)
        return res.send(results)
    }
})

module.exports = comercializador;