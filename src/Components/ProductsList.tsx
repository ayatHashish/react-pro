import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {

  const api_URl = "https://fakestoreapi.com/products";
  type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  const [products, setProudacts] = useState<ProductType[]>([]);
  
  useEffect (()=>{


  fetch(api_URl)
  .then(response => response.json())
  .then(data => setProudacts(data));


  },[])

  return (
    <>
      <h2 className="text-center my-4">Products List Component</h2>

      <div className="container">
        <div className="row">
          {products.map((item)=>{
            return(
          <div className="col-3" key={item.id}>
            <Product product={item}  />
          </div>
);
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
