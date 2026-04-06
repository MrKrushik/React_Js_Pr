import { toast, ToastContainer } from "react-toastify";
import AddFormData from "./components/addformdata";
import Viewtabledata from "./components/viewtabaldata";
import { useState, useEffect } from "react";
import type { productType } from "./utils/global";

export default function App() {
  const [allProducts, setAllProducts] = useState<productType[]>(
    JSON.parse(localStorage.getItem("products") || "[]"),
  );

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editProduct, setEditProduct] = useState<productType>();

  useEffect(() => {
    console.log("Use Effect : ", allProducts);

    localStorage.setItem("products", JSON.stringify(allProducts));
  }, [allProducts]);

  const deleteProduct = (index: number) => {
    setAllProducts((allProducts) => allProducts.filter((_, i) => i !== index));

    toast.success("Product deleted successfully...");
  };

  const updateProduct = (index: number) => {
    setEditIndex(index);
    console.log("Edit Product : ", allProducts[index]);
    setEditProduct(allProducts[index]);
  };
  return <>
        <AddFormData  
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            editProduct={editProduct}
            editIndex={editIndex}
            setEditIndex={setEditIndex}/>

        <Viewtabledata 
        products={allProducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}/>
        
        <ToastContainer />
  </>
}