import React, { useMemo } from "react";
// import ProductCard from "./ProductCard";
import MemoizedProductCard from "./ProductCard"
import { Box, Center, Container, Flex, Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
const ProductList = ({ products, search }) => {
  console.log(products,'rendered in productlist');
  const xtraLN = 4;
  const xtraFr = "1fr";
  const medium = 2;
  const baseOne = 1;
  // const memoization=useMemo(()=>products.map(el=>({...el})),[searchParams]) and replace it with products
  // {memoization.map=>(el=>(<ProductCard key={el._id} {...el}/>))}
  return (
    <Flex mt="200px" ml={"20px"} gap={"10px"}>
      <Sidebar />
      <Box>
        <Grid
          templateColumns={{
            base: `repeat(${baseOne},${xtraFr})`,
            md: `repeat(${medium},${xtraFr})`,
            lg: `repeat(${xtraLN},${xtraFr})`,
          }}
          gap={6}
        >
          {products?.map((el) => (
            <MemoizedProductCard
              key={String(el._id)}
             _id={el._id}
             image={el.image}
             category={el.category}
             price={el.price}
             name={el.name}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductList;
