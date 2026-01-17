import React, { useState } from 'react'
import pro1 from '../../assets/latestPro1.jpg'
import pro2 from '../../assets/latestPro2.jpg'
import pro3 from '../../assets/latestPro3.jpg'
import pro4 from '../../assets/latestPro4.jpg'
import pro5 from '../../assets/latestPro5.jpg'
import SingleLatestCard from '../common/SingleLatestCard'
import Slider from 'react-slick'

const LatestProducts = () => {
    const products = [
        { name: "Mac", text: '', image: pro1 },
        { name: "iPhone", text: '', image: pro2 },
        { name: "iPad", text: '', image: pro3 },
        { name: "Apple Watch", text: '', image: pro4 },
        { name: "Apple Vision Pro", text: '', image: pro5 },
    ];

    // ------------- Slider 
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrentSlide(next),
        nextArrow: currentSlide < 9 - 7 ? <ChevronRight /> : null,
        prevArrow: currentSlide > 0 ? <ChevronLeft /> : null,
    };


    function ChevronRight({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                     h-12 w-12 text-xl rounded-full bg-gray-400/20 text-text-primary cursor-pointer shadow-lg
                     flex items-center justify-center
                     hover:scale-105 transition"
            >
                ❯
            </button>
        );
    }

    function ChevronLeft({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                     h-12 w-12 text-xl rounded-full bg-gray-400/20 text-text-primary cursor-pointer shadow-lg
                     flex items-center justify-center
                     hover:scale-105 transition"
            >
                ❮
            </button>
        );
    }
    return (
        <>
            <section id='LatestProduct' className='mt-28 overflow-x-hidden'>
                <div className="container">
                    {/* ------------ Text  */}
                    <div id="Header-Row" className='mb-10'>
                        <h2 className='text-3xl font-semibold text-text-primary'>The latest. <span className='text-text-secondary'>Take a look at what’s new, right now.</span></h2>
                    </div>
                </div> 

                {/* ------------ Cards  */}
                <div id="Cards-Row" className='pl-10'>
                    <div>
                        <Slider {...settings}>
                            {products.map((item, i) => (
                                <SingleLatestCard key={i} item={item} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestProducts