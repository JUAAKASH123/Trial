import './hero.css'
import banner1 from "./assets/banner1.jpg"
import banner2 from "./assets/banner2.jpg"
import banner3 from "./assets/banner3.jpg"
import banner4 from "./assets/banner4.jpg"
import banner5 from "./assets/banner5.jpg"
import banner6 from "./assets/banner6.jpg"
import banner7 from "./assets/banner7.jpg"

function Hero() {
    return (
        <>
            <div className='banner'>
                <div>
                    <img src={banner1} className='banner-img' />
                </div>
                <div>
                    <img src={banner2} className='banner-img' />
                </div>
                <div>
                    <img src={banner3} className='banner-img' />
                </div>
                <div>
                    <img src={banner4} className='banner-img' />
                </div>
                <div>
                    <img src={banner5} className='banner-img' />
                </div>
                <div>
                    <img src={banner6} className='banner-img' />
                </div>
                <div>
                    <img src={banner7} className='banner-img' />
                </div>
            </div>
        </>

    )
}

export default Hero