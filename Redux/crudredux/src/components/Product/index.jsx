import React from "react";
import { Link } from "react-router-dom";

const Component = ({ product }) => {
  const { name, price, id } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`}>Edit</Link>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Component;
export { Component as Product };
