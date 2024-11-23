import { useEffect, useState } from "react";
import Product from "../product/product";

export default function Products() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => {setProduct(data);
        setFilterProduct(data);
      });
  }, []);
  const btns = [
    "All product",
    "Laptops",
    "Smartphones",
    "Headphones",
    "Smartwaatch",
  ];

  const [filterProduct, setFilterProduct] = useState([]);
  const handlFilterProduct =(category)=>{
   if(category ==="All product"){
    setFilterProduct(products);
   }
   else{
    const filter = products.filter(product => product.category === category);
    setFilterProduct(filter);
   }

    
  }

  return (
    <div className="mt-96 w-11/12 mx-auto">
      <h2 className="text-4xl text-banner_color font-extrabold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid md:grid-cols-6 gap-4">
        <div className="col-span-1 grid grid-cols-1 h-fit gap-4 bg-slate-50 p-4 shadow-xl rounded-xl">
          {btns.map((btn) => (
            <button 
            key={btn}
            className="btn btn-outline text-banner_color rounded-3xl"
            onClick={()=>handlFilterProduct(btn)}>
              {btn}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 col-span-5">
          {filterProduct.length>0?
          filterProduct.map((product) => (
            <Product key={product.id} product={product}></Product>
          )): <p className="text-4xl text-fuchsia-700">No products found</p>}
        </div>
      </div>
    </div>
  );
}
