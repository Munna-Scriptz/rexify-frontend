import React from 'react';

const Banner = () => {
    return (
        <section className='h-screen'>
            <div id="Banner-Row" className='w-full object-cover absolute top-0 left-0 '>
                <div>
                    {/* ----------------- Text  */}
                    <div className='absolute top-35 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center'>
                        <h1 className='text-5xl text-white font-semibold text-center mb-3'>NASync DH2300</h1>
                        <p className='text-center text-lg mb-3'>Smart Storage Made Simple</p>
                        <button className='uppercase Banner-Hover'>Learn more</button>
                    </div>
                    {/* ----------------- Video  */}
                    <video
                        className="w-full object-contain"
                        src="https://www.ugreen.com/cdn/shop/videos/c/vp/165681dd494845aa97d6cdc2e8b7118c/165681dd494845aa97d6cdc2e8b7118c.HD-1080p-7.2Mbps-60442324.mp4"
                        poster="https://www.ugreen.com/cdn/shop/files/preview_images/165681dd494845aa97d6cdc2e8b7118c.thumbnail.0000000000.jpg?v=1761028855"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
