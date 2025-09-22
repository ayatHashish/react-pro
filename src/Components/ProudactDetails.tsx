import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
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

function ProductDetails() {
      const params = useParams();
      const apiUrl = "https://fakestoreapi.com/products";
      console.log(params);

    //   const [product, setProduct] =  useState<ProductType>({} as ProductType);
      const [product, setProduct] = useState<ProductType | null>(null);
      useEffect(()=> {
 fetch(`${apiUrl}/${params.id}`).then(res=>res.json()).then(product=>setProduct(product))
      },[])
     
  return (
    <div>
      <h1>Product Details</h1>
     {product?.image && <img src={product.image} alt={product.title} style={{width:"200px"}}/>}
     {product?.title}
     {product?.description}
    </div>
  );
}
export default ProductDetails;
