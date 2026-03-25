// Explore Section with local assets
import exploreBg from "./assets/about.jpg";

export default function Explore() {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${exploreBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Animated Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-orange-400 rounded-full text-sm font-semibold border border-white/20 mb-6">
                    Limited Time Offer
                </span>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Upgrade Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                        Tech Experience?
                    </span>
                </h2>

                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Discover cutting-edge electronics with exclusive deals. 
                    Free shipping on orders over $500!
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2">
                        Shop Now
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                        View Deals
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                    {[
                        { icon: "🚚", text: "Free Shipping" },
                        { icon: "🛡️", text: "Secure Payment" },
                        { icon: "🔄", text: "Easy Returns" },
                        { icon: "⭐", text: "Top Rated" },
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/70">
                            <span className="text-2xl">{badge.icon}</span>
                            <span className="text-sm font-medium">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}