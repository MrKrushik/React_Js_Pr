import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Products', href: '#products' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            
            <div className="px-6">
                <div className="flex items-center justify-between h-16">

                    
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-3">

                          
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            
                            {/* Brand Name */}
                            <span className="text-white text-lg font-bold tracking-wider">
                                TinyFly 
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-3 bg-white/5 p-1 rounded-full">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-2 text-sm text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 mx-4 mb-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
                    <div className="px-4 py-4 space-y-3">

                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}

                        <button className="w-full mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}