import Product from "./Product";

function ProductsList() {
  return (
    <>
      <h2 className="text-center my-4">Products List Component</h2>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
