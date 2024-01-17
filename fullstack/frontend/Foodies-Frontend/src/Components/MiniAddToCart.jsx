import { Image, Text, Button, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { decrementFunc, incrementFunc } from "../Redux/Products/actions";
// import
const MiniAddToCart = ({ _id, image, name, price, quantity, handleRemove }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Flex justifyContent={"space-between"}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Image src={image} width={"80px"} alt="err" />
          <Text fontFamily={"sans-serif"} fontSize={18} color="#0F1111">
            {name.substring(0, 22)}
          </Text>
        </div>
        <div>
          <Text mr={10}>
            <Icon viewBox="0 0 24 24" color="black">
              <path
                fill="currentColor"
                d="M8 3h10l-1 2h-3.26c.48.58.84 1.26 1.05 2H18l-1 2h-2a5.558 5.558 0 0 1-4.8 4.96V14h-.7l6 7H13l-6-7v-2h2.5c1.76 0 3.22-1.3 3.46-3H7l1-2h4.66C12.1 5.82 10.9 5 9.5 5H7z"
              />
            </Icon>
            {price}
          </Text>
        </div>
      </Flex>
      <Flex>
        <Button onClick={() => dispatch(decrementFunc(_id))}>
          <Icon viewBox="0 0 24 24" color="#0F1111">
            <path
              fill="currentColor"
              d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
            />
          </Icon>
        </Button>
        <Text mr={5} ml={5}>{quantity}</Text>
        <Button onClick={() => dispatch(incrementFunc(_id))}>+</Button>
        {/* <Text color="#0F1111">subTotal:{Number(price) * quantity}</Text> */}
        <Button ml={5} onClick={() => handleRemove(_id)}>delete</Button>
      </Flex>
      <hr />
    </div>
  );
};

export default MiniAddToCart;
