import {Schema, model} from 'mongoose'

const productoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: false,
        unique: true
    }

}, {
    versionKey: false, //para que no aparezca la versión
    timestamps: true //crea dos campos cuando se actualiza y cuando se crea el dato
})

export default model('Producto', productoSchema)