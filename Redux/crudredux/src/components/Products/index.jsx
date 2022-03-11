import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "actions/productsActions";
import { Product } from "components";
const Component = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
  }, []);
  const { products, error, loading } = useSelector((state) => state.products);
  return (
    <Fragment>
      <h2 className="text-center my-5">Product list</h2>
      {error && (
        <p className="font-weight-bold alert alert-danger text-center mt-4 ">
          Error exist
        </p>
      )}
      {loading && <p className="text-center">Loading...</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark ">
          <tr>
            <th className="col"> Name</th>
            <th className="col"> Price</th>
            <th className="col"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "No hay productos"
            : products.map((product) => (
                <Product key={`product-${product.id}`} product={product} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Component;
export { Component as Products };
