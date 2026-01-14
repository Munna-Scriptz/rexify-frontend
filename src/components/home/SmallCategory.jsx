import React from 'react';
import { ChevronRight } from 'lucide-react';

// 📸 REPLACE THESE URLS WITH YOUR ACTUAL TRANSPARENT PNG IMAGES
const products = [
  { name: "Mac", image: "https://placehold.co/200x150/transparent/png?text=Mac" },
  { name: "iPhone", image: "https://placehold.co/120x150/transparent/png?text=iPhone" },
  { name: "iPad", image: "https://placehold.co/140x150/transparent/png?text=iPad" },
  { name: "Apple Watch", image: "https://placehold.co/120x150/transparent/png?text=Watch" },
  { name: "Apple Vision Pro", image: "https://placehold.co/200x120/transparent/png?text=Vision+Pro" },
  { name: "AirPods", image: "https://placehold.co/140x120/transparent/png?text=AirPods" },
  { name: "AirTag", image: "https://placehold.co/100x100/transparent/png?text=AirTag" },
  { name: "Apple TV 4K", image: "https://placehold.co/140x140/transparent/png?text=Apple+TV" },
  { name: "HomePod", image: "https://placehold.co/120x150/transparent/png?text=HomePod" },
];

const SmallCategory = () => {
  return (
    <section className="bg-[#F5F5F7] min-h-[60vh] py-16 px-6 md:px-12 font-sans text-[#1D1D1F]">
      <div className="max-w-[1400px] mx-auto">
        
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
          {/* 'no-scrollbar' requires custom CSS or a Tailwind plugin. 
              Alternatively use 'overflow-x-scroll' and hide scrollbar via CSS */}
          <div className="flex gap-12 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth hide-scrollbar">
            {products.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex flex-col items-center justify-end min-w-[130px] snap-start cursor-pointer group/item"
              >
                {/* Image Container */}
                <div className="h-[140px] flex items-end mb-4 transition-transform duration-300 ease-out group-hover/item:-translate-y-2">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-auto max-h-full object-contain drop-shadow-xl" 
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
      
      {/* Custom CSS to hide scrollbar (Add this to your globals.css if needed) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SmallCategory;