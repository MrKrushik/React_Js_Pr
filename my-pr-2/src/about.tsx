// About Section with local assets
import aboutImg from "./assets/about.jpg";

export default function About() {
  const features = [
    { icon: "⚡", title: "Instant Delivery", desc: "2-hour delivery" },
    { icon: "🔒", title: "Secure Payments", desc: "256-bit SSL" },
    { icon: "🎯", title: "Genuine Products", desc: "100% authentic" },
    { icon: "🚀", title: "24/7 Support", desc: "Always available" },
  ];

  const stats = [
    { number: "2M+", label: "Active Users", icon: "👥" },
    { number: "500+", label: "Brand Partners", icon: "🤝" },
    { number: "50+", label: "Cities Covered", icon: "🌍" },
    { number: "99.9%", label: "Uptime", icon: "📈" },
  ];

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-300 text-sm font-semibold">WHO WE ARE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Tech Shopping
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            India's most trusted electronics marketplace. We bring you cutting-edge technology 
            with unbeatable prices and lightning-fast delivery.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={aboutImg}
                alt="Tech Store"
                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Since 2015
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500/30 rounded-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-purple-500/30 rounded-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Why Choose TechNova?</h3>
              <p className="text-gray-400 leading-relaxed">
                We're not just another electronics store. We're a technology partner committed to 
                bringing the latest innovations to your doorstep. With over 8 years of experience, 
                we've served millions of happy customers across India.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
              Explore Our Story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}