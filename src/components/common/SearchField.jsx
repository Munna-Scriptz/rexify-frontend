import { Search } from "lucide-react";

const topSearches = [
    "Power Bank",
    "Charger",
    "USB-C Hub",
    "UGREEN Flash Sale",
    "Ugreen Network Attached Storage",
    "What is NAS",
];

const suggestedProducts = [
    {
        title: "UGREEN 145W 25000mAh 3-Port Power Bank",
        img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/xiaomi/watch-s3/xiaomi-watch-s3-228x228.webp",
    },
    {
        title: "Apple Watch Series 9",
        img: "https://www.startech.com.bd/image/cache/catalog/watch/apple/watch-series-9/watch-series-9-midnight-01-228x228.webp",
    },
    {
        title: "Nothing Ear (2)",
        img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/xiaomi/watch-s3/xiaomi-watch-s3-228x228.webp",
    },
    {
        title: "Samsung Galaxy Watch 6",
        img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/samsung/galaxy-watch-7-40mm/galaxy-watch-7-40mm-228x228.webp",
    },
    {
        title: "Logitech MX Master 3S",
        img: "https://www.startech.com.bd/image/cache/catalog/mouse/logitech/mx-master-3s/logitech-mx-master-3s-01-228x228.jpg",
    },
    {
        title: "Sony WH-1000XM5",
        img: "https://www.startech.com.bd/image/cache/catalog/headphone/sony/wh-1000xm5/wh-1000xm5-offical-228x228.webp",
    },
];

const SearchField = ({ close }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/80 z-30 backdrop-blur-sm"
                onClick={() => close(false)}
            />

            <div className="w-full bg-white border border-gray-200 rounded-b-xl p-6 shadow-sm relative z-30 fade-reveal">
                {/* Search Input */}
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-1 focus:ring-coil/60 focus:border-coil
                     text-sm text-text-primary"
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-12 gap-8 mt-6">
                    {/* Left – Top Searches */}
                    <div className="col-span-12 md:col-span-3">
                        <h3 className="text-sm font-semibold text-text-primary mb-3">
                            Top Searches
                        </h3>

                        <div className="space-y-2">
                            {topSearches.map((item, index) => (
                                <button
                                    key={index}
                                    className="block text-left w-full text-sm cursor-pointer text-gray-600 hover:text-accent transition"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right – Suggested Products */}
                    <div className="col-span-12 md:col-span-9">
                        <h3 className="text-sm font-semibold text-text-primary mb-4">
                            Suggested Products
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {suggestedProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-3 group rounded-lg cursor-pointer transition"
                                >
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-14 h-14 object-contain"
                                    />
                                    <p className="text-sm font-medium text-text-primary group-hover:text-accent duration-300 leading-snug">
                                        {product.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchField;