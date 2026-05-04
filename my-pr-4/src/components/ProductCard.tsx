import React from "react";
import { FaPills, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import type { productFetchType } from "../utils/global";

interface Props {
    product: productFetchType;
    onView: (id: string) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const ProductCard = React.memo(({ product, onView, onEdit, onDelete }: Props) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="relative">
                <img
                    src={product.p_image}
                    alt={product.p_name}
                    className="w-full h-48 object-contain bg-gray-50"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/5390584/pexels-photo-5390584.jpeg';
                    }}
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                    💊 {product.p_category}
                </span>
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${product.p_stock < 10 ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
                    {product.p_stock < 10 ? "⚠️ Low Stock" : "✅ In Stock"}
                </span>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{product.p_name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.p_description}</p>

                <div className="flex items-center gap-2 mb-3">
                    <FaPills className="text-blue-600 text-sm" />
                    <span className="text-sm text-gray-700">{product.p_stock} units available</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-bold text-blue-600">
                        ₹{product.p_price.toLocaleString()}
                    </p>
                    <span className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">Prescription Required</span>
                </div>

                <div className="flex gap-2">
                    <button 
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                        onClick={() => onView(product.id)}
                    >
                        <FaEye className="text-xs" /> View
                    </button>
                    <button 
                        className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                        onClick={() => onEdit(product.id)}
                    >
                        <FaEdit className="text-xs" /> Edit
                    </button>
                    <button 
                        className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1"
                        onClick={() => onDelete(product.id)}
                    >
                        <FaTrashAlt className="text-xs" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
