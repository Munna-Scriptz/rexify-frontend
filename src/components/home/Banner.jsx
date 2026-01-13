import React from 'react';
import Button from '../../ui/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const videoContent = [
        {
            header: 'NASync DH2300',
            text: 'Smart Storage Made Simple',
            source: 'https://www.ugreen.com/cdn/shop/videos/c/vp/165681dd494845aa97d6cdc2e8b7118c/165681dd494845aa97d6cdc2e8b7118c.HD-1080p-7.2Mbps-60442324.mp4',
            poster: 'https://www.ugreen.com/cdn/shop/files/preview_images/165681dd494845aa97d6cdc2e8b7118c.thumbnail.0000000000.jpg?v=1761028855',
            link: 'www.youtube.com'
        },
        {
            header: 'NASync DH2300',
            text: 'Smart Storage Made Simple',
            source: 'https://www.ugreen.com/cdn/shop/videos/c/vp/165681dd494845aa97d6cdc2e8b7118c/165681dd494845aa97d6cdc2e8b7118c.HD-1080p-7.2Mbps-60442324.mp4',
            poster: 'https://www.ugreen.com/cdn/shop/files/preview_images/165681dd494845aa97d6cdc2e8b7118c.thumbnail.0000000000.jpg?v=1761028855',
            link: 'www.youtube.com'
        },
    ]
    return (
        <section className='h-screen'>
            <div id="Banner-Row" className='w-full object-cover absolute top-0 left-0 '>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            videoContent.map((item, i)=>(
                                <div key={i} className='relative'>
                                    {/* ----------------- Text  */}
                                    <div className='absolute top-35 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center'>
                                        <h1 className='text-5xl text-white font-semibold text-center mb-3'>{item.header}</h1>
                                        <p className='text-center text-lg mb-3'>{item.text}</p>
                                        <Button variant="primary" className='uppercase'>Learn More</Button>
                                    </div>
                                    {/* ----------------- Video  */}
                                    <video
                                        className="w-full object-contain"
                                        src={item.source}
                                        poster={item.poster}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Banner;
