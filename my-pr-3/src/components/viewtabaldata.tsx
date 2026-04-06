import { useState } from "react";
import type { productType } from "../utils/global";

type propsType = {
  products: productType[];
  deleteProduct: (index: number) => void;
  updateProduct: (index: number) => void;
};


function FoodProductTable({ 
  products,
  deleteProduct,
  updateProduct }: propsType) {
  const [viewMode, setViewMode] = useState<"table" | "list">("table");
  const [search, setSearch] = useState("");


  const getOrganicBadge = (status: string) => {
    const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    if (status.toLowerCase() === "organic") {
      return <span className={`${base} bg-green-100 text-green-800`}>🌱 Organic</span>;
    }
    return <span className={`${base} bg-gray-100 text-gray-800`}>🌾 {status}</span>;
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.farmLocation.toLowerCase().includes(search.toLowerCase()) ||
      product.supplierEmail.toLowerCase().includes(search.toLowerCase())
    );
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Product Directory</h1>
                <p className="text-gray-600 text-sm mt-1">View all your farm products</p>
              </div>
              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                 value={search}
                 onChange={(event) => { 
                setSearch(event.target.value);
              }}
                className="w-64 px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === "table"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📊 Table
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📋 List
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No products yet</h3>
              <p className="text-gray-500 text-sm">Start adding products to your inventory</p>
            </div>
          ) : (
            <>
              {viewMode === "table" ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Supplier
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tags
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stock
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Harvest Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredProducts.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.productName}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{product.supplierEmail}</div>
                            <div className="text-xs text-gray-500">Phone : {product.supplierPhone}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">₹{product.price}</div>
                            <div className="text-xs text-gray-500">per {product.priceUnit || 'kg'}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {getOrganicBadge(product.organicStatus)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {product.tags.map((tag, i) => (
                                <span key={i} className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{product.farmLocation}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{product.quantity} {product.quantityUnit || 'kg'}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{product.harvestDate}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button onClick={() => {
                              updateProduct(index);
                          }} className="inline-flex items-center justify-center p-2 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                ✏️
                              </button>
                              <button 
                              onClick={() => {
                              deleteProduct(index);
                          }} className="inline-flex items-center justify-center p-2 border border-red-300 shadow-sm text-xs font-medium rounded text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{product.productName}</h3>
                            {getOrganicBadge(product.organicStatus)}
                            <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {product.category}
                            </span>
                          </div>
                          
                          {product.description && (
                            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-900">Price:</span>
                              <span className="ml-2 text-gray-600">₹{product.price} per {product.priceUnit || 'kg'}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Stock:</span>
                              <span className="ml-2 text-gray-600">{product.quantity} {product.quantityUnit || 'kg'}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Harvest Date:</span>
                              <span className="ml-2 text-gray-600">{product.harvestDate}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Supplier:</span>
                              <div className="text-gray-600">
                                <div>Email :- {product.supplierEmail} | Phone :- {product.supplierPhone}</div>
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Location:</span>
                              <span className="ml-2 text-gray-600">{product.farmLocation}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Tags:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {product.tags.map((tag, i) => (
                                  <span key={i} className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button    onClick={() => {
                            updateProduct(index);
                          }} className="inline-flex items-center px-3 py-2 border border-blue-500 shadow-sm text-xs font-medium rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Edit
                          </button>
                          <button 
                           onClick={() => {
                            deleteProduct(index);
                          }}className="inline-flex items-center px-3 py-2 border border-red-500 shadow-sm text-xs font-medium rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{products.length}</span> products
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodProductTable;