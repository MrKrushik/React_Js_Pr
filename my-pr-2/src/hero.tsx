// Hero Section with local assets
import heroBg from "./assets/businness.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-blue-500/30 shadow-2xl">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium tracking-wider">NEW TECH ARRIVALS 2025</span>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
                Future Tech{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Today
                </span>
              </h1>
              <div className="flex gap-4">
                <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <p className="text-2xl text-white/80 max-w-2xl leading-relaxed">
                Discover the latest smartphones, laptops, and gadgets. 
                Premium electronics with unbeatable prices and lightning-fast delivery.
              </p>
              <p className="text-lg text-white/60 max-w-xl">
                Experience tomorrow's technology today with our curated collection of cutting-edge electronics.
              </p>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-6">
              <a 
                href="#products" 
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Shop Now
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="#about" 
                className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 text-lg"
              >
                <span className="flex items-center gap-3">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="flex gap-12 pt-10 border-t border-white/10">
              {[
                { value: "50K+", label: "Products", color: "from-blue-400 to-cyan-400" },
                { value: "99%", label: "Happy Customers", color: "from-purple-400 to-pink-400" },
                { value: "24h", label: "Delivery", color: "from-orange-400 to-red-400" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Side - Floating Cards */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Card 1 - iPhone */}
            <div className="absolute top-10 right-10 w-72 bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl animate-float hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" alt="Phone" className="w-full h-44 object-cover rounded-2xl mb-4" />
              <div className="text-white font-bold text-lg mb-2">iPhone 15 Pro Max</div>
              <div className="text-blue-400 font-bold text-2xl">$1,199</div>
              <div className="text-gray-400 text-sm line-through">$1,299</div>
            </div>
            
            {/* Card 2 - Headphones */}
            <div className="absolute top-40 left-10 w-72 bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl animate-float-delay-1000 hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" alt="Headphones" className="w-full h-44 object-cover rounded-2xl mb-4" />
              <div className="text-white font-bold text-lg mb-2">Sony WH-1000XM5</div>
              <div className="text-purple-400 font-bold text-2xl">$399</div>
              <div className="text-gray-400 text-sm line-through">$499</div>
            </div>
            
            {/* Card 3 - Laptop */}
            <div className="absolute bottom-10 right-20 w-72 bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl animate-float-delay-2000 hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300" alt="Laptop" className="w-full h-44 object-cover rounded-2xl mb-4" />
              <div className="text-white font-bold text-lg mb-2">MacBook Pro M3</div>
              <div className="text-pink-400 font-bold text-2xl">$1,999</div>
              <div className="text-gray-400 text-sm line-through">$2,199</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}