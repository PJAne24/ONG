//configuracion de mi aplicacion

//procces.env es como acceder al sistema y dame todas las variables que tengas alli, primero hay que configurarlo para que funcione y lea la variable 
//console.log(process.env.HELLO)

import dotenv from 'dotenv'//estas dos lineas de codigo permiten leer el archivo env
dotenv.config();


export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'productos', //Accedemos a env y se ejecutara la variable si esta definida o sino 'productos'
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||  'admin',
    MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000 //que utilice un puerto en env o el 3000
}
    
