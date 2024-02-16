import mongoose from 'mongoose'
import config from './config' //con esto haremos la conexion a la bbdd mas segura

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`); //nos conectamos y creamos la bbdd sino esta creada
        console.log('database is connected', db.connection.name);
    } catch (error) {
        console.log(error)
    }
})()