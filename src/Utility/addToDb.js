import { toast } from "react-toastify";

const getStoreProduct = ()=>{
    const storedStrProduct = localStorage.getItem("Product-list");
    if(storedStrProduct){
        const storedProduct = JSON.parse(storedStrProduct);
        return storedProduct;
    }
    else{
        return [];
    }
}
 const addToStoreProduct = (id)=>{
     const storedProduct = getStoreProduct();
     if(storedProduct.includes(id)){
        console.log(id);
     }
     else{
        storedProduct.push(id);
        const storedStrProduct = JSON.stringify(storedProduct);
        localStorage.setItem("Product-list", storedStrProduct);
        toast.success('This product add to your cart list')
     }
 }
 const clearedStoredProduct = ()=>{
    localStorage.removeItem('Product-list')
 }

 export {addToStoreProduct, getStoreProduct, clearedStoredProduct};