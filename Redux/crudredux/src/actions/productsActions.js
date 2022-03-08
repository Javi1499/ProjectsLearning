import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "types";

//CreateProducts
export function createProductAction(product) {
  return (dispatch) => {
    console.log("desde actio");
    dispatch(addProduct());
    try {
      dispatch(addProductSuccess(product));
    } catch (error) {
      dispatch(addProductError(true));
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
