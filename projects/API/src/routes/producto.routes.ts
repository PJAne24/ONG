//Aqui se encuentran las rutas que puedo consultar en el servidor
import {Router} from 'express'
import * as productoController from './producto.controller'

const router = Router()

router.post('/productos', productoController.createProducto);

router.put('/productos/:id', productoController.updateProducto);

router.get('/productos/:id', productoController.getProducto);

router.delete('/productos/:id', productoController.deleteProducto);

router.get('/productos', productoController.getProductos);

export default router
