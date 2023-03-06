
import { WarningIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AddedToCart, getProductsData } from "../../Redux/AppReducer/action";
import { CartAlert } from "./Alert";




import {DairyAddedToCart,getDairyProductsData,getFoodProductsData,FoodAddedToCart} from "../../Redux/AppReducer/action"




const AddToCart = ({ id }) => {

  const dispatch = useDispatch()
  const toast = useToast()
  const handelAddtoCart = (id) => {
    if (id) {
      dispatch(AddedToCart(id))
        .then(() => {
          dispatch(getProductsData())
          toast({
            position: 'top',
            title: 'Added',
            description: "Product Added to Cart.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        })
    } 
     if (id) {
      dispatch(DairyAddedToCart(id))
        .then(() => {
          dispatch(getDairyProductsData())
          toast({
            position: 'top',
            title: 'Added',
            description: "Product Added to Cart.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        })
    }
    {
      dispatch(FoodAddedToCart(id))
      .then(()=>{ 
        dispatch(getFoodProductsData())
        toast({
          position: 'top',
          title: 'Added',
          description: "Product Added to Cart.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
    }
  }
  return (
    <Button
      bgColor="rgb(132, 194, 37)"
      onClick={() => handelAddtoCart(id)}
    >
      <Text fontSize="12px" color="white" fontWeight="bold">
        ADD TO CART
      </Text>
    </Button>
  );
};
export default AddToCart;