import { useState } from "react";

// Local assets images
import iphoneImage from "./assets/mobile1.jpg";
import laptopImage from "./assets/leptop.jpg";
import headphonesImage from "./assets/hadephone.jpg";

export default function Featured() {
    const [hovered, setHovered] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            image: iphoneImage,
            tags: ["5G", "256GB", "A17 Pro"],
            name: "iPhone 15 Pro Max",
            desc: "Latest Apple Smartphone",
            price: "$1,199",
            originalPrice: "$1,299",
            badge: "Best Seller"
        },
        {
            id: 2,
            image: laptopImage,
            tags: ["M3 Chip", "14\"", "18h Battery"],
            name: "MacBook Pro M3",
            desc: "Professional Laptop",
            price: "$1,999",
            originalPrice: "$2,199",
            badge: "New"
        },
        {
            id: 3,
            image: headphonesImage,
            tags: ["Noise Cancelling", "30h Battery", "Hi-Res"],
            name: "Sony WH-1000XM5",
            desc: "Premium Headphones",
            price: "$399",
            originalPrice: "$499",
            badge: "Sale"
        }
    ];

    return (
        <section id="products" className="py-28 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md text-gray-300 rounded-full text-sm font-medium border border-white/10 mb-6 tracking-wide">
                        ✨ Premium Collection
                    </span>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Featured Products
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Explore cutting-edge gadgets crafted for performance and style
                    </p>
                </div>

                {/* Products */}
                <div className="grid md:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition-all duration-500"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >

                            {/* Badge */}
                            <div className="absolute top-5 left-5 z-20">
                                <span className={`px-4 py-1 text-xs font-semibold rounded-full backdrop-blur-md ${
                                    product.badge === "Sale" ? "bg-red-500/80 text-white" :
                                    product.badge === "New" ? "bg-blue-500/80 text-white" :
                                    "bg-purple-500/80 text-white"
                                }`}>
                                    {product.badge}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-full object-cover transition duration-700 ${
                                        hovered === index ? "scale-110 rotate-1" : "scale-100"
                                    }`}
                                />

                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-6 transition ${
                                    hovered === index ? "opacity-100" : "opacity-0"
                                }`}>
                                    <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7">

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition">
                                    {product.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-5">
                                    {product.desc}
                                </p>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <span className="text-2xl font-bold text-white">
                                            {product.price}
                                        </span>
                                        <span className="ml-2 text-gray-500 line-through text-sm">
                                            {product.originalPrice}
                                        </span>
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="w-full py-3 rounded-xl bg-white/10 border border-white/10 text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition flex items-center justify-center gap-2">
                                    🛒 Add to Cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition shadow-lg">
                        Explore All Products →
                    </button>
                </div>

            </div>
        </section>
    );
}