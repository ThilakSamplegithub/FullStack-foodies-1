import {
  ADD_TO_CART,
  ASC_ORDER,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  PRODUCT_REQUEST,
  REMOVE_ITEM,
  TOTAL_PRICE,
} from "./actionTypes";
import axios from "axios";
const baseUrl=`${process.env.REACT_APP_API}`
console.log(baseUrl,'is baseUrl')
export const getProducts = (paramObj) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  let res = await axios.get(
    `${process.env.REACT_APP_API}products`,
    paramObj
  );
  return res.data;
};
export const addToCart = (id) => {
  console.log(typeof id);
  return { type: ADD_TO_CART, payload: id };
};
export const removeItem = (id) => {
  console.log(typeof id);
  return { type: REMOVE_ITEM, payload: id };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};
export const incrementFunc = (id) => {
  return { type: INCREMENT_QUANTITY, payload: id };
};
export const decrementFunc = (id) => {
  return { type: DECREMENT_QUANTITY, payload: id };
};
export const totalCartPrice = () => {
  return { type: TOTAL_PRICE };
};
// export const ascendingOrder=(paramObj)=>async(dispatch)=>{
//   dispatch({type:PRODUCT_REQUEST})
//   let res=await axios.get(`http://localhost:8080/products/asc`,paramObj)
//   return res
// }