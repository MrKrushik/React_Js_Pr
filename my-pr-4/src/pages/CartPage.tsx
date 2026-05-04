import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaMinus, FaPlus, FaTrashAlt, FaArrowRight, FaReceipt, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { fetchCart, updateCartItem, removeFromCart } from "../Services/ProductService";
import { toast } from "react-toastify";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { fetchCart().then(setCartItems); }, []);

    const total = cartItems.reduce((sum, i) => sum + i.p_price * i.quantity, 0);

    const handleQty = async (item, delta) => {
        const newQty = item.quantity + delta;
        if (newQty < 1) return;
        const status = await updateCartItem({ ...item, quantity: newQty });
        if (status) setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: newQty } : i));
    };

    const handleRemove = async (id) => {
        const status = await removeFromCart(id);
        if (status) {
            setCartItems(prev => prev.filter(i => i.id !== id));
            toast.success("Item removed");
        }
    };

    return (
        <div className="min-h-screen bg-[#f1f5f9] pt-32 pb-20 px-6 font-sans selection:bg-teal-100">
            <div className="max-w-6xl mx-auto">
                {cartItems.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl border border-slate-100">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaShoppingCart className="text-5xl text-slate-200" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-800">Your selection is empty</h2>
                        <p className="text-slate-400 mt-2 mb-8">No medicines have been added to your dispensary yet.</p>
                        <button onClick={() => navigate("/product")} className="bg-teal-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 flex items-center gap-2 mx-auto active:scale-95">
                            <FaArrowLeft /> Browse Pharmacy
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Column: List */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-5xl font-black text-slate-900 leading-tight">Medical <span className="text-teal-600 italic">Cart</span></h1>
                                <span className="bg-white px-5 py-2 rounded-2xl border border-slate-200 text-slate-500 font-bold text-sm shadow-sm">
                                    {cartItems.length} Items Selected
                                </span>
                            </div>

                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-[2.5rem] p-6 flex flex-col sm:flex-row items-center gap-8 border border-white shadow-sm hover:shadow-xl hover:border-teal-100 transition-all group relative overflow-hidden">
                                    {/* Product Image */}
                                    <div className="w-32 h-32 bg-slate-50 rounded-3xl p-3 flex-shrink-0 group-hover:bg-teal-50 transition-colors">
                                        <img 
    src={item.p_image} 
    className="w-full h-full object-contain" 
    alt={item.p_name}
    onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.pexels.com/photos/5390584/pexels-photo-5390584.jpeg';
    }}
/>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-1">{item.p_category}</p>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.p_name}</h3>
                                        <div className="flex items-center justify-center sm:justify-start gap-4">
                                            <p className="text-xl font-black text-slate-900">₹{item.p_price}</p>
                                            <span className="text-slate-300 text-sm">per unit</span>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-4 bg-slate-100/50 p-2 rounded-2xl border border-slate-200/40">
                                        <button onClick={() => handleQty(item, -1)} className="w-10 h-10 rounded-xl bg-white shadow-sm flex justify-center items-center text-slate-400 hover:text-rose-500 transition-all active:scale-90">
                                            <FaMinus className="text-xs" />
                                        </button>
                                        <span className="w-6 text-center font-black text-slate-800 text-lg">{item.quantity}</span>
                                        <button onClick={() => handleQty(item, 1)} className="w-10 h-10 rounded-xl bg-white shadow-sm flex justify-center items-center text-slate-400 hover:text-teal-600 transition-all active:scale-90">
                                            <FaPlus className="text-xs" />
                                        </button>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col items-end gap-2">
                                        <p className="text-2xl font-black text-teal-600">₹{item.p_price * item.quantity}</p>
                                        <button onClick={() => handleRemove(item.id)} className="p-3 rounded-xl bg-rose-50 text-rose-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm">
                                            <FaTrashAlt className="text-sm" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Checkout Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white sticky top-32 shadow-2xl shadow-slate-200 border border-slate-800">
                                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
                                    <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-500 shadow-inner">
                                        <FaReceipt className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight">Order Details</h2>
                                </div>

                                <div className="space-y-5 mb-10 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {cartItems.map(i => (
                                        <div key={i.id} className="flex justify-between items-start group">
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-white/90 group-hover:text-teal-400 transition-colors">{i.p_name}</p>
                                                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Quantity: {i.quantity}</p>
                                            </div>
                                            <span className="font-bold text-white/80">₹{i.p_price * i.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/10 space-y-4">
                                    <div className="flex justify-between items-center opacity-60 text-sm">
                                        <span>Logistics & Handling</span>
                                        <span className="text-emerald-400 font-bold">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-2">
                                        <span className="text-white/50 text-sm font-bold uppercase tracking-widest">Total Payable</span>
                                        <span className="text-4xl font-black text-teal-400 tracking-tighter">₹{total}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-teal-500 py-6 rounded-[2rem] font-black text-slate-900 flex items-center justify-center gap-3 hover:bg-teal-400 transition-all active:scale-[0.98] shadow-lg shadow-teal-500/20 mt-10 text-lg uppercase tracking-widest">
                                    Finalize Order <FaArrowRight />
                                </button>
                                
                                <p className="text-center text-white/20 text-[10px] mt-6 uppercase tracking-widest font-bold">
                                    Secure Medical Gateway Active
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}