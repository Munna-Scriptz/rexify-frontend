import { ShoppingBag, Heart } from "lucide-react";

const SingleSellerCard = () => {
    return (
        <div className="w-77.5 rounded-2xl border border-border overflow-hidden group relative">

            {/* Image Section */}
            <div className="relative bg-neutral-50 h-65 flex items-center justify-center">
                <img
                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/44-nc-aluminum-midnight-sport-band-midnight-se?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NEwvaFVLSWFPRUFyK21Oc3dDdW5ZMWpWNFBIbi9VdWR4ZFZlQVVva0ZudWVTTHA0NUMxUkQ1ZFNyWm1hVEtBOUZUVzMxa2MxY3h4S1ZpaEFMMFFjMXI2TGhYaGhMVkJpQ2RGWWVURTZNbXhIS0dxdnFEMnJIUGtadXUrWnNyUVo"
                    alt="Xiaomi Redmi Watch 4"
                    className="h-50 object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating badge */}
                <span className="absolute top-4 left-4 text-[11px] tracking-wide uppercase px-3 py-1 rounded-full border border-neutral-300 text-text-secondary bg-white">
                    New
                </span>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {/* Add to Cart */}
                    <button
                        className="h-11 w-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-text-primary hover:border-neutral-900 hover:text-neutral-900 transition"
                        aria-label="Add to cart">
                        <ShoppingBag size={18} />
                    </button>

                    {/* Wishlist */}
                    <button className="h-11 w-11 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-text-primary hover:border-neutral-900 hover:text-neutral-900 transition"
                        aria-label="Add to wishlist" >
                        <Heart size={18} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-5 py-4">
                <h3 className="text-[15px] font-medium text-neutral-900 leading-snug">
                    Xiaomi Redmi Watch 4 <br />
                    <span className="text-neutral-500 font-normal">
                        Rein Milanese
                    </span>
                </h3>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-[17px] font-semibold text-neutral-900">
                        €99
                    </p>

                    <div className="flex items-center gap-1 text-[13px] text-neutral-600">
                        <span className="text-neutral-900">★</span>
                        4.23
                        <span className="text-neutral-400">(749)</span>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
    );
};

export default SingleSellerCard;
