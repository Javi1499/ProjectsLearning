import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, getEditProduct } from "actions/productsActions";
import Swal from "sweetalert2";

const Component = ({ product }) => {
  const { name, price, id } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteProductConfirmation = (id) => {
    Swal.fire({
      title: ` Are you sure delete ${name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
        Swal.fire("Deleted!", "THe product has been deleted.", "success");
      }
    });
  };

  //Function to redirect
  const confirmDeleteProduct = (product) => {
    dispatch(getEditProduct(product));
    navigate(`/productos/editar/${product.id}`);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={() => confirmDeleteProduct(product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteProductConfirmation(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Component;
export { Component as Product };
