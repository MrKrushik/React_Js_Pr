import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaStethoscope, FaEdit, FaTrashAlt, FaShoppingCart, FaArrowLeft, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { fetchSingleProduct, deleteProduct, fetchCart, addToCart, updateCartItem } from "../Services/ProductService";
import type { productFetchType } from "../utils/global";
import { toast } from "react-toastify";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productData, setProductData] = useState<productFetchType | null>(null);

    useEffect(() => {
        if (productId) getSingleProduct();
    }, [productId]);

    const getSingleProduct = async () => {
        const data = await fetchSingleProduct(productId || "");
        if (data) setProductData(data);
    };

    const handleAddToCart = async () => {
        if (!productData) return;
        const cartItems = await fetchCart();
        const existing = cartItems.find((i) => i.productId === productData.id);
        let status: boolean;
        if (existing) {
            status = await updateCartItem({ ...existing, quantity: existing.quantity + 1 });
        } else {
            status = await addToCart({
                productId: productData.id,
                p_name: productData.p_name,
                p_price: productData.p_price,
                p_image: productData.p_image,
                p_category: productData.p_category,
                quantity: 1,
            });
        }
        if (status) {
            toast.success("Added to cart!");
            navigate("/cart");
        } else {
            toast.error("Failed to add to cart!");
        }
    };

    const handleDelete = async () => {
        if (!productData) return;
        if (!confirm("Are you sure you want to delete this medical record?")) return;
        const status = await deleteProduct(productData.id);
        if (status) {
            toast.success("Product deleted!");
            navigate("/product");
        } else {
            toast.error("Failed to delete product.");
        }
    };

    if (!productData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500 border-opacity-50"></div>
                    <FaStethoscope className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-500" />
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif&display=swap');
                
                .font-serif-medical { font-family: 'Instrument Serif', serif; }
                .font-sans-medical { font-family: 'Plus Jakarta Sans', sans-serif; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-content { animation: fadeInUp 0.6s ease-out forwards; }
                
                .medical-card-shadow {
                    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.05);
                }

                .btn-medical-main {
                    background: #0d9488;
                    box-shadow: 0 10px 20px rgba(13, 148, 136, 0.15);
                    transition: all 0.3s ease;
                }
                .btn-medical-main:hover {
                    background: #0f766e;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(13, 148, 136, 0.25);
                }
            `}</style>

            <div className="min-h-screen bg-[#f8fafc] font-sans-medical pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-50 rounded-full blur-[100px] -z-10" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-all mb-8 group">
                        <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Return to Pharmacy</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-content">
                        {/* Image Showcase */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-teal-100 to-blue-100 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-white p-4 rounded-[2.5rem] border border-slate-100 medical-card-shadow overflow-hidden">
                                <img 
                                    src={productData.p_image} 
                                    alt={productData.p_name} 
                                    className="w-full h-auto object-contain min-h-[400px] max-h-[600px] rounded-2xl"
                                />
                                <div className="absolute top-8 left-8">
                                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">
                                        {productData.p_category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Clinical Information */}
                        <div className="flex flex-col space-y-8 pt-4">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold tracking-widest uppercase">
                                    <FaStethoscope /> Pharmaceutical Grade
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-serif-medical text-slate-900 leading-tight">
                                    {productData.p_name}
                                </h1>
                                <div className="flex items-center gap-6">
                                    <span className="text-4xl font-serif-medical font-bold text-teal-600">₹{Number(productData.p_price).toLocaleString()}</span>
                                    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold ${productData.p_stock > 0 ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-rose-50 text-rose-600 border border-rose-100"}`}>
                                        {productData.p_stock > 0 ? (
                                            <>
                                                <FaCheckCircle /> Stock Available: {productData.p_stock}
                                            </>
                                        ) : (
                                            <>
                                                <FaExclamationTriangle /> Currently Unavailable
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-slate-100 medical-card-shadow">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Description & Composition</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {productData.p_description}
                                </p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={productData.p_stock <= 0}
                                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-white font-bold transition-all active:scale-[0.98] ${productData.p_stock > 0 ? "btn-medical-main" : "bg-slate-300 cursor-not-allowed"}`}
                                >
                                    <FaShoppingCart className="text-lg" /> 
                                    {productData.p_stock > 0 ? "Add to Medical Cart" : "Out of Stock"}
                                </button>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => navigate(`/edit-product/${productData.id}`)}
                                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-100 text-slate-700 font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
                                    >
                                        <FaEdit /> Modify
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-slate-100 text-slate-700 font-bold hover:bg-rose-50 hover:text-rose-600 transition-all"
                                    >
                                        <FaTrashAlt /> Remove
                                    </button>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
                                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">SKU: MED-{productData.id.slice(0, 8)}</p>
                                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Verified Pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}