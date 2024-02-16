import { Link } from "react-router-dom";

import image from "../../assets/logo_Ami3.png"
import "./header.css"


const header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                    <li><Link to="/actividades">Actividades</Link></li>
                    <li><Link to="/"><img src={image} alt="" /></Link></li>
                    <li><Link to="/colabora">Colabora</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default header