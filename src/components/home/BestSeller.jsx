import React, { useState } from 'react'
import SingleSellerCard from '../common/SingleSellerCard'
import Slider from 'react-slick';

const BestSeller = () => {

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ChevronRight />,
        prevArrow: <ChevronLeft />,
    };


    function ChevronRight({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 h-12 w-12 text-xl rounded-full bg-gray-400/20 text-text-primary cursor-pointer shadow-lg
                 flex items-center justify-center
                 hover:scale-105 transition"
            >
                ❮
            </button>
        );
    }


    const demoProducts = [
        {
            id: 1,
            title: "Xiaomi Redmi Watch 4",
            variant: "Rein Milanese",
            price: 99,
            rating: 4.23,
            reviews: 749,
            badge: "New",
            image: "/watch.png",
        },
        {
            id: 2,
            title: "Apple Watch Series 9",
            variant: "Sport Band",
            price: 429,
            rating: 4.78,
            reviews: 1284,
            badge: "Popular",
            image: "/apple-watch.png",
        },
        {
            id: 3,
            title: "Samsung Galaxy Watch 6",
            variant: "Bluetooth 44mm",
            price: 299,
            rating: 4.51,
            reviews: 962,
            badge: "Trending",
            image: "/galaxy-watch.png",
        },
        {
            id: 4,
            title: "Nothing Ear (2)",
            variant: "Wireless Earbuds",
            price: 149,
            rating: 4.36,
            reviews: 684,
            badge: "New",
            image: "/nothing-ear.png",
        },
        {
            id: 5,
            title: "Sony WH-1000XM5",
            variant: "Noise Cancelling",
            price: 399,
            rating: 4.82,
            reviews: 2147,
            badge: "Best Seller",
            image: "/sony-xm5.png",
        },
        {
            id: 6,
            title: "Logitech MX Master 3S",
            variant: "Wireless Mouse",
            price: 129,
            rating: 4.67,
            reviews: 1732,
            badge: "Top Rated",
            image: "/mx-master.png",
        },
    ];

    return (
        <>
            <section id='Best-Seller' className='mt-28'>
                <div className="container">
                    <div id="Header-Row" className='mb-10'>
                        <h2 className='text-4xl font-semibold text-text-primary'>Best Seller.</h2>
                    </div>

                    {/* ----------- Cards ----------- */}
                    <div id="content-Row">

                        <Slider {...settings}>
                            {
                                demoProducts.map((item, i) => (
                                    <div>
                                        <SingleSellerCard />
                                    </div>
                                ))
                            }
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller