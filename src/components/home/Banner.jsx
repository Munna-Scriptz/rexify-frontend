import React, { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { VideoSlide } from './VideoSlide';

import video2 from '../../assets/sliderVideo2.webm'
import video2Thumb from '../../assets/video2Thumbnail.png'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
            setProgress(0);
        }
    };

    const videoContent = [
        {
            header: 'NASync DH2300',
            text: 'Smart Storage Made Simple',
            source: 'https://www.ugreen.com/cdn/shop/videos/c/vp/165681dd494845aa97d6cdc2e8b7118c/165681dd494845aa97d6cdc2e8b7118c.HD-1080p-7.2Mbps-60442324.mp4',
            poster: 'https://www.ugreen.com/cdn/shop/files/preview_images/165681dd494845aa97d6cdc2e8b7118c.thumbnail.0000000000.jpg?v=1761028855',
        },
        {
            header: 'Next Gen Speed',
            text: 'Fast, Secure, Reliable',
            source: video2,
            poster: video2Thumb,
        },
        {
            header: 'Next Gen Speed',
            text: 'Fast, Secure, Reliable',
            source: '//www.ugreen.com/cdn/shop/videos/c/vp/e1db20f11eb44eba84c0a166de328998/e1db20f11eb44eba84c0a166de328998.HD-1080p-7.2Mbps-58219116.mp4?v=0',
            poster: '//www.ugreen.com/cdn/shop/files/preview_images/e1db20f11eb44eba84c0a166de328998.thumbnail.0000000000.jpg?v=1758780954&amp;width=3840',
        },
    ];

    // Video Update handler
    const handleVideoUpdate = (e) => {
        if (e.type === 'timeupdate') {
            const { currentTime, duration } = e.target;
            const percent = (currentTime / duration) * 100;
            setProgress(percent);
        }
        if (e.type === 'ended') {
            sliderRef.current.slickNext();
        }
    };

    return (
        <section>
            <div id="Banner-Row" className='w-full h-screen absolute top-0 left-0'>
                <Slider ref={sliderRef} {...settings} >
                    {videoContent.map((item, i) => (
                        <VideoSlide
                            key={i}
                            item={item}
                            isActive={i === currentSlide}
                            onVideoEnd={handleVideoUpdate}
                        />
                    ))}
                </Slider>

                {/* Timeline Controls */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full z-30">
                    <div className="flex w-full justify-center gap-2 h-1.5 cursor-pointer">
                        {videoContent.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => sliderRef.current.slickGoTo(i)}
                                className="w-30 bg-white/30 rounded-full overflow-hidden relative group"
                            >
                                <div
                                    className="h-full bg-white transition-all duration-100 ease-linear absolute top-0 left-0"
                                    style={{
                                        width: i < currentSlide ? '100%' : i === currentSlide ? `${progress}%` : '0%'
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;