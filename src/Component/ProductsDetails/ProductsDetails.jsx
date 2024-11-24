import React from "react";
import { useLoaderData, useParams } from "react-router";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { addToStoreProduct } from "../../Utility/addToDb";
import { addToWhishList } from "../../Utility/addToWhishList";

export default function ProductsDetails() {
  const { productId } = useParams();
  const data = useLoaderData();
  const id = parseInt(productId);
  const product = data.find((product) => product.product_id === id);
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = product;

  const handleAddToCartList = (id)=>{
    addToStoreProduct(id);
  }

  const handleWishList = (id)=>{
    addToWhishList(id);
  }

  return (
    <div className="bg-banner_color text-white text-center md:relative h-[45vh] mb-96 z-10">
      <h2 className="text-3xl font-extrabold mb-4 pt-8">Product Details</h2>
      <p className="text-sm w-6/12 mx-auto  top-1/3 z-50">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className=" bg-white text-black flex justify-between items-center md:absolute top-1/3 left-[15%] z-50 mt-12 p-5 gap-6 rounded-xl shadow-xl">
        <div>
          <img src={product_image} className="max-w-sm h-[210px] rounded-lg shadow-sm" />
          </div>
          <div>
           <div className="text-left">
           <h1 className="text-2xl font-bold mb-4">{product_title}</h1>
            <p className="text-sm font-bold text-gray-600 mb-3">Price: ${price}</p>
            <button class="btn btn-outline btn-success rounded-3xl mb-3">
              In Stock
            </button>
            <p className="text-sm text-gray-500 mb-3">{description}</p>
            {Specification.map((specific, index) => (
              <li key={index} className="list-decimal mb-1">
                {specific}
              </li>
            ))}
            <div className="rating items-center mt-3">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <span className="btn text-gray-500 font-light">{rating}</span>
            </div>
            <div className="flex items-center gap-5 mt-4">
            <button 
            onClick={()=>handleAddToCartList(product_id)}
            className="btn bg-banner_color text-white rounded-3xl items-center"
            >Add To Card<CiShoppingCart className="text-2xl font-bold" /></button>
           <button onClick={()=>handleWishList(product_id)}> <CiHeart className="text-2xl" /></button>
            </div>
           </div>
          </div>
        </div>
      </div>
  );
}
