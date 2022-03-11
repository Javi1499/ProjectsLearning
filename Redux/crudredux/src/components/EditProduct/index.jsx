import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productEditAction } from "actions/productsActions";
import { useNavigate } from "react-router-dom";
const Component = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });
  const { editProduct } = useSelector((state) => state.products);
  const { name, price } = product;

  const navigate = useNavigate();
  useEffect(() => {
    setProduct(editProduct);
  }, [editProduct]);

  const submitEditProduct = (e) => {
    e.preventDefault();
    dispatch(productEditAction(product));
    navigate("/");
  };

  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
                  value={price}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
export { Component as EditProduct };
