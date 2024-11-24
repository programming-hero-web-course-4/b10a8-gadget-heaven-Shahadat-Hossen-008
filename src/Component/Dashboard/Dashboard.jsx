import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Cart from "../Cart/Cart";
import { PiSortDescendingBold } from "react-icons/pi";
import { getStoreProduct } from "../../Utility/addToDb";
import { getStoredWishlistProduct } from "../../Utility/addToWhishList";



export default function Dashboard() {
  const [view, setView] = useState("Cart");
  const allProduct = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const[productPrice, setProductPrice] = useState(0);
  useEffect(() => {
    const storedProduct = getStoreProduct();
    const storedProductInt = storedProduct.map((id) => parseInt(id));
    const addToCart = allProduct.filter((product) =>
      storedProductInt.includes(product.product_id)
    );
    setCartList(addToCart);
    
  }, []);
  

  useEffect(()=>{
    const addToWishlist = getStoredWishlistProduct();
    const wishlistProductInt = addToWishlist.map(id=>parseInt(id));
    const addWishlist = allProduct.filter((product) => wishlistProductInt.includes(product.product_id) );
    setWishlist(addWishlist);
  },[])

  const handleSort = () =>{
     const sortedCartList = [...cartList].sort((a,b)=>b.price - a.price);
     setCartList(sortedCartList);
  }

  const totalCost = cartList.reduce((sum, product)=>sum+product.price ,0);
  
  return (
    <div className="bg-banner_color text-center mb-12">
      <h2 className="text-3xl text-white pt-7">Dashboard</h2>
      <p className="text-sm text-gray-100 font-thin w-6/12 mx-auto pb-12">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div>
        <button
          onClick={() => {
            setView("Cart");
          }}
          className={`btn btn-outline text-white rounded-3xl mr-6 w-[10%] mb-5 ${
            view === "Cart" ? "bg-stone-900 text-white" : ""
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => {
            setView("Wishlist");
          }}
          className={`btn btn-outline text-white rounded-3xl w-[10%] ${
            view === "Wishlist" ? "bg-stone-900 text-white" : ""
          }`}
        >
          Wishlist
        </button>
        <div className="bg-slate-100 p-8">
        <div className=" flex justify-between items-center w-11/12 mx-auto">
          <h3 className="text-2xl text-black font-light">{view}</h3>
          {view === "Cart" && (
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-extrabold text-black mr-3">
                Total cost: ${totalCost}
              </p>
              <button 
              onClick={handleSort}
              className="btn btn-outline text-banner_color rounded-3xl">
                Sort by Price
                <PiSortDescendingBold />
              </button>
              <button className="bg-banner_color btn rounded-3xl text-white">
                Purchase
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
      {view === "Cart" &&
        cartList.map((cart) => <Cart key={cart.product_id} cart={cart}></Cart>)}
      {view === "Wishlist" && wishlist.map((wish) => <Cart key={wish.product_id}
      view={view}
       cart={wish}></Cart>)}
    </div>
  );
}
