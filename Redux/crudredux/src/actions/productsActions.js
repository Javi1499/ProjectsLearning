import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
  START_EDIT_PRODUCT,
} from "types";
import axiosClient from "config/axios";
import Swal from "sweetalert2";

//CreateProducts
export function createProductAction(product) {
  return async (dispatch) => {
    console.log("desde actio");
    dispatch(addProduct());
    try {
      //Insert in API
      await axiosClient.post("/productos", product);
      dispatch(addProductSuccess(product));

      //Alert
      Swal.fire("Success", "Product was added", "success");
    } catch (error) {
      console.log(error);
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Error exist",
        text: "Add prioduct failed, please try again",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

//Function to download products
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());

    try {
      const res = await axiosClient.get("/productos");

      dispatch(downloadProductsSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true,
});
const downloadProductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
});
const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

//S
export function deleteProductAction(id) {
  return async (dispatch) => {
    console.log(id);
    dispatch(getProductDelete(id));

    try {
      await axiosClient.delete(`/productos/${id}`);
      dispatch(deleteProductSuccess());
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  };
}
const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: PRODUCT_DELETE_SUCCESS,
});

const deleteProductError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});

export function getEditProduct(product) {
  return (dispatch) => {
    dispatch(getProductAction(product));
  };
}

const getProductAction = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product,
});

export function productEditAction(product) {
  return async (dispatch) => {
    dispatch(editProduct());
    try {
      await axiosClient.put(`/productos/${product.id}`, product);
      dispatch(editProductSuccess(product));
    } catch (error) {}
  };
}
const editProduct = () => ({
  type: START_EDIT_PRODUCT,
});

const editProductSuccess = (product) => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product,
});
