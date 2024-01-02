
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/actions";
import { Box, FormControl, Heading, Input, Skeleton, Stack,Text } from '@chakra-ui/react'
import {
  PRODUCT_FAILURE,
  PRODUCT_SUCCESS,
} from "../Redux/Products/actionTypes";
import ProductList from "../Components/ProductList";
import { useSearchParams } from "react-router-dom";
import AddToCartPage from "./AddToCartPage";
import Navbar from "../Components/Navbar";
const ProductPage = () => {
  const[count,setCount]=useState(0)
  const dispatch = useDispatch();
  const { isLoading, products, isError } = useSelector(state => state.productReducer)
  const [searchParams] = useSearchParams("")
  // const initialSearch = searchParams.get("q")
  // const [q, setSearching] = useState(initialSearch || "")
  // useEffect(()=>{
  //   let id
  //   return(()=>{
  //     id&&clearTimeout(id)
  //     id=setTimeout(()=>{setSearchParams({q})},2000)
  //   })
  // },[q])
  let paramObj = {
    params: {
      category: searchParams.getAll("category"),
      // _sort: searchParams.get("order") && "price",
      order: searchParams.get("order"),
    }
  }
  useEffect(() => {
    dispatch(getProducts(paramObj))
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
  }, [searchParams]);
  // console.log(q,"in queryParams")
  return isLoading ? <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack> : isError ? <Heading color={"red"}>Something went wrong</Heading> : <Box>
    <Navbar />
    {/* <div style={{marginTop:200}}>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div> */}
    <ProductList products={products} />
  </Box>;
};
export default ProductPage;
