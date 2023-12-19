import {
  Box,
  Checkbox,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { ascendingOrder } from "../Redux/Products/actions";
import { ASC_ORDER, PRODUCT_FAILURE } from "../Redux/Products/actionTypes";
const Sidebar = () => {
  // console.log(search,"is from search")
  const [searchParams, setSearchParams] = useSearchParams("");
  const initialCat = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCat || []);
  const initialSort = searchParams.get("order");
  const [order, setOrder] = useState(initialSort || "");
  const dispatch = useDispatch();
  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  // const paramObj={
  //   params:{
  //     category:searchParams.getAll("category")
  //   }
  // }
  // const handleAsc = (e) => {
  //   dispatch(ascendingOrder(paramObj))
  //     .then((res) => {
  //       console.log(res);
  //       dispatch({ type: ASC_ORDER, payload: res });
  //     })
  //     .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
  // };
  function handleVeg(e) {
    let newVeg = [...category];
    newVeg.includes("vegetable")
      ? (newVeg = newVeg.filter((el) => el !== e.target.value))
      : newVeg.push(e.target.value);
    setCategory(newVeg);
  }
  useEffect(() => {
    let param = { category };
    order && (param.order = order);
    setSearchParams(param);
  }, [category,order]);
  let handleFruit = (e) => {
    let newFruit = [...category];
    newFruit.includes("fruit")
      ? (newFruit = newFruit.filter((el) => el !== e.target.value))
      : newFruit.push(e.target.value);
    setCategory(newFruit);
  };
  const handleDairy = (e) => {
    let newDairy = [...category];
    newDairy.includes("Dairy")
      ? (newDairy = newDairy.filter((el) => el != e.target.value))
      : newDairy.push(e.target.value);
    setCategory(newDairy);
  };
  const handleBakery = (e) => {
    let newBakery = [...category];
    newBakery.includes("Bakery")
      ? (newBakery = newBakery.filter((el) => el != e.target.value))
      : newBakery.push(e.target.value);
    setCategory(newBakery);
  };
  return (
    <Box>
      <Box>
        <Stack spacing={5} direction="column">
          <FormLabel>Category</FormLabel>
          <Checkbox
            colorScheme="green"
            value={"vegetable"}
            onChange={handleVeg}
            defaultChecked={category.includes("vegetable")}
          >
            Vegetables
          </Checkbox>
          <Checkbox
            colorScheme="green"
            value={"fruit"}
            onChange={handleFruit}
            defaultChecked={category.includes("fruit")}
          >
            Fruits
          </Checkbox>
          <Checkbox
            colorScheme="green"
            value={"Dairy"}
            onChange={handleDairy}
            defaultChecked={category.includes("Dairy")}
          >
            Dairy
          </Checkbox>
          <Checkbox
            colorScheme="green"
            value={"Bakery"}
            onChange={handleBakery}
            defaultChecked={category.includes("Bakery")}
          >
            Bakery
          </Checkbox>
        </Stack>
      </Box>
      <Box mt={"10px"} onChange={handleSort}>
        <RadioGroup defaultValue={order} >
          <FormLabel>Sort By Price</FormLabel>
          <Stack spacing={5} direction="column">
            <Radio
              colorScheme="green"
              value="asc"
              defaultChecked={order === "asc"}
            >
              Asc
            </Radio>
            <Radio
              colorScheme="green"
              value="desc"
              defaultChecked={order === "desc"}
            >
              Desc
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Sidebar;
