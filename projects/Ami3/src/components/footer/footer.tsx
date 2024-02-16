import './footer.css'

import logoInclusion from '../../assets/logo_plena-inclusion.png'

import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import tiktok from '../../assets/tik-tok.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'

const footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='titulos centrar'>
                    <span>About us</span>
                    <span>Follow Us</span>
                    <span>Contact Us</span>
                </div>
                <div className='textos centrar'>
                    <img src={logoInclusion} alt="" id='logoInclusion' />
                    <div className='textos-dentro'>
                        <div className='enlaces'>
                            <a href="">Transparencia</a>
                            <a href="">Documentación</a>
                            <a href="">Productos</a>
                            <a href="">Aviso Legal</a>
                            <a href="">Política de privacidad</a>
                            <a href="">Política de cookies</a>
                        </div>
                    </div>
                    <div className='follow-us'>
                        <div>
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={tiktok} alt="" />
                        </div>
                    </div>
                    <div className='contact-us'>
                        <div>
                            <img src={mail} alt="" id='mail' />
                            <img src={phone} alt="" />
                            <span><b>Dirección:</b> Calle del Comercio, 2, 28760 Tres Cantos, Madrid</span>
                        </div>
                    </div>
                </div>
                {/* <div className='centrar'>
                    <img src={logoInclusion} alt="" id='logoInclusion' />
                    </div>
                <div className='textos'>
                    <span>About us</span>
                    <div className='enlaces'>
                        <a href="">Transparencia</a>
                        <a href="">Documentación</a>
                        <a href="">Productos</a>
                        <a href="">Aviso Legal</a>
                        <a href="">Política de privacidad</a>
                        <a href="">Política de cookies</a>
                    </div>
                </div>
                <div className='follow-us'>
                    <span>Follow Us</span>
                    <div>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={tiktok} alt="" />
                    </div>
                </div>
                <div className='contact-us'>
                    <span>Contact Us</span>
                    <div>
                    <img src={mail} alt="" id='mail' />
                    <img src={phone} alt="" />
                    <span><b>Dirección:</b> Calle del Comercio, 2, 28760 Tres Cantos, Madrid</span>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default footer