import React from 'react'
import {Box, Heading,Flex, Spacer,Grid, GridItem,Image,Icon, Button} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons"
import Counter from './SingleCard/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductsData, RemoveFromCart } from '../Redux/AppReducer/action';

import { useState } from 'react';
const Cart = ({name,Weight,image,id,CartQuantity,price,handelCartDelete}) => {
   const handelDelete = () =>{
      handelCartDelete(id)
   }
  return (
    <Box m='auto' textAlign={'left'} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt='5px' pb='5px' pl='15px' pr='15px'>
    <Flex>
    <Box m={'auto'} p='5px'>
    <Image src={image} h={['90','','120']} w='auto'/>
    </Box>
    <Spacer />
    <Box w={'auto'}
        m='auto'>
    <Heading size={['xs','sm','md']} p={[0.5,0.5,1]} >{name}</Heading>
    <Heading size={['xs','sm','sm']} p={1}  color={'gray'}>{Weight}</Heading>
    <Image
    src="https://www.bbassets.com/static/v2627/custPage/build/content/img/vegicon.svg"
    h="6"
    w="6"
    
  />
    </Box>
    <Spacer />
    <Box w={'auto'}
        m='auto'>
        <Counter id = {id} CartQuantity = {CartQuantity}/>
    </Box>
    <Spacer />
    <Box w={'auto'}
        m='auto'>
    <Heading size={['xs',"",'md']}>₹{price}</Heading>
    </Box>
    <Spacer/>
    <Button 
    w={'auto'}
    m='auto'
    onClick = {handelDelete}
    >
     <Icon as={DeleteIcon} boxSize={[5,6,7]} color="red" />
    </Button>
    </Flex>
 </Box>
  )
}

export default Cart;