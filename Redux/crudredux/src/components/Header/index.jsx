import React from "react";
import { Link } from "react-router-dom";
const Component = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            Crud- REact
          </Link>
        </h1>
      </div>
      <Link
        to="/productos/nuevo"
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
};

export { Component as Header };
export default Component;
