import React from "react";
import ProductCard from "./ProductCard";
import { Box, Center, Container, Flex, Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
const ProductList = ({ products,search }) => {
  console.log(products);
  const xtraLN = 4;
  const xtraFr = "1fr";
  const medium = 2
   const baseOne = 1;
  return (
    <Flex mt="200px" ml={"20px"} gap={"10px"}>
    <Sidebar/>
      <Box ><Grid
        templateColumns={{
          base: `repeat(${baseOne},${xtraFr})`,
          md: `repeat(${medium},${xtraFr})`,
          lg: `repeat(${xtraLN},${xtraFr})`,
        }}
        gap={6}
      >
        {products?.map((el) => (
          <ProductCard  key={String(el._id)} {...el}/>
        ))}
      </Grid>
      </Box>
    </Flex>
  );
};

export default ProductList;
