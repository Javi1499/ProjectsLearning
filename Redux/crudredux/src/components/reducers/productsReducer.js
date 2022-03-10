import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from "types";

//Cada reducer tiene su state
const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    default:
      return state;
  }
}
