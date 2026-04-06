import { useEffect, useState } from "react";
import type { productType } from "../utils/global";
import { toast } from "react-toastify";

type propsType = {
  allProducts: productType[];
  setAllProducts: (value: React.SetStateAction<productType[]>) => void;
  editProduct: productType | undefined;
  editIndex: number | null;
  setEditIndex: (value: React.SetStateAction<number | null>) => void;
};

function FoodProductForm({ 
  allProducts,
  setAllProducts,
  editProduct,
  editIndex,
  setEditIndex,
}: propsType) {
    const [productName, setProductName] = useState("");
    const [supplierEmail, setSupplierEmail] = useState("");
    const [supplierPhone, setSupplierPhone] = useState("");
    const [price, setPrice] = useState("");
    const [priceUnit, setPriceUnit] = useState("kg");
    const [category, setCategory] = useState("");
    const [organicStatus, setOrganicStatus] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [farmLocation, setFarmLocation] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [quantityUnit, setQuantityUnit] = useState("kg");
    const [harvestDate, setHarvestDate] = useState("");

    const [error, setError] = useState<any>({});
    const [showSuccess, setShowSuccess] = useState(false);

    const allTags = ["Fresh", "Local", "Seasonal", "Pesticide-Free", "Premium Quality"];
    const allLocations = ["Rajkot", "Jamnagar","Junagadh", "Bhavnagar", "Porbandar", "Amreli", "Surendranagar", "Morbi", "Veraval", "Jetpur"];
    const categories = ["Vegetables", "Fruits", "Grains", "Dairy", "Spices"];

    useEffect(() => {
        if (editProduct) {
            setProductName(editProduct.productName);
            setSupplierEmail(editProduct.supplierEmail);
            setSupplierPhone(editProduct.supplierPhone);
            setPrice(editProduct.price);
            setPriceUnit(editProduct.priceUnit);
            setCategory(editProduct.category);
            setOrganicStatus(editProduct.organicStatus);
            setTags(editProduct.tags);
            setFarmLocation(editProduct.farmLocation);
            setDescription(editProduct.description);
            setQuantity(editProduct.quantity);
            setQuantityUnit(editProduct.quantityUnit);
            setHarvestDate(editProduct.harvestDate);
        }
    }, [editProduct]);

    const handleTags = (e: any) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setTags(prev => [...prev, value]);
        } else {
            setTags(prev => prev.filter(t => t !== value));
        }
    };

    const validation = () => {
        let newError: any = {};

        if (!productName) newError.productName = "Product name is required";

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!supplierEmail) {
            newError.supplierEmail = "Supplier email is required";
        } else if (!emailPattern.test(supplierEmail)) {
            newError.supplierEmail = "Invalid email";
        }

        const phonePattern = /^(\+91[\-\s]?)?[0]?[6789]\d{9}$/;
        if (!supplierPhone) {
            newError.supplierPhone = "Supplier phone is required";
        } else if (!phonePattern.test(supplierPhone)) {
            newError.supplierPhone = "Invalid phone";
        }

        if (!price) newError.price = "Price is required";
        if (!quantity) newError.quantity = "Quantity is required";
        if (!category) newError.category = "Category is required";
        if (!organicStatus) newError.organicStatus = "Organic status is required";
        if (tags.length === 0) newError.tags = "At least one tag is required";
        if (!farmLocation) newError.farmLocation = "Farm location is required";
        if (!harvestDate) newError.harvestDate = "Harvest date is required";
        if (!description) newError.description = "Description is required";

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const submit = (e: any) => {
        e.preventDefault();

        if (!validation()) return;

        const productData: productType = {
            productName,
            supplierEmail,
            supplierPhone,
            price,
            priceUnit,
            category,
            organicStatus,
            tags,
            farmLocation,
            description,
            quantity,
            quantityUnit,
            harvestDate
        };

      if (editIndex !== null) {

      // Edit Logic
      let updateProduct = [...allProducts];
      updateProduct[editIndex] = productData;
      setAllProducts(updateProduct);

      setEditIndex(null);

      toast.success("Product updated successfully...");
    } else {
      setAllProducts((allProducts) => [...allProducts, productData]);

      toast.success("Product added successfully...");
    }

        // Reset form
        setProductName("");
        setSupplierEmail("");
        setSupplierPhone("");
        setPrice("");
        setPriceUnit("kg");
        setCategory("");
        setOrganicStatus("");
        setTags([]);
        setFarmLocation("");
        setDescription("");
        setQuantity("");
        setQuantityUnit("kg");
        setHarvestDate("");
        setError({});
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Navigation Bar - Modern BAPP Style */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                           <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                            <img 
                                    src="/farm.png"   
                                    alt="icon"
                                    className="w-5 h-5 object-contain"
                                />
                            </div>
                                                    <span className="font-bold text-slate-800 text-xl tracking-tight">Farm<span className="text-emerald-600">Fresh</span></span>
                            <span className="hidden md:inline-flex ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Producer Portal</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span>Active Session</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                                    <span className="text-sm font-medium text-slate-600">👨‍🌾</span>
                                </div>
                                <div className="hidden sm:block text-right">
                                    <p className="text-sm font-medium text-slate-700">Ramesh Patel</p>
                                    <p className="text-xs text-slate-400">Organic Farmer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Dashboard Stats - Modern Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Total Products</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{allProducts.length}</p>
                <p className="text-xs text-emerald-600 mt-1">All listings</p>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            </div>
        </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Organic Products</p>
                <p className="text-3xl font-bold text-green-600 mt-1">
                    {allProducts.filter(p => p.organicStatus?.toLowerCase() === "organic").length}
                </p>
                <p className="text-xs text-green-600 mt-1">🌱 Chemical-free</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>
        </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Non-Organic Products</p>
                <p className="text-3xl font-bold text-amber-600 mt-1">
                    {allProducts.filter(p => p.organicStatus?.toLowerCase() === "non-organic").length}
                </p>
                <p className="text-xs text-amber-600 mt-1">🌾 Conventional</p>
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
        </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Categories</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">
                    {new Set(allProducts.map(p => p.category)).size}
                </p>
                <p className="text-xs text-slate-400 mt-1">Product types</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </div>
        </div>
    </div>
</div>

                {/* Success Message - Toast Style */}
                {showSuccess && (
                    <div className="fixed top-20 right-6 z-50 animate-slide-down">
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg shadow-lg p-4 min-w-[320px]">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-emerald-800">Product added successfully!</p>
                                    <p className="text-xs text-emerald-600 mt-0.5">Your listing is now live in the marketplace.</p>
                                </div>
                                <button onClick={() => setShowSuccess(false)} className="ml-auto text-emerald-400 hover:text-emerald-600">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Form Card - Modern Elevated Design */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">Register New Product</h2>
                                <p className="text-emerald-100 text-sm mt-1 flex items-center gap-2">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                                    Fill in the details to add fresh produce to your catalog
                                </p>
                            </div>
                            <div className="hidden md:block text-5xl opacity-10">🌾</div>
                        </div>
                    </div>

                    <form onSubmit={submit} className="p-8">
                        {/* Basic Information Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Basic Information</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Product Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        placeholder="e.g., Organic Basmati Rice"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        className={`w-full px-4 py-2.5 border ${error.productName ? "border-red-300 bg-red-50 focus:ring-red-500" : "border-slate-200 focus:border-emerald-400"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all`}
                                    />
                                    {error.productName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>{error.productName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className={`w-full px-4 py-2.5 border ${error.category ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 appearance-none bg-white`}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((c, i) => (
                                                <option key={i} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {error.category && <p className="text-red-500 text-xs mt-1">{error.category}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Pricing & Quantity Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Pricing & Stock</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Price <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">₹</span>
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className={`flex-1 px-4 py-2.5 border ${error.price ? "border-red-300 bg-red-50" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400`}
                                        />
                                        <select
                                            value={priceUnit}
                                            onChange={(e) => setPriceUnit(e.target.value)}
                                            className="px-3 py-2.5 border border-slate-200 rounded-r-lg bg-slate-50 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400"
                                        >
                                            <option value="kg">per kg</option>
                                            <option value="liter">per liter</option>
                                        </select>
                                    </div>
                                    {error.price && <p className="text-red-500 text-xs mt-1">{error.price}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Available Quantity <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="number"
                                            placeholder="0.0"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            className={`flex-1 px-4 py-2.5 border ${error.quantity ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400`}
                                        />
                                        <select
                                            value={quantityUnit}
                                            onChange={(e) => setQuantityUnit(e.target.value)}
                                            className="px-3 py-2.5 border border-l-0 border-slate-200 rounded-r-lg bg-slate-50 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400"
                                        >
                                            <option value="kg">kg</option>
                                            <option value="liter">liter</option>
                                        </select>
                                    </div>
                                    {error.quantity && <p className="text-red-500 text-xs mt-1">{error.quantity}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Supplier Information Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Supplier Details</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        placeholder="contact@farmfresh.com"
                                        value={supplierEmail}
                                        onChange={(e) => setSupplierEmail(e.target.value)}
                                        className={`w-full px-4 py-2.5 border ${error.supplierEmail ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400`}
                                    />
                                    {error.supplierEmail && <p className="text-red-500 text-xs mt-1">{error.supplierEmail}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        placeholder="+91 98765 43210"
                                        value={supplierPhone}
                                        onChange={(e) => setSupplierPhone(e.target.value)}
                                        className={`w-full px-4 py-2.5 border ${error.supplierPhone ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400`}
                                    />
                                    {error.supplierPhone && <p className="text-red-500 text-xs mt-1">{error.supplierPhone}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Farm Information Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Farm Information</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Farm Location <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={farmLocation}
                                            onChange={(e) => setFarmLocation(e.target.value)}
                                            className={`w-full px-4 py-2.5 border ${error.farmLocation ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 appearance-none bg-white`}
                                        >
                                            <option value="">Select location</option>
                                            {allLocations.map((l, i) => (
                                                <option key={i} value={l}>{l}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {error.farmLocation && <p className="text-red-500 text-xs mt-1">{error.farmLocation}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Harvest Date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        value={harvestDate}
                                        onChange={(e) => setHarvestDate(e.target.value)}
                                        className={`w-full px-4 py-2.5 border ${error.harvestDate ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400`}
                                    />
                                    {error.harvestDate && <p className="text-red-500 text-xs mt-1">{error.harvestDate}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Quality Attributes Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Quality Attributes</h3>
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-3">
                                    Product Tags <span className="text-red-500">*</span>
                                </label>
                                <div className={`border ${error.tags ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-xl p-4 bg-slate-50/30`}>
                                    <div className="flex flex-wrap gap-2">
                                        {allTags.map((t, i) => (
                                            <label key={i} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${tags.includes(t) ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'} border`}>
                                                <input
                                                    type="checkbox"
                                                    value={t}
                                                    checked={tags.includes(t)}
                                                    onChange={handleTags}
                                                    className="w-3.5 h-3.5 text-emerald-600 rounded focus:ring-emerald-500"
                                                />
                                                <span>{t}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {error.tags && <p className="text-red-500 text-xs mt-1">{error.tags}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-3">
                                    Farming Method <span className="text-red-500">*</span>
                                </label>
                                <div className={`border ${error.organicStatus ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-xl p-4 bg-slate-50/30`}>
                                    <div className="flex gap-8">
                                        {["Organic", "Non-Organic"].map(o => (
                                            <label key={o} className="inline-flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="organicStatus"
                                                    value={o}
                                                    checked={organicStatus === o}
                                                    onChange={(e) => setOrganicStatus(e.target.value)}
                                                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <span className={`text-sm ${o === "Organic" ? "text-emerald-700 font-medium" : "text-slate-600"}`}>{o}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {error.organicStatus && <p className="text-red-500 text-xs mt-1">{error.organicStatus}</p>}
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h3 className="text-base font-semibold text-slate-800 uppercase tracking-wide">Product Description</h3>
                            </div>
                            <textarea
                                placeholder="Describe your product, farming practices, quality standards, and special features..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className={`w-full px-4 py-3 border ${error.description ? "border-red-300 bg-red-50" : "border-slate-200"} rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 resize-none`}
                            />
                            {error.description && <p className="text-red-500 text-xs mt-1">{error.description}</p>}
                        </div>

                        {/* Form Actions */}
                        <div className="flex justify-end gap-4 pt-6 border-t border-slate-100">
                            <button
                                type="button"
                                onClick={() => {
                                    setProductName("");
                                    setSupplierEmail("");
                                    setSupplierPhone("");
                                    setPrice("");
                                    setPriceUnit("kg");
                                    setCategory("");
                                    setOrganicStatus("");
                                    setTags([]);
                                    setFarmLocation("");
                                    setDescription("");
                                    setQuantity("");
                                    setQuantityUnit("kg");
                                    setHarvestDate("");
                                    setError({});
                                }}
                                className="px-6 py-2.5 border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
                            >
                                Reset Form
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            >
                                Register Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            {/* <div className="bg-white border-t border-slate-100 mt-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs text-emerald-600">🌾</span>
                            </div>
                            <span className="text-sm text-slate-500">FarmFresh Producer Management System</span>
                        </div>
                        <div className="flex items-center gap-6 text-xs text-slate-400">
                            <span>© 2024 FarmFresh</span>
                            <span>v2.0.0</span>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}

export default FoodProductForm;