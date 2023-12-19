import {
  Box,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,Text
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../Components/AddToCart";
import styles from "../Styles/AddToCartPage.module.css"
import {
  clearCart,
  removeItem,
  totalCartPrice,
} from "../Redux/Products/actions";
import TotalCart from "../Components/TotalCart";
import Navbar from "../Components/Navbar";
import { Link as RouterLink, Navigate } from "react-router-dom";

const AddToCartPage = () => {
  const [addToCartArr, setCartArr] = useState([]);
  const dispatch = useDispatch();
  // useSelector(state=>console.log(state.productReducer.cartArr))
  const { cartArr, totalPrice,totalQuantity } = useSelector((state) => state.productReducer);
  console.log(cartArr, "is inside addToCart page");
  function handleRemove(id) {
    console.log(id);
    dispatch(removeItem(id));
  }
  useEffect(() => {
    dispatch(totalCartPrice());
  }, [cartArr]);
  console.log(cartArr.length)
  return <Box>
     <Navbar/>
   {cartArr.length === 0 ? (
        <Heading m={"200px"} className={styles.totalQ}>Your Cart is Empty</Heading>
      ) : (
        <Box>
         <Heading mt={"200px"} color="blue">Your Cart has {totalQuantity} items</Heading>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>price</Th>
                  <Th>Quantity</Th>
                  <Th isNumeric>SubTotal</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              {cartArr?.map((el) => (
                <AddToCart key={el._id} handleRemove={handleRemove} {...el} />
              ))}
            </Table>
          </TableContainer>
          <RouterLink to="/checkout">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
          </RouterLink>
          <Button bg={"red"} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
          <TotalCart cartTotal={totalPrice} />
        </Box>
      )}
      </Box> 
};

export default AddToCartPage;
