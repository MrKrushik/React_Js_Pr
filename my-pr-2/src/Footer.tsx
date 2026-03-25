export default function Footer() {
    const footerLinks = {
        shop: [
            { name: "Smartphones", href: "#" },
            { name: "Laptops", href: "#" },
            { name: "Tablets", href: "#" },
            { name: "Accessories", href: "#" },
            { name: "Smart Home", href: "#" },
        ],
        support: [
            { name: "Help Center", href: "#" },
            { name: "Order Status", href: "#" },
            { name: "Returns & Warranty", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "FAQs", href: "#" },
        ],
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Partners", href: "#" },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-3xl">⚡</span>
                            <h2 className="text-2xl font-bold">TechNova</h2>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            Your trusted destination for premium electronics. 
                            Quality products, unbeatable prices, exceptional service.
                        </p>
                        
                        {/* Newsletter */}
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:border-orange-500 text-white"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-r-lg font-semibold hover:shadow-lg transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {["IG", "X", "FB", "YT"].map((social) => (
                                <a 
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-semibold mb-6 text-lg">Shop</h3>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold mb-6 text-lg">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2025 TechNova. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            All systems operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}