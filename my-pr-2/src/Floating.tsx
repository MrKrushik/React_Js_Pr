import whyImg from "./assets/businness.jpg";

export default function Why() {
    const benefits = [
        { icon: "🏆", title: "Certified Products", desc: "Genuine products with official warranty" },
        { icon: "🎧", title: "Expert Support", desc: "24/7 technical assistance" },
        { icon: "🚚", title: "Fast Delivery", desc: "Free shipping on orders over $500" },
        { icon: "🛡️", title: "Warranty Included", desc: "1-year warranty on all products" },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-2 bg-white/10 text-orange-400 rounded-full text-sm font-semibold border border-white/20">
                            Why Choose TechNova
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Your Trusted{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                                Tech Partner
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-md">
                            We're committed to delivering the best technology experience with 
                            quality products and exceptional service.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2">
                            Contact Support
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Right - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={whyImg}
                                alt="Tech Support"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            {/* Floating Stats */}
                            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                                {[
                                    { value: "4.9", label: "Rating" },
                                    { value: "24/7", label: "Support" },
                                    { value: "100%", label: "Genuine" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                                        <div className="text-sm text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}