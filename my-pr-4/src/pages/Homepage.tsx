import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
    FaHeartbeat, FaShippingFast, FaUserShield, FaPrescriptionBottleAlt,  
    FaArrowRight, FaShoppingBasket, FaQuestionCircle, FaQuoteLeft, FaPhoneAlt, 
    FaEnvelope, FaChevronDown, FaPlus,
    FaStethoscope,
    FaCheckCircle,
    FaShieldVirus,
    FaUserMd
} from "react-icons/fa";
import medicineImg from "../assets/image2.png"; 

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState(-1);
    
    const featuredMedicines = [
        { id: "M101", name: 'Paracetamol 500mg', price: '25', cat: 'Pain Relief', img: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg' },
        { id: "M104", name: 'Amoxicillin', price: '120', cat: 'Antibiotics', img: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg' },
        { id: "M111", name: 'Vitamin D3', price: '220', cat: 'Supplements', img: 'https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg' },
        { id: "M121", name: 'Cetirizine', price: '45', cat: 'Allergy', img: 'https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg' }
    ];

    return (
        <div className="medical-gradient min-h-screen font-sans-medical selection:bg-teal-100">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif&display=swap');
                    * { box-sizing: border-box; scroll-behavior: smooth; }
                    .font-serif-medical { font-family: 'Instrument Serif', serif; }
                    .font-sans-medical { font-family: 'Plus Jakarta Sans', sans-serif; }
                    .medical-gradient { background: #f8fafc; }
                    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
                    .animate-float { animation: float 5s ease-in-out infinite; }
                    .glass-panel { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); border: 1px solid white; box-shadow: 0 20px 50px rgba(15, 23, 42, 0.05); }
                `}
            </style>

            {/* --- 1. HERO SECTION --- */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase">
                            <FaStethoscope className="animate-bounce" /> Verified Pharmaceutical Supply
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-serif-medical text-slate-900 leading-none">
                            Pure Care <br /> <span className="text-teal-600 italic">For Humanity.</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-lg leading-relaxed">WHO-GMP approved medicines with 100% safety protocols. Your recovery is our mission.</p>
                        <div className="flex gap-4">
                            <NavLink to="/product" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all flex items-center gap-2 shadow-xl shadow-teal-100">Shop Now <FaPrescriptionBottleAlt /></NavLink>
                            <NavLink to="/addProduct" className="px-8 py-4 rounded-2xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all flex items-center gap-2"><FaPlus /> Add Entry</NavLink>
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end animate-float">
                        <img 
    src={medicineImg} 
    alt="Medicine" 
    className="w-full h-auto drop-shadow-2xl object-contain"
    onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.pexels.com/photos/5390584/pexels-photo-5390584.jpeg';
    }}
/>
                    </div>
                </div>
            </section>

            {/* --- 2. FEATURES SECTION --- */}
                <section className="py-24 bg-white relative overflow-hidden">
            {/* Side Decorative Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-50 rounded-full blur-[120px] opacity-60 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* --- Feature Card 01: Quality Control --- */}
                    <div className="group relative p-10 rounded-[3rem] bg-[#fdfdfd] border border-slate-100 medical-card overflow-hidden hover:bg-white">
                        {/* Background Watermark Number */}
                        <span className="absolute -top-4 -right-2 text-[120px] font-black text-slate-900/[0.03] select-none group-hover:text-teal-500/5 transition-colors duration-500">01</span>
                        
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-[1.5rem] flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white group-hover:rotate-[10deg] shadow-sm">
                                <FaUserShield />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Quality Control</h4>
                                <div className="w-8 h-1 bg-teal-500 mt-2 mb-4 rounded-full transition-all duration-500 group-hover:w-16" />
                                <p className="text-slate-500 leading-relaxed">
                                    Rigorous <span className="text-slate-900 font-semibold">3-step verification</span> protocols for every pharmaceutical batch to ensure zero-defect safety.
                                </p>
                            </div>
                            <div className="pt-2 flex items-center gap-2 text-teal-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                WHO-GMP Certified <FaCheckCircle />
                            </div>
                        </div>
                    </div>

                    {/* --- Feature Card 02: Express Delivery --- */}
                    <div className="group relative p-10 rounded-[3rem] bg-[#fdfdfd] border border-slate-100 medical-card overflow-hidden hover:bg-white">
                        <span className="absolute -top-4 -right-2 text-[120px] font-black text-slate-900/[0.03] select-none group-hover:text-blue-500/5 transition-colors duration-500">02</span>
                        
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-[10deg] shadow-sm">
                                <FaShippingFast />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Express Delivery</h4>
                                <div className="w-8 h-1 bg-blue-500 mt-2 mb-4 rounded-full transition-all duration-500 group-hover:w-16" />
                                <p className="text-slate-500 leading-relaxed">
                                    Emergency medical supplies dispatched within <span className="text-slate-900 font-semibold">2 hours</span> and delivered city-wide in 24 hours.
                                </p>
                            </div>
                            <div className="pt-2 flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                Real-time Tracking <FaCheckCircle />
                            </div>
                        </div>
                    </div>

                    {/* --- Feature Card 03: Patient First --- */}
                    <div className="group relative p-10 rounded-[3rem] bg-[#fdfdfd] border border-slate-100 medical-card overflow-hidden hover:bg-white">
                        <span className="absolute -top-4 -right-2 text-[120px] font-black text-slate-900/[0.03] select-none group-hover:text-rose-500/5 transition-colors duration-500">03</span>
                        
                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-[1.5rem] flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white group-hover:rotate-[10deg] shadow-sm">
                                <FaHeartbeat />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Patient First</h4>
                                <div className="w-8 h-1 bg-rose-500 mt-2 mb-4 rounded-full transition-all duration-500 group-hover:w-16" />
                                <p className="text-slate-500 leading-relaxed">
                                    Medicines are preserved in <span className="text-slate-900 font-semibold">Cold-Chain storage</span> units to maintain 100% biological efficacy.
                                </p>
                            </div>
                            <div className="pt-2 flex items-center gap-2 text-rose-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                24/7 Support <FaCheckCircle />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

            {/* --- 3. INFORMATIONAL GUIDE --- */}
            <section id="info" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white rounded-[3rem] p-10 lg:p-20 border border-slate-100">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-serif-medical text-slate-900">How to choose <br/><span className="text-teal-600">Right Medicine?</span></h2>
                        <p className="text-slate-500 leading-relaxed text-lg">Safety is our priority. Before taking any medication, always consider pharmaceutical health standards.</p>
                        <div className="space-y-4 pt-4">
                            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-teal-600">
                                <h4 className="font-bold text-slate-800">Check Expiry & Batch</h4>
                                <p className="text-sm text-slate-500">Always verify the manufacturing date and seal.</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-teal-600">
                                <h4 className="font-bold text-slate-800">MD Consultation</h4>
                                <p className="text-sm text-slate-500">Consult a doctor for appropriate dosage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-teal-600 text-white p-10 rounded-[2.5rem] text-center"><h3 className="text-4xl font-bold">100%</h3><p className="text-xs uppercase mt-2">Original</p></div>
                        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] text-center"><h3 className="text-4xl font-bold">24h</h3><p className="text-xs uppercase mt-2">Dispatch</p></div>
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] md:col-span-2 text-center text-slate-500 italic">"Medicine is a commitment to human life."</div>
                    </div>
                </div>
            </section>

            {/* --- 4. FEATURED PRODUCTS GRID --- */}
           <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
    {/* Background Decorative Blur */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#0d94880a_0%,_transparent_70%)] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with high-end typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-100/50 text-teal-700 text-[10px] font-black tracking-[0.2em] uppercase">
                    Our Curated Selection
                </div>
                <h2 className="text-5xl lg:text-7xl font-serif-medical text-slate-900 leading-tight">
                    Top <span className="text-teal-600 italic">Medications</span>
                </h2>
                <p className="text-slate-400 max-w-md font-sans-medical text-sm">
                    Hand-picked pharmaceutical essentials verified for purity and clinical effectiveness.
                </p>
            </div>
            
            <NavLink 
                to="/product" 
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
                <span className="text-sm uppercase tracking-widest">Full Inventory</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 text-teal-500" />
            </NavLink>
        </div>

        {/* Baap Level Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMedicines.map((p) => (
                <div 
                    key={p.id} 
                    className="medical-card group bg-white rounded-[3rem] p-4 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(13,148,136,0.12)] transition-all duration-500 flex flex-col"
                >
                    {/* Image Container with Custom Badge */}
                    <div className="relative h-64 bg-slate-50 rounded-[2.5rem] mb-6 overflow-hidden flex items-center justify-center p-6 transition-colors duration-500 group-hover:bg-teal-50/50">
                        <img 
                            src={p.img} 
                            alt={p.name} 
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" 
                        />
                        
                        {/* Category Floating Glass Badge */}
                        <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 shadow-sm">
                            <p className="text-[9px] font-black text-teal-600 uppercase tracking-widest">{p.cat}</p>
                        </div>

                        {/* Quick Action Overlay (Hidden till hover) */}
                        <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <button 
                                onClick={() => (`/product-detail/${p.id}`)}
                                className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold text-xs shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            >
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-3 pb-4 space-y-4 flex-1 flex flex-col">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-teal-600 transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Verified Pharma Grade</p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Price</span>
                                <span className="text-2xl font-black text-slate-900 tracking-tighter">
                                    ₹{p.price}
                                </span>
                            </div>
                            
                            <button 
                                className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-slate-900 hover:scale-110 active:scale-95 shadow-[0_10px_20px_rgba(13,148,136,0.2)]"
                                title="Add to Cart"
                            >
                                <FaShoppingBasket className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
            </section>

            {/* --- 5. DEMO GALLERY SECTION --- */}
           <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
        {/* Header Section with Badge */}
        <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-black tracking-[0.2em] uppercase mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
                Live Facility Tour
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif-medical text-slate-900">
                Clinical <span className="text-teal-600 italic">Showcase</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-sans-medical">
                Experience the precision of our high-tech pharmaceutical infrastructure. Where 
                <span className="text-slate-900 font-bold"> technology meets humanity</span> to preserve life-saving efficacy.
            </p>
        </div>

        {/* Baap Level Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
            
            {/* Big Main Card */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
                <img 
                    src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Lab" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <p className="text-teal-400 font-black text-xs uppercase tracking-widest mb-2">Sterile Environment</p>
                    <h4 className="text-white text-3xl font-serif-medical italic">Advanced R&D Facility</h4>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase">
                    Zone 01: Research
                </div>
            </div>

            {/* Top Right Card */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-slate-100">
                <img 
                    src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Storage" 
                />
                <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20">
                        <FaStethoscope className="text-white text-2xl" />
                    </div>
                </div>
            </div>

            {/* Bottom Middle Card */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-slate-100">
                <img 
                    src="https://images.pexels.com/photos/5910965/pexels-photo-5910965.jpeg" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Process" 
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-3 rounded-2xl border border-slate-100 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                    <p className="text-slate-900 font-bold text-xs uppercase tracking-tighter">Automated Sorting</p>
                </div>
            </div>

            {/* Bottom Last Card */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-slate-100 bg-teal-600 flex items-center justify-center">
                <img 
                    src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-700" 
                    alt="Delivery" 
                />
                <div className="relative text-center p-6">
                    <p className="text-white font-black text-4xl font-serif-medical italic group-hover:scale-110 transition-transform">24/7</p>
                    <p className="text-teal-100 text-[10px] font-bold uppercase mt-1">Monitoring</p>
                </div>
            </div>

        </div>
    </div>
              </section>

            {/* --- 6. OWNER / FOUNDER SECTION --- */}
                 <section className="py-32 relative overflow-hidden bg-white">
                    {/* Background Abstract Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            
                            {/* Left: Baap Level Image Frame */}
                            <div className="lg:w-5/12 relative group">
                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-50 rounded-full -z-10 animate-pulse" />
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-[4rem] -z-10 transition-transform group-hover:rotate-12 duration-1000" />
                                
                                {/* Main Image with Mask */}
                                <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] border-[12px] border-white">
                                    <img 
                                        src="https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg" 
                                        className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        alt="Dr. Krushik Rakholiya" 
                                    />
                                    {/* Floating Excellence Badge */}
                                    <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-teal-100 animate-bounce-slow">
                                        <p className="text-teal-600 font-black text-2xl tracking-tighter">10+</p>
                                        <p className="text-slate-400 text-[9px] font-bold uppercase leading-none">Years of <br/> Clinical Excellence</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content Section */}
                            <div className="lg:w-7/12 space-y-10">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                                        Founder's Vision
                                    </div>
                                    <h2 className="text-6xl lg:text-7xl font-serif-medical text-slate-900 leading-tight">
                                        Leadership with <br/>
                                        <span className="text-teal-600 italic">Integrity & Purpose.</span>
                                    </h2>
                                </div>

                                <div className="relative">
                                    <FaQuoteLeft className="text-7xl text-teal-500/10 absolute -top-8 -left-8" />
                                    <p className="text-2xl font-serif-medical text-slate-700 leading-relaxed italic relative z-10">
                                        "At MedCare, we don't just distribute medicine. We deliver hope and security to every household. Every dose that leaves our facility carries my personal commitment to your recovery and well-being."
                                    </p>
                                </div>

                                <div className="flex items-center gap-8 pt-4">
                                    <div className="space-y-1">
                                        <h4 className="text-3xl font-bold text-slate-900 tracking-tight">Dr. Yash Khunt</h4>
                                        <p className="text-teal-600 font-bold uppercase tracking-widest text-xs">Chief Pharmaceutical Officer & Founder</p>
                                    </div>
                                    {/* Digital Signature Feel */}
                                    <div className="hidden sm:block border-l border-slate-200 pl-8">
                                        <p className="font-serif-medical text-4xl text-slate-300 -rotate-3 select-none">Yash.K</p>
                                    </div>
                                </div>

                                {/* Achievements Row */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                                    {[
                                        { label: "Approved by", val: "WHO-GMP" },
                                        { label: "Daily Dispatch", val: "5000+ Units" },
                                        { label: "Global Reach", val: "12+ Regions" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                                            <p className="text-lg font-bold text-slate-800">{stat.val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{`
                        @keyframes bounce-slow {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
                    `}</style>
                </section>

            {/* --- 7. FAQ SECTION --- */}
           <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-20 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white text-[10px] font-black tracking-[0.3em] uppercase mx-auto">
                    <FaQuestionCircle className="text-teal-400 animate-pulse" />
                    Help Center
                </div>
                <h2 className="text-5xl lg:text-7xl font-serif-medical text-slate-900">
                    Patient <span className="text-teal-600 italic">Support</span>
                </h2>
                <p className="text-slate-400 max-w-lg mx-auto text-sm">
                    Everything you need to know about our pharmaceutical services and safety protocols.
                </p>
            </div>

            {/* Baap Level Accordion List */}
            <div className="space-y-4">
                {[
                    { 
                        q: "How to verify medicine authenticity?", 
                        a: "Every medicine box contains a secure QR code. Scan it to instantly access the WHO-GMP certification, batch laboratory reports, and original manufacturing details on our global portal.",
                        icon: <FaShieldVirus className="text-teal-500" />
                    },
                    { 
                        q: "Do you offer emergency delivery?", 
                        a: "Yes. For life-critical medications, we operate a 2-hour 'Rapid Response' dispatch. Our dedicated clinical logistics team ensures the medicine reaches you with cold-chain integrity maintained.",
                        icon: <FaShippingFast className="text-blue-500" />
                    },
                    { 
                        q: "What is your refund policy?", 
                        a: "We accept returns within 7 business days. The thermal safety seal must be intact to ensure the medication hasn't been compromised by external environmental factors.",
                        icon: <FaPrescriptionBottleAlt className="text-rose-500" />
                    }
                ].map((item, i) => (
                    <div 
                        key={i} 
                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        className={`group rounded-[2.5rem] transition-all duration-500 border ${
                            openFaq === i 
                            ? "bg-white border-teal-500 shadow-[0_20px_60px_-15px_rgba(13,148,136,0.15)]" 
                            : "bg-slate-50 border-transparent hover:border-slate-200"
                        } cursor-pointer overflow-hidden`}
                    >
                        <div className="p-8 flex items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                {/* Number / Icon Circle */}
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg transition-all duration-500 ${
                                    openFaq === i ? "bg-teal-600 text-white rotate-[360deg]" : "bg-white text-slate-400 shadow-sm"
                                }`}>
                                    {openFaq === i ? item.icon : <span className="font-bold text-xs">{i + 1}</span>}
                                </div>
                                <h4 className={`text-xl font-bold transition-colors duration-300 ${
                                    openFaq === i ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                                }`}>
                                    {item.q}
                                </h4>
                            </div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                                openFaq === i ? "rotate-180 border-teal-500 text-teal-600 bg-teal-50" : "border-slate-200 text-slate-300"
                            }`}>
                                <FaChevronDown className="text-xs" />
                            </div>
                        </div>

                        {/* Animated Answer Section */}
                        <div className={`grid transition-all duration-500 ease-in-out ${
                            openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}>
                            <div className="overflow-hidden">
                                <div className="px-8 pb-8 ml-18 text-slate-500 leading-relaxed max-w-2xl">
                                    <div className="h-px w-full bg-slate-100 mb-6" />
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Support CTA */}
            <div className="mt-16 p-8 rounded-[3rem] bg-teal-50/50 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <FaUserMd className="text-teal-600" />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="font-bold text-slate-900 text-sm">Still have questions?</p>
                        <p className="text-xs text-slate-500">Our pharmacists are available 24/7 for you.</p>
                    </div>
                </div>
                <button className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold text-xs hover:bg-slate-900 transition-all shadow-lg shadow-teal-600/20">
                    Contact Specialist
                </button>
            </div>
        </div>
             </section>

            {/* --- 8. CONTACT SECTION --- */}
            <section className="py-32 bg-white relative overflow-hidden">
                    {/* Background Glow Decorations */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/30 rounded-full blur-[120px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px] -z-10" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            
                            {/* --- Left Side: Branding & Direct Contact --- */}
                            <div className="space-y-12 stagger-item">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black tracking-[0.3em] uppercase border border-teal-100">
                                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                        Experts Online Now
                                    </div>
                                    <h2 className="text-6xl lg:text-7xl font-serif-medical text-slate-900 leading-[1.1]">
                                        Connect with <br/>
                                        <span className="text-teal-600 italic">Our Specialists</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                        Have a complex prescription? Our clinical experts are available for a 
                                        <span className="text-slate-900 font-bold"> free pharmaceutical consultation.</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="group p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-teal-500/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                                            <FaPhoneAlt />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-6 mb-1">24/7 Helpline</p>
                                        <p className="text-lg font-bold text-slate-800">+91 98765 43210</p>
                                    </div>

                                    <div className="group p-8 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-500/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                            <FaEnvelope />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-6 mb-1">Clinical Email</p>
                                        <p className="text-lg font-bold text-slate-800">care@medcare.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-6 rounded-3xl bg-teal-50/50 border border-teal-100/50 max-w-sm">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="doc" />
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-600 font-medium">
                                        <span className="text-teal-700 font-bold">12 Pharmacists</span> are currently active to assist you.
                                    </p>
                                </div>
                            </div>

                            {/* --- Right Side: Baap Level Form --- */}
                            <div className="relative group">
                                {/* Outer Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-blue-100 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="relative bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100">
                                    <div className="mb-10">
                                        <h3 className="text-3xl font-serif-medical text-slate-900">Direct Message</h3>
                                        <p className="text-slate-400 text-sm mt-2">Response time: &lt; 15 minutes</p>
                                    </div>

                                    <form className="space-y-6">
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="Patient Name" 
                                                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-transparent outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all duration-300 font-bold text-slate-800 placeholder:font-medium placeholder:text-slate-400" 
                                            />
                                        </div>
                                        <div className="relative">
                                            <input 
                                                type="email" 
                                                placeholder="Email Address" 
                                                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-transparent outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all duration-300 font-bold text-slate-800 placeholder:font-medium placeholder:text-slate-400" 
                                            />
                                        </div>
                                        <div className="relative">
                                            <textarea 
                                                placeholder="How can we assist with your health today?" 
                                                rows={4} 
                                                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-transparent outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all duration-300 font-bold text-slate-800 placeholder:font-medium placeholder:text-slate-400 resize-none"
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="button" 
                                            className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest hover:bg-teal-600 transition-all duration-500 shadow-[0_20px_40px_rgba(15,23,42,0.2)] active:scale-95 flex items-center justify-center gap-3"
                                        >
                                            Send Inquiry
                                            <FaArrowRight className="text-teal-400" />
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            {/* --- 9. FOOTER --- */}
            <footer className="bg-slate-900 pt-20 pb-10 px-6 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
                        <div className="col-span-1 md:col-span-1 space-y-6">
                            <div className="flex items-center gap-2"><div className="bg-teal-500 p-2 rounded-lg text-white"><FaStethoscope /></div><span className="text-2xl font-bold">MEDCARE</span></div>
                            <p className="text-slate-400 text-sm leading-relaxed">Providing high-end pharmaceutical care since 2010. Your health is our only priority.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><NavLink to="/" className="hover:text-teal-400 transition-all">Home</NavLink></li>
                                <li><NavLink to="/product" className="hover:text-teal-400 transition-all">Inventory</NavLink></li>
                                <li><NavLink to="/addProduct" className="hover:text-teal-400 transition-all">Add Medicine</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Policies</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li className="hover:text-teal-400 cursor-pointer transition-all">Privacy Policy</li>
                                <li className="hover:text-teal-400 cursor-pointer transition-all">Refund Terms</li>
                                <li className="hover:text-teal-400 cursor-pointer transition-all">Shipping Info</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Newsletter</h4>
                            <p className="text-slate-400 text-xs mb-4">Get health tips and stock alerts.</p>
                            <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10">
                                <input type="text" className="bg-transparent border-none outline-none text-sm p-2 flex-1" placeholder="Email" />
                                <button className="bg-teal-500 text-slate-900 p-3 rounded-xl"><FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-slate-500 text-[10px] uppercase tracking-[0.5em]">© 2026 MedCare Quality Pharmaceutical Systems</p>
                </div>
            </footer>
        </div>
    );
}