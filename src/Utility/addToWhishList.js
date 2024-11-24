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
    }
 }
 export{addToWhishList, getStoredWishlistProduct};