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
    img: "/images/powerbank.png",
  },
  {
    title: "UGREEN MagFlow Magnetic Power Bank 10000mAh 25W",
    img: "/images/magflow.png",
  },
  {
    title: "UGREEN Nexode 500W 6-Port Charger",
    img: "/images/charger.png",
  },
  {
    title: "UGREEN 9-in-1 Steam Deck Docking Station",
    img: "/images/dock.png",
  },
  {
    title: "UGREEN NASync DH2300",
    img: "/images/nas1.png",
  },
  {
    title: "UGREEN NASync DXP4800 Plus",
    img: "/images/nas2.png",
  },
];

const SearchField = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

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
                     focus:outline-none focus:ring-2 focus:ring-coil focus:border-coil
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
                className="block text-left w-full text-sm text-gray-600
                           hover:text-coil transition"
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
                className="flex items-center gap-4 p-3 rounded-lg
                           hover:bg-gray-50 cursor-pointer transition"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-sm font-medium text-text-primary leading-snug">
                  {product.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchField;