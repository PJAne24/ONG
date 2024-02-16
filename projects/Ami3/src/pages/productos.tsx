import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import axios from 'axios'
import '../styles/productos.css'
import { useEffect, useState } from 'react'

//Definimos la estructura del objeto
interface Producto {
    id?: string;
    title: string;
    description: string;
    url: string;
    createdAt?: string;
    updatedAt?: string;
}


const productos = () => {

    const [productos, setProductos] = useState<Producto[]>([])//un arreglo de producto

    const cargarProductos = async () => {
        const res = await axios.get('http://localhost:3000/productos')
        setProductos(res.data)//Los datos de la respuesta
    }

    useEffect(() => {
        cargarProductos()
    }, [])


    return (
        <div>
            <Header />
            <div className='productos'>
                {productos.map(producto => (
                    <div>
                        <h1>{producto.title}</h1>
                        <img src={producto.url} alt="" />
                        <p>{producto.description}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default productos