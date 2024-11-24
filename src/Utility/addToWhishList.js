import { toast } from "react-toastify";

const getStoredWishlistProduct = () =>{
    const storedStrProduct = localStorage.getItem("whish-list");
    if(storedStrProduct){
        const storedProduct = JSON.parse(storedStrProduct);
        return storedProduct;
    }
    else{
        return [];
    }
}
 const addToWhishList = (id) =>{
    const storedProduct = getStoredWishlistProduct();
    if(storedProduct.includes(id)){
        console.log(id);
    }
    else{
        storedProduct.push(id);
        const storedStrProduct = JSON.stringify(storedProduct);
        localStorage.setItem('whish-list', storedStrProduct);
        toast.success('This product add to your wishlist')
    }
 }
 export{addToWhishList, getStoredWishlistProduct};