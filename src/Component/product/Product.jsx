export default function Product({ product }) {
    const{product_title, product_image, price}= product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl  h-[210px] object-cover"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-sm font-light text-gray-500">Price: {price}$</p>
        <div className="card-actions">
          <button className="btn  btn-outline text-banner_color rounded-3xl">View Details</button>
        </div>
      </div>
    </div>
  );
}
