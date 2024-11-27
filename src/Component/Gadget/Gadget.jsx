import { Helmet } from "react-helmet-async";
import Products from "../Products/Products";



export default function Gadget() {
  return (
    <div>
      <Helmet>
          <title>Product | GadgetBuy</title>
          <meta name="description" content="Welcome Product page" />
         </Helmet>
      <Products></Products>
    </div>
  );
}
