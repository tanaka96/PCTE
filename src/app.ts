import * as express from "express";
import {myDataSource} from "./app-data-source";
import { UtilizadorController } from "./controllers/utilizador.controller";
import { AuthController } from "./controllers/auth.controller";
import { authentication } from "./middleware/authentification";
import { authorization } from "./middleware/authorization";
import { ResultadoController } from "./controllers/resultado.controller";


const cookieParser = require("cookie-parser");
var swaggerUi = require("swagger-ui-express");
var swaggerFile = require('./swagger-new.json');

myDataSource.initialize().then(() => {
        console.log("Data Source has been initialized!")
    }).catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
const port = process.env.PORT

app.use(express.json());


app.use('/comercializador', require('./routes/comercializador.ts'))

app.use('/desconto', require('./routes/desconto.ts'))

app.use('/potencia', require('./routes/potencia.ts'))

app.use('/tar', require('./routes/tar.ts'))

app.use('/tarifario', require('./routes/tarifario.ts'))

app.use('/taxa', require('./routes/taxa.ts'))

app.use('/utilizador', require('./routes/utilizador.ts'))

app.use('/valor', require('./routes/valor.ts'))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cookieParser())

app.get("/perfil", authentication, authorization(["user", "admin"]), AuthController.getProfile,
    // #swagger.tags = ['Perfil']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              id: 1,
              first_name: 'Example',
              last_name: 'Example',
              email: 'example@example.com',
              admin: 'user'
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
);

app.post("/signup", UtilizadorController.signUp,
    // #swagger.tags = ['SignUp']
);

app.post("/login", AuthController.login,
    // #swagger.tags = ['LogIn']
);

app.post("/resultado", ResultadoController.Resultado,
    // #swagger.tags = ['Resultado']
    /* #swagger.responses[200] = {
          description: 'Success',
          schema: {
              "result": [
                    {
                        "comercializador": "EDP",
                        "precoTotal": "27.17",
                        "preco100kW": "19.40",
                        "precoResto": "0.23",
                        "precoEnergia": "19.62",
                        "precoPotencia": "4.32",
                        "impostos": {
                            "audiovisual": "3.02",
                            "DGEG": "0.09",
                            "IEC": "0.12",
                            "IVA": "2.16"
                        },
                        "tar": "5.90",
                        "desconto": "0.00",
                        "valor": "Fixo"
                    }]
          }
  } */
    // #swagger.responses[404] = { description: 'Not Found' }
);


app.listen(port, () => {
    console.log('Running on 3000');
});