import React from 'react';
import { ChevronRight } from 'lucide-react';

// 📸 REPLACE THESE URLS WITH YOUR ACTUAL TRANSPARENT PNG IMAGES
const products = [
  { name: "Mac", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202510?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4YkVwOVNLbHRldEZZYkpvZ0VDM1ZJYisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazlhTkRKemhDN0NEc1VzN1ZjMGR5dUk" },
  { name: "iPhone", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=1200&hei=780&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXM1doT212VzJoWjBSKzRpbmNETHN1QnRHU3BERzdnOWdiQkwvWTZGajY2b1M0TjRWdzF2UjRGVEY0c3dBQVZ6VFN0TmdKaCs3NTJMbFVuOGp2LzI5RGc" },
  { name: "iPad", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" },
  { name: "Apple Watch", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkeUdJZTE2SHMxcG9uUER3YTRFOUZ6ckh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2k5NGJENldmZ3lMeGxpSDNmeE9hd2s" },
  { name: "Apple Vision Pro", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM" },
  { name: "AirPods", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk" },
  { name: "AirTag", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFltc1ByWXViNGVYdEdGdkhJbjJoMGs" },
  { name: "Apple TV 4K", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" },
  { name: "HomePod", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" },
];

const SmallCategory = () => {
  return (
    <section className="bg-[#F5F5F7] min-h-[60vh] py-16 px-6 md:px-12 font-sans text-[#1D1D1F]">
        <div className="container">
            <div id='Small-Category-Row'>
                
                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
                
                {/* Left: Big Title */}
                <h1 className="text-6xl md:text-[80px] font-bold tracking-tight leading-none text-black">
                    Store.
                </h1>

                {/* Right: Subtext & Links */}
                <div className="md:text-right flex flex-col items-start md:items-end space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#1D1D1F] mb-2">
                    The best way to buy the <br className="hidden md:block"/>
                    products you love.
                    </h2>
                    
                </div>
                </div>

                {/* 2. Horizontal Scrollable List */}
                <div className="relative group">
                
                {/* Scroll Container */}
                <div className="flex gap-12 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth hide-scrollbar">
                    {products.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 flex flex-col items-center justify-end min-w-[130px] snap-start cursor-pointer group/item"
                    >
                        {/* Image Container */}
                        <div className="h-[70px] flex items-end mb-4 transition-transform duration-300 ease-out group-hover/item:-translate-y-2">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-auto max-h-full object-contain" 
                        />
                        </div>
                        
                        {/* Product Name */}
                        <span className="text-sm font-medium text-[#1D1D1F] hover:underline decoration-[#1D1D1F] underline-offset-2">
                        {item.name}
                        </span>
                    </div>
                    ))}
                    
                    {/* Spacer for right padding */}
                    <div className="w-12 flex-shrink-0" />
                </div>

                {/* Right Scroll Arrow (Floating) */}
                <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#E8E8ED] bg-opacity-80 hover:bg-[#d2d2d7] rounded-full items-center justify-center text-[#1D1D1F] transition-all backdrop-blur-md">
                    <ChevronRight size={20} strokeWidth={2.5} />
                </button>

                </div>

            </div>
        </div>
    </section>
  );
};

export default SmallCategory;