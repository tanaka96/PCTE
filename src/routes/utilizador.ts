import * as express from "express"
import { Request, Response } from "express"
import { Utilizador } from "../entity/utilizador";
import { myDataSource } from "../app-data-source";
import { authentication } from "../middleware/authentification";
import { UtilizadorController } from "../controllers/utilizador.controller";
import { authorization } from "../middleware/authorization";



const utilizador = express()
utilizador.use(express.json())

utilizador.get("/", authentication, authorization(["admin"]), UtilizadorController.getUtilizadores,
    // #swagger.tags = ['Utilizador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              first_name: 'Example',
              last_name: 'Example',
              email: 'example@example.com',
              password: 'password',
              admin: false
          }
  } */
    //#swagger.responses[404] = { description: 'Not Found' }
    )

utilizador.get("/:id", async function (req: Request, res: Response) {
    // #swagger.tags = ['Utilizador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              first_name: 'Example',
              last_name: 'Example',
              email: 'example@example.com',
              password: 'password',
              admin: false
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    let results: any
    if (!await myDataSource.getRepository(Utilizador).findOneBy({id: +req.params.id})){
        return res.status(404).send("id not found")
    }
    else
        results = await myDataSource.getRepository(Utilizador).findOneBy({
            id: +req.params.id,
        })
    return res.send(results)
})

//utilizador.post("/", async function (req: Request, res: Response) {
    // #swagger.tags = ['Utilizador']
    /* #swagger.responses[201] = {
          description: 'Created',
          schema: {
              id: 1,
              first_name: 'Example',
              last_name: 'Example',
              email: 'example@example.com',
              password: 'password',
              admin: false
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
    /*const utilizador = await myDataSource.getRepository(Utilizador).create(req.body)
    const results = await myDataSource.getRepository(Utilizador).save(utilizador)
    return res.status(201).send(results)
})*/

utilizador.put("/:id", authentication, authorization(["user", "admin"]), UtilizadorController.updateUtilizadores,
    // #swagger.tags = ['Utilizador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              first_name: 'Example',
              last_name: 'Example',
              email: 'example@example.com',
              password: 'password',
              admin: false
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
);

utilizador.delete("/:id", authentication, authorization(["user", "admin"]), UtilizadorController.deleteUtilizadores,
    // #swagger.tags = ['Utilizador']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "message": "Utilizador eliminado"
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
);

module.exports = utilizador;