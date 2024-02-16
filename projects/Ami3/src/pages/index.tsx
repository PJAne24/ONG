import image from '.././assets/56b8f835fa1a56e6612679a08c2c13bb.png'
import imgNews1 from '.././assets/bad8b07867edef39b8e1129296123a3b.jpg'
import imgNews2 from '.././assets/99b14b791f4147b1f6ed68e2922afdf4.jpg'
import imgNews3 from '.././assets/9881bf3d9d2c8c4e352dcf1a29dc63df.jpg'
import imgNews4 from '.././assets/6c95b9b3f415dabec17faa760187b8ae.jpg'
import imgNews5 from '.././assets/3e7e941c2e15c5aa5d602bce404b75e4.jpg'


import flashcard1 from '.././assets/e891ae80e7d1c5b653db7fed85d53576.png'
import flashcard2 from '.././assets/e1c5edfd776c7702ed146e3996389a79.png'
import flashcard3 from '.././assets/c9d55eefac6106a04a8ad147040182c8.png'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import undercore from '../components/undercore.svg'
import ".././styles/index copy.css"

const index = () => {
    return (
        <div>
            <Header />
            {/*https://www.youtube.com/watch?v=L0Cjayl3yIM web responsive*/}
            <div>
                <img src={image} alt="slider" id="slider" />
            </div>
            <div className='background'>
                <div className='titles'>
                    <h2>Últimas noticias</h2>
                    <img src={undercore} alt="" className="undercore" />
                </div>
                <div className='news'>
                    <img src={imgNews1} alt="" />
                    <img src={imgNews4} alt="" />
                    <img src={imgNews5} alt="" />
                    <img src={imgNews3} alt="" />
                    <img src={imgNews2} alt="" />
                </div>
                <div className='titles'>
                    <h2>Colabora</h2>
                    <img src={undercore} alt="" className="undercore" />
                </div>

                <div className='flashcards'>
                    <div>
                        <h3>SER SOCIO</h3>
                        <img src={flashcard3} alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis neque dolores cupiditate exercitationem odio dolore, repellat optio cumque, quae, necessitatibus pariatur corrupti. Doloremque dolore vero pariatur maiores cumque. Ullam!</span>
                    </div>
                    <div>
                        <h3>SER VOLUNTARIO</h3>
                        <img src={flashcard1} alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis neque dolores cupiditate exercitationem odio dolore, repellat optio cumque, quae, necessitatibus pariatur corrupti. Doloremque dolore vero pariatur maiores cumque. Ullam!</span>
                    </div>
                    <div>
                        <h3>DONAR</h3>
                        <img src={flashcard2} alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis neque dolores cupiditate exercitationem odio dolore, repellat optio cumque, quae, necessitatibus pariatur corrupti. Doloremque dolore vero pariatur maiores cumque. Ullam!</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index