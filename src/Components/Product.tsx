import { Link } from "react-router-dom";

function Product(props) {
   console.log(props);
  const {product}=props;

    return(<>
         <div
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt="{product.title}"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <span>{product.price}</span>
                <span className="d-block">{product.rating.rate}</span>
                <span className="badge bg-secondary">{product.rating.count}</span>
                <Link className="btn btn-primary" to ={`/product/${product.id}`}>details</Link>
              </div>
            </div>
 
    
    
    </>)
}

export default Product;