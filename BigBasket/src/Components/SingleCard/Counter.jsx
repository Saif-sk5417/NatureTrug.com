import { Flex, Button, Spacer, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AddProductQuantity, getProductsData, ReduceProductQuantity } from "../../Redux/AppReducer/action";
import { AddDairyProductQuantity, getDairyProductsData, ReduceDairyProductQuantity } from "../../Redux/AppReducer/action";
const Counter = ({ id, CartQuantity }) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const handelAddProductQuantity = (id, CartQuantity) => {
    if (id && CartQuantity) {
      if (CartQuantity < 4) {
        dispatch(AddProductQuantity(id, CartQuantity))
          .then((res) => {
            dispatch(getProductsData())

          })
      } 
       if (CartQuantity < 4) {
        dispatch(AddDairyProductQuantity(id, CartQuantity))
          .then((res) => {
            dispatch(getDairyProductsData())

          })
      }
      else {
        toast({
          position: 'top',
          title: 'Sorry !',
          description: "Can't Add More Than 4 Products ",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }
  }
  const handelreduceProductQuantity = (id, CartQuantity) => {
    if (id && CartQuantity) {
      if (CartQuantity > 0) {
        dispatch(ReduceProductQuantity(id, CartQuantity))
          .then((res) => {
            dispatch(getProductsData())
          })
      }
      if (CartQuantity > 0) {
        dispatch(ReduceDairyProductQuantity(id, CartQuantity))
          .then((res) => {
            dispatch(getDairyProductsData())
          })
      }
    }
  }
  return (
    <Flex>
      <Button
        color="rgb(132, 194, 37)"
        variant="link"
        onClick={() => handelreduceProductQuantity(id, CartQuantity)}
      >
        <Text fontSize="25px">-</Text>
      </Button>
      <Spacer />
      <Button variant="link">{CartQuantity}</Button>
      <Spacer />
      <Button
        color="rgb(132, 194, 37)"
        variant="link"
        onClick={() => handelAddProductQuantity(id, CartQuantity)}
      >
        <Text fontSize="25px">+</Text>
      </Button>
    </Flex>
  );
};
export default Counter;