import { TiDeleteOutline } from "react-icons/ti";


export default function Cart({ cart }) {
  const { product_title, product_image, description, price } = cart;
  return (
    <div className="bg-slate-100 p-12">
      <div className=" bg-white flex justify-center items-center gap-3 shadow-xl rounded-xl w-9/12 mx-auto p-6">
        <img src={product_image} alt={product_title} className="w-[180px]" />
        <div className="text-left">
          <h3 className="text-xl mb-5">{product_title}</h3>
          <p className="text-sm text-gray-500 mb-5">{description}</p>
          <p>Price: ${price}</p>
        </div>
        <div
         className="text-3xl">
          <button><TiDeleteOutline /></button>
        </div>
      </div>
    </div>
  );
}
