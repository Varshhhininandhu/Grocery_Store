import { Box, Button, Image, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementFunc, incrementFunc } from "../Redux/Products/actions";

const AddToCart = ({ id, image, name, price, quantity, handleRemove }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the selected item
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <Tbody>
      <Tr>
        <Td>
          <Image src={image} width={"80px"} alt="error" />
          <Text>{name}</Text>
        </Td>
        <Td>{price}</Td>
        <Td>
        <Button mr={"20px"}colorScheme='black' variant='outline' onClick={() => dispatch(decrementFunc(+id))}>-</Button>
        {quantity}
        <Button ml={"20px"}colorScheme='black' variant='outline' onClick={() => dispatch(incrementFunc(+id))}>+</Button>
        </Td>
        <Td isNumeric>{Number(price) * quantity}</Td>
        <Td>
          <Button onClick={() => handleRemove(id)} ml={2} colorScheme="red">
            Remove
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default AddToCart;