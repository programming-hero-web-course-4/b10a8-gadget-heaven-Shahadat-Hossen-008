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
     }
 }

 export {addToStoreProduct};