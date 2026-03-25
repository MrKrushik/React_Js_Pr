export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Browse Products",
            desc: "Explore our collection of cutting-edge electronics from top brands worldwide.",
            color: "from-blue-400 to-purple-500"
        },
        {
            step: "02",
            title: "Add to Cart",
            desc: "Select your favorite tech items and add them to your cart with secure checkout.",
            color: "from-purple-400 to-pink-500"
        },
        {
            step: "03",
            title: "Fast Delivery",
            desc: "Receive your products at your doorstep with our express shipping service.",
            color: "from-green-400 to-cyan-500"
        },
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Easy Steps to Get Your Tech
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        TechNova makes buying electronics simple and effortless
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, i) => (
                        <div key={i} className="relative group">
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent z-0"></div>
                            )}

                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 group-hover:-translate-y-2 z-10">
                                {/* Step Number */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.step}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Arrow */}
                                <div className="mt-6 flex items-center text-blue-400 font-semibold group-hover:gap-3 transition-all">
                                    <span>Learn More</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 mx-auto">
                        Start Shopping Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}