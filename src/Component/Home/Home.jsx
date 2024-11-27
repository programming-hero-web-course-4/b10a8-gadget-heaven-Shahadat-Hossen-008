
import { Helmet } from "react-helmet-async";
import Products from "../Products/Products";


export default function Home() {
  return (
    <div>
        <Helmet>
          <title>Home | GadgetBuy</title>
          <meta name="description" content="Welcome Home page" />
         </Helmet>
        <Products></Products>
    </div>
  )
}
