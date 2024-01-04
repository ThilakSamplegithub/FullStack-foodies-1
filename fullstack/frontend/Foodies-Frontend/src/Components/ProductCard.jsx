import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Text,
  Heading,
  ButtonGroup,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { addToCart } from "../Redux/Products/actions";
const ProductCard = ({ _id, name, category, image, price }) => {
  console.log(_id, name, category, price, image);
  console.log("rendered productCard");
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(_id));
  };
  return (
    <Card maxW="sm">
      <CardBody>
        <RouterLink to={`/singleProductPage/${_id}`}>
          {" "}
          <Image
            src={image}
            minH={"250px"}
            loading="lazy"
            alt="Not Available"
            borderRadius="lg"
          />
        </RouterLink>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>category:{category}</Text>
          <Text color="blue.600" fontSize="xl">
            price:{price}$
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing={{ base: 0, md: 2 }}>
          <Stack>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Stack>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
const MemoizedProductCard = memo(ProductCard);
export default MemoizedProductCard;
