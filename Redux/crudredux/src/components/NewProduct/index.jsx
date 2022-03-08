import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createProductAction } from "actions/productsActions";
const Component = () => {
  //state del componente
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  //Use dispatc and create a function
  const dispatch = useDispatch();

  //Call to action
  const addProduct = (product) => {
    dispatch(createProductAction(product));
  };

  const submitProduct = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price <= 0) return;

    addProduct({
      name,
      price,
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>
            <form onSubmit={submitProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
export { Component as NewProduct };