import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaStethoscope } from "react-icons/fa";
import { fetchCart } from "../Services/ProductService";

interface NavItem {
    path: string;
    label: string;
}

const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState<number>(0);
    const [scrolled, setScrolled] = useState<boolean>(false);

    // Update scroll state for background transitions
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        
        const loadCart = () => fetchCart().then((items) => 
            setCartCount(items.reduce((s, i) => s + i.quantity, 0))
        );
        
        loadCart();
        window.addEventListener("focus", loadCart);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("focus", loadCart);
        };
    }, []);

    const navLinks: NavItem[] = [
        { path: "/", label: "Home" },
         { path: "/addProduct", label: "AddMedi" },
        { path: "/product", label: "Medicines" },
        { path: "/cart", label: "Cart" }
    ];

    return (
        <div className="font-sans antialiased">
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? "pt-2" : "pt-6"}`}>
                <nav className={`w-full max-w-6xl mx-4 transition-all duration-500 border flex items-center justify-between px-6 py-3 ${
                    scrolled 
                    ? "bg-white/90 backdrop-blur-md border-slate-200/60 shadow-lg rounded-2xl" 
                    : "bg-white/60 backdrop-blur-sm border-white/40 shadow-sm rounded-[2rem]"
                }`}>

                    {/* Logo Section */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-teal-500 p-2 rounded-xl text-white shadow-teal-200 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <FaStethoscope className="text-lg" />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                            MED<span className="text-teal-600">CARE</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center bg-slate-100/50 p-1 rounded-full border border-slate-200/40">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-6 py-2 text-sm font-bold rounded-full transition-all duration-400 ${
                                        isActive
                                        ? "bg-white text-teal-600 shadow-md scale-100"
                                        : "text-slate-500 hover:text-slate-800"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions Section */}
                    <div className="flex items-center gap-2">
                        <NavLink to="/cart" className="relative p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all active:scale-90">
                            <FaShoppingCart className="text-lg" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 animate-in zoom-in duration-300">
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </NavLink>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                        >
                            {isOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8h16M4 16h16"/></svg>
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-out p-6 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-100">
                        <div className="bg-teal-500 p-2 rounded-lg text-white">
                            <FaStethoscope />
                        </div>
                        <span className="font-bold text-slate-800 tracking-tight">MEDCARE Menu</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                                        isActive
                                        ? "bg-teal-50 text-teal-700 border-l-4 border-teal-500"
                                        : "text-slate-600 hover:bg-slate-50"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="mt-auto p-4 bg-slate-50 rounded-2xl text-center">
                        <p className="text-xs text-slate-400 font-medium">© 2026 MedCare Quality Health</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;