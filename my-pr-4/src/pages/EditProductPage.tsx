import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"; // Updated for consistency
import { FaPills, FaNotesMedical, FaImage, FaTag, FaBoxOpen, FaArrowLeft, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { fetchSingleProduct, updateProduct } from "../Services/ProductService";
import type { productFetchType } from "../utils/global";

export default function EditProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [productData, setProductData] = useState<productFetchType>({
        id: "", p_name: "", p_price: 0, p_stock: 0, p_image: "", p_category: "", p_description: "",
    });

    const medicineCategory = ["Pain Relief", "Antibiotics", "Cardiovascular", "Diabetes", "Vitamins", "Minerals", "Supplements", "Allergy", "Respiratory", "Dermatology", "Mental Health", "Neurology", "Sleep Aid", "Diuretics", "Hormones", "Anticoagulants", "Steroids", "Oncology", "Rheumatology", "Gastrointestinal"];

    useEffect(() => {
        if (productId) getSingleProduct();
    }, [productId]);

    const getSingleProduct = async () => {
        const data = await fetchSingleProduct(productId || "");
        if (data) setProductData(data);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProductData((prev) => ({
            ...prev,
            [name]: (name === "p_price" || name === "p_stock") ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!productData.p_name || !productData.p_price || !productData.p_stock || !productData.p_image || !productData.p_category || !productData.p_description) {
            toast.error("All clinical fields are required!");
            return;
        }
        setIsSubmitting(true);
        const status = await updateProduct(productData);
        setIsSubmitting(false);
        if (status) {
            toast.success("Medical record updated!");
            navigate("/product");
        } else {
            toast.error("Update failed. Please check the connection.");
        }
    };

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

                .glass-input {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(203, 213, 225, 0.5);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .glass-input:focus {
                    background: white;
                    border-color: #0d9488;
                    box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.1);
                    outline: none;
                }

                .medical-gradient-bg {
                    background: radial-gradient(circle at 0% 0%, #f0fdfa 0%, #f8fafc 100%);
                }

                .btn-medical-save {
                    background: #0d9488;
                    box-shadow: 0 10px 20px rgba(13, 148, 136, 0.15);
                }
            `}</style>

            <div className="medical-gradient-bg min-h-screen font-sans-medical pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-100/30 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-100/20 rounded-full blur-[80px] -z-10" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="animate-content">
                        {/* Navigation & Header */}
                        <NavLink to="/product" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-6 group">
                            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-widest">Back to Inventory</span>
                        </NavLink>

                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold tracking-widest uppercase mb-4">
                                    <FaPills className="animate-pulse" /> Edit Medicine Entry
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-serif-medical text-slate-900 leading-none">
                                    Update <span className="text-teal-600 italic">Specifications</span>
                                </h1>
                            </div>
                            <div className="text-right hidden md:block">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Product ID</p>
                                <p className="text-xs font-mono text-slate-500">#{productData.id.slice(0, 8)}</p>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    
                                    {/* Medicine Name */}
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                            <FaNotesMedical className="text-teal-500" /> Medicine Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="p_name" 
                                            value={productData.p_name} 
                                            onChange={handleChange} 
                                            className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800"
                                        />
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                            <FaTag className="text-teal-500" /> Category
                                        </label>
                                        <select 
                                            name="p_category" 
                                            value={productData.p_category} 
                                            onChange={handleChange} 
                                            className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800 appearance-none"
                                        >
                                            <option value="">Select Category</option>
                                            {medicineCategory.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Price per Unit (₹)</label>
                                        <input 
                                            type="number" 
                                            name="p_price" 
                                            value={productData.p_price} 
                                            onChange={handleChange} 
                                            className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800"
                                        />
                                    </div>

                                    {/* Stock */}
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                            <FaBoxOpen className="text-teal-500" /> Current Stock Level
                                        </label>
                                        <input 
                                            type="number" 
                                            name="p_stock" 
                                            value={productData.p_stock} 
                                            onChange={handleChange} 
                                            className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800"
                                        />
                                    </div>

                                    {/* Image URL with Preview */}
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                            <FaImage className="text-teal-500" /> Medical Asset URL
                                        </label>
                                        <div className="flex gap-4 items-center">
                                            <input 
                                                type="text" 
                                                name="p_image" 
                                                value={productData.p_image} 
                                                onChange={handleChange} 
                                                className="glass-input flex-1 px-6 py-4 rounded-2xl text-slate-800"
                                            />
                                            {productData.p_image && (
                                                <div className="w-16 h-16 rounded-xl border border-slate-200 overflow-hidden bg-white">
                                                    <img src={productData.p_image} alt="preview" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Clinical Description</label>
                                        <textarea 
                                            name="p_description" 
                                            value={productData.p_description} 
                                            onChange={handleChange} 
                                            rows={4} 
                                            className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800 resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                                    <NavLink 
                                        to="/product" 
                                        className="px-8 py-4 rounded-2xl text-slate-500 font-bold hover:bg-slate-50 transition-all w-full sm:w-auto text-center"
                                    >
                                        Cancel Changes
                                    </NavLink>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="btn-medical-save text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        <FaSave /> {isSubmitting ? "Updating..." : "Synchronize Record"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p className="text-center text-slate-400 text-[10px] mt-10 uppercase tracking-widest font-medium">
                            Authorized Personal Access Only • MedCare Protocol
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}