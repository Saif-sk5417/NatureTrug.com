import React from 'react'
import { Flex, Button, Spacer, Text } from "@chakra-ui/react";
const CartQuantity = () => {
  return (
    <Flex>
    <Button bgColor="rgb(132, 194, 37)" size={["xs","sm","sm"]}>
      <Text fontSize="18px" >-</Text>
    </Button>
    <Spacer />
    <Button fontSize={'22px'} variant='link' color={'black'} size={["xs","sm","sm"]} >1</Button>
    <Spacer />
    <Button bgColor="rgb(132, 194, 37)" size={["xs","sm","sm"]}>
      <Text fontSize="18px">+</Text>
    </Button>
  </Flex>
  )
}

export default CartQuantity;