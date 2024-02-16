
import express = require("express")
import cors = require("cors");
import morgan from 'morgan'
import config from './config'

import productoRoutes from './routes/producto.routes'


const app = express()

app.set('port', config.PORT)


app.use(cors());
app.use(morgan('dev'))//Para saber la ruta de las peticiones
app.use(express.json()) //para entender los objetos json
app.use(express.urlencoded({extended:false}))//cuando hagan peticion post, entender los campos
app.use(productoRoutes)

export default app;

//para arrancar la aplicación npm run dev