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
import MiniAddToCart from "../Components/MiniAddToCart";

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
        <div>
         <Heading mt={"200px"} color="blue">Your Cart has {totalQuantity} items</Heading>
         <div className={styles.desktop}>
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
          </div>
          <div className={styles.mini}>
          <div style={{display:"flex",justifyContent:"center",flexDirection:'column',gap:20}}>
            {cartArr.map(el=><MiniAddToCart key={el._id} handleRemove={handleRemove} {...el}/>)}
          </div></div>
          <RouterLink to="/checkout">
            <Button variant="solid" colorScheme="blue" ml={2} mt={3}>
              Buy now
            </Button>
          </RouterLink>
          <Button bg={"red"} ml={5} mt={3} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
          <TotalCart cartTotal={totalPrice} />
        </div>
      )}
      </Box> 
};

export default AddToCartPage;
