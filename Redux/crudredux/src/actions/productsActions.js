import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
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
