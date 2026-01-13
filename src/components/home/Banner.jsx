import React, { useState, useRef, useEffect } from 'react';
import Button from '../../ui/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// --- 1. Sub-Component to handle individual video logic securely ---
const VideoSlide = ({ item, isActive, onVideoEnd }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isActive) {
            // Force mute in JS to bypass browser security
            video.muted = true;
            video.currentTime = 0;

            // Handle the play promise to catch "Autoplay denied" errors
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay prevented by browser:", error);
                });
            }
        } else {
            video.pause();
        }
    }, [isActive]); // Only run when active state changes

    return (
        <div className='relative  w-full outline-none'>
            {/* Text Overlay */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center w-full max-w-4xl px-4'>
                <h1 className='text-5xl text-white font-semibold text-center mb-3 drop-shadow-lg'>
                    {item.header}
                </h1>
                <p className='text-center text-lg text-gray-100 mb-6 drop-shadow-md'>
                    {item.text}
                </p>
                <Button variant="primary" className='uppercase shadow-lg'>
                    Learn More
                </Button>
            </div>

            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={item.source}
                poster={item.poster}
                muted // React prop
                playsInline
                preload="metadata"
                onTimeUpdate={isActive ? onVideoEnd : undefined}
                onEnded={onVideoEnd}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
        </div>
    );
};

// --- 2. Main Banner Component ---
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true, // Be careful with infinite, simpler to debug if false first
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // We control playback manually
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
            source: 'https://www.ugreen.com/cdn/shop/videos/c/vp/165681dd494845aa97d6cdc2e8b7118c/165681dd494845aa97d6cdc2e8b7118c.HD-1080p-7.2Mbps-60442324.mp4',
            poster: 'https://www.ugreen.com/cdn/shop/files/preview_images/165681dd494845aa97d6cdc2e8b7118c.thumbnail.0000000000.jpg?v=1761028855',
        },
    ];

    // Shared handler for progress logic
    const handleVideoUpdate = (e) => {
        // e.target is the video element
        if (e.type === 'timeupdate') {
            const { currentTime, duration } = e.target;
            const percent = (currentTime / duration) * 100;
            setProgress(percent);
        }
        // If video ends, go next
        if (e.type === 'ended') {
            sliderRef.current.slickNext();
        }
    };

    return (
        <section className='h-screen '>
            <div id="Banner-Row" className='w-full h-full absolute top-0 left-0'>
                <Slider ref={sliderRef} {...settings} className="h-full">
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
                <div className="absolute bottom-10 left-0 w-full z-30 px-10">
                    <div className="flex w-full gap-2 h-1.5 cursor-pointer">
                        {videoContent.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => sliderRef.current.slickGoTo(i)}
                                className="flex-1 bg-white/30 rounded-full overflow-hidden relative group"
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