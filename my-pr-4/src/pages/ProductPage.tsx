import { useEffect, useState, useMemo } from "react";
import type { productFetchType } from "../utils/global";
import { fetchAllProducts, fetchCart, addToCart, updateCartItem } from "../Services/ProductService";
import { useNavigate } from "react-router";
import { FaPills, FaSearch, FaFilter, FaPlus, FaEye, FaShoppingCart, FaChevronLeft, FaChevronRight, FaLayerGroup } from "react-icons/fa";
import { toast } from "react-toastify";

const CATEGORIES = ["All", "Pain Relief", "Antibiotics", "Cardiovascular", "Diabetes", "Vitamins", "Minerals", "Supplements", "Allergy", "Respiratory", "Dermatology", "Mental Health", "Neurology", "Sleep Aid", "Diuretics", "Hormones", "Anticoagulants", "Steroids", "Oncology", "Rheumatology", "Gastrointestinal"];

export default function ViewProductPage() {
    const [allProducts, setAllProduct] = useState<productFetchType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllProducts().then(setAllProduct);
    }, []);

    // Add to Cart Logic for Grid
    const handleQuickAddToCart = async (product: productFetchType) => {
        const cartItems = await fetchCart();
        const existing = cartItems.find((i) => i.productId === product.id);
        let status: boolean;
        
        if (existing) {
            status = await updateCartItem({ ...existing, quantity: existing.quantity + 1 });
        } else {
            status = await addToCart({
                productId: product.id,
                p_name: product.p_name,
                p_price: product.p_price,
                p_image: product.p_image,
                p_category: product.p_category,
                quantity: 1,
            });
        }

        if (status) {
            toast.success(`${product.p_name} added to cart!`);
        } else {
            toast.error("Failed to add to cart.");
        }
    };

    const filteredProducts = useMemo(() => {
        const search = searchTerm.toLowerCase().trim();
        return allProducts.filter((p) => {
            if (selectedCategory !== "All" && p.p_category !== selectedCategory) return false;
            if (search && !p.p_name.toLowerCase().includes(search)) return false;
            return true;
        });
    }, [allProducts, selectedCategory, searchTerm]);

    const totalItems = filteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemPerPage));
    const startIndex = (currentPage - 1) * itemPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemPerPage);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif&display=swap');
                .font-serif-medical { font-family: 'Instrument Serif', serif; }
                .font-sans-medical { font-family: 'Plus Jakarta Sans', sans-serif; }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                .stagger-item { animation: fadeInUp 0.5s ease-out both; }
                .medical-card {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(241, 245, 249, 1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .medical-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08); border-color: #0d9488; }
            `}</style>

            <div className="min-h-screen bg-[#f8fafc] font-sans-medical pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 stagger-item">
                        <div>
                            <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-[0.2em] mb-2">
                                <FaPills /> Pharmacy Store
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-serif-medical text-slate-900">
                                Human <span className="text-teal-600 italic">Medicines</span>
                            </h1>
                        </div>
                        <button onClick={() => navigate('/addProduct')} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-teal-600 transition-all shadow-xl active:scale-95">
                            <FaPlus /> Add Medicine
                        </button>
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 stagger-item">
                        <div className="lg:col-span-2 relative">
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search medicine..."
                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-teal-500 shadow-sm transition-all"
                                onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
                            />
                        </div>

                        <div className="relative">
                            <FaLayerGroup className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            <select 
                                value={selectedCategory}
                                onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-14 pr-10 py-4 rounded-2xl bg-white border border-slate-200 outline-none appearance-none font-bold text-slate-700 cursor-pointer shadow-sm focus:border-teal-500"
                            >
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat === "All" ? "All Categories" : cat}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-3 border-slate-200">
                                <FaFilter className="text-[10px] text-slate-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <FaFilter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            <select 
                                onChange={(e) => { setItemPerPage(Number(e.target.value)); setCurrentPage(1); }}
                                className="w-full pl-14 pr-10 py-4 rounded-2xl bg-white border border-slate-200 outline-none appearance-none font-bold text-slate-700 cursor-pointer shadow-sm focus:border-teal-500"
                            >
                                <option value={8}>08 Per Page</option>
                                <option value={16}>16 Per Page</option>
                                <option value={32}>32 Per Page</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    {currentProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-item">
                            {currentProducts.map((product) => (
                                <div key={product.id} className="medical-card rounded-[2.5rem] overflow-hidden flex flex-col group p-2">
                                    <div className="relative h-52 bg-slate-50 rounded-[2rem] overflow-hidden">
                                        <img src={product.p_image} alt={product.p_name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-teal-600 border border-teal-100 uppercase tracking-tighter">
                                            {product.p_category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-slate-800 line-clamp-1">{product.p_name}</h3>
                                            <p className="text-2xl font-serif-medical font-bold text-teal-600 mt-1">₹{product.p_price}</p>
                                        </div>

                                       <div className="flex items-center gap-2 mt-auto">
    {/* View Details — Only Icon (Compact) */}
    <button 
        onClick={() => navigate(`/product-detail/${product.id}`)}
        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all active:scale-90"
        title="View Details"
    >
        <FaEye className="text-lg" />
    </button>
    
    {/* Add to Cart — Icon + Text (Primary) */}
    <button 
        onClick={() => handleQuickAddToCart(product)}
        className="flex-1 h-12 bg-teal-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-100"
    >
        <FaShoppingCart className="text-sm" />
        <span className="text-sm tracking-wide">Add to Cart</span>
    </button>
</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 stagger-item">
                            <h2 className="text-2xl font-bold text-slate-400">No Medications Found</h2>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex items-center justify-center gap-3 stagger-item">
                            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-teal-600 disabled:opacity-30 transition-all"><FaChevronLeft /></button>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-xl font-bold transition-all ${currentPage === i + 1 ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' : 'text-slate-400 hover:bg-slate-50'}`}>{i + 1}</button>
                                ))}
                            </div>
                            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-teal-600 disabled:opacity-30 transition-all"><FaChevronRight /></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}