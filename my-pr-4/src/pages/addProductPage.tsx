import { useState } from "react";
import { FaPills, FaNotesMedical, FaImage, FaTag, FaBoxOpen, FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // Changed to react-router-dom for compatibility
import { toast } from "react-toastify";
import { addProduct } from "../Services/ProductService";

export default function AddProductPage() {
    const navigate = useNavigate();

    const [productData, setProductData] = useState({
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_image: "",
        p_category: "",
        p_description: "",
    });

    const medicineCategory = ["Pain Relief", "Antibiotics", "Cardiovascular", "Diabetes", "Vitamins", "Minerals", "Supplements", "Allergy", "Respiratory", "Dermatology", "Mental Health", "Neurology", "Sleep Aid", "Diuretics", "Hormones", "Anticoagulants", "Steroids", "Oncology", "Rheumatology", "Gastrointestinal"];

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setProductData(prev => ({ 
            ...prev, 
            [name]: (name === 'p_price' || name === 'p_stock') ? Number(value) : value 
        }));
    }

    const onHandleSubmit = async (event) => {
        event.preventDefault();

        if (!productData.p_name || productData.p_price === 0 || productData.p_stock === 0 || !productData.p_image || !productData.p_category || !productData.p_description) {
            toast.error("All fields are required..");
            return;
        }

        const status = await addProduct(productData);

        if (status) {
            toast.success("Medicine added successfully!");
            setTimeout(() => navigate('/product'), 1000);
        } else {
            toast.error("Something went wrong. Try again!");
        }
    }

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif&display=swap');

                    .font-serif-medical { font-family: 'Instrument Serif', serif; }
                    .font-sans-medical { font-family: 'Plus Jakarta Sans', sans-serif; }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .animate-fade-in { animation: fadeInUp 0.6s ease-out forwards; }

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
                `}
            </style>

            <div className="medical-gradient-bg min-h-screen font-sans-medical pt-32 pb-20 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-100/30 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-100/20 rounded-full blur-[80px] -z-10" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 animate-fade-in">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-4 group">
                                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-wider">Dashboard</span>
                            </NavLink>
                            <h1 className="text-5xl lg:text-6xl font-serif-medical text-slate-900 leading-none">
                                Inventory <span className="text-teal-600 italic">Management</span>
                            </h1>
                            <p className="text-slate-500 mt-2">Register new pharmaceutical products to the MedCare system.</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                                <FaPills className="text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Status</p>
                                <p className="text-sm font-bold text-slate-700">Admin Secure Portal</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Form Card */}
                    <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 animate-fade-in">
                        <form onSubmit={onHandleSubmit} className="space-y-8">
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
                                        onChange={onHandleChange} 
                                        placeholder="e.g. Amoxicillin 500mg"
                                        className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800 placeholder-slate-400"
                                    />
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                        <FaTag className="text-teal-500" /> Therapeutic Category
                                    </label>
                                    <select 
                                        name="p_category" 
                                        value={productData.p_category} 
                                        onChange={onHandleChange} 
                                        className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800 appearance-none"
                                    >
                                        <option value="">Select Category</option>
                                        {medicineCategory.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>

                                {/* Price */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                        Unit Price (₹)
                                    </label>
                                    <input 
                                        type="number" 
                                        name="p_price" 
                                        value={productData.p_price === 0 ? "" : productData.p_price} 
                                        onChange={onHandleChange} 
                                        placeholder="0.00"
                                        className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800"
                                    />
                                </div>

                                {/* Stock */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                        <FaBoxOpen className="text-teal-500" /> Initial Stock
                                    </label>
                                    <input 
                                        type="number" 
                                        name="p_stock" 
                                        value={productData.p_stock === 0 ? "" : productData.p_stock} 
                                        onChange={onHandleChange} 
                                        placeholder="Units available"
                                        className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800"
                                    />
                                </div>

                                {/* Image URL */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                                        <FaImage className="text-teal-500" /> Product Image URL
                                    </label>
                                    <div className="flex gap-4 items-center">
                                        <input 
                                            type="text" 
                                            name="p_image" 
                                            value={productData.p_image} 
                                            onChange={onHandleChange} 
                                            placeholder="https://clinical-assets.com/medicine.png"
                                            className="glass-input flex-1 px-6 py-4 rounded-2xl text-slate-800"
                                        />
                                        {productData.p_image && (
                                            <div className="w-16 h-16 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                                                <img src={productData.p_image} alt="preview" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Composition & Usage Details</label>
                                    <textarea 
                                        name="p_description" 
                                        value={productData.p_description} 
                                        onChange={onHandleChange} 
                                        rows={4} 
                                        placeholder="Enter drug composition, dosage instructions, and warnings..."
                                        className="glass-input w-full px-6 py-4 rounded-2xl text-slate-800 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-100">
                                <NavLink 
                                    to="/product" 
                                    className="px-8 py-4 rounded-2xl text-slate-500 font-bold hover:bg-slate-50 transition-all w-full sm:w-auto text-center"
                                >
                                    Discard
                                </NavLink>
                                <button 
                                    type="submit" 
                                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-slate-200 hover:shadow-teal-100 w-full sm:w-auto"
                                >
                                    Confirm & Save Product
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-slate-400 text-xs mt-10 uppercase tracking-widest font-medium">
                        Secure Pharmaceutical Ledger • MedCare System v2.0
                    </p>
                </div>
            </div>
        </>
    );
}