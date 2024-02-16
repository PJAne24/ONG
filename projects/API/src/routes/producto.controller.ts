import {RequestHandler} from 'express'
import Producto from './producto'


//Crear un producto
export const createProducto: RequestHandler = async (req,res) => {
    const productosEncontrados = await Producto.findOne({url: req.body.url})
    if (productosEncontrados)//validación para los productos cuando ya existan
      return res.status(301).json({ message: "Producto ya existe" });

    const producto = new Producto(req.body) 
    const productoCreado = await producto.save()
    res.json(productoCreado)
}


//Actualizar un producto
export const updateProducto: RequestHandler = async(req,res) => {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true}) //el new true hará que devuelva el producto nuevo y no el anterior
    if (!productoActualizado) return res.status(204).json();
    res.json(productoActualizado)
}

//Eliminar un producto
export const deleteProducto: RequestHandler = async (req,res) => {
    const productoEncontrado = await Producto.findByIdAndDelete(req.params.id)
    if (!productoEncontrado) return res.status(204).json();
    return res.json('Se ha eliminado este producto: \n' + productoEncontrado)
}

//Obtener UN producto
export const getProducto: RequestHandler = async (req,res) => { //actualiza un producto
    const productoEncontrado = await Producto.findById(req.params.id)
    if (!productoEncontrado) return res.status(204).json();
    return res.json(productoEncontrado)
}

//Obtener todos los productos
export const getProductos: RequestHandler = async (req,res) => { //actualiza varios productos
    try {
        const productos = await Producto.find()
    return res.json(productos)
    } catch (error) {
        res.json(error)
    }
}