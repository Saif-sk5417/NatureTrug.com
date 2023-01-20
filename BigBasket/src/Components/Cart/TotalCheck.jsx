import React from 'react'
import {Box, Flex, Heading, Spacer,Divider,Text, Button,Input} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
const TotalCheck = () => {
  return (
    <Box boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt='15px' pb='15px' pl='15px' pr='15px'>
      <Box m='10px'>
        <Text textAlign={'left'} color='gray' fontSize={'12px'}>ENTER PROMO CODE</Text>
        <Box >
        <Flex>
        <Input placeholder='Promo Code' />
        <Button bgColor={'black'} color='white' >Submit</Button>
        </Flex>
        </Box>
      </Box>
      <Box>
        <Text color="red">Get discounts up to 20%</Text>
      </Box>
      <Flex m="10px" mt="100px">
        <Heading size={'sm'}>
        Shopping Cost
        </Heading>
        <Spacer />
        <Heading size={'sm'}>TBD</Heading>
      </Flex>

      <Flex m="10px">
        <Heading size={'sm'}>
        Item
        </Heading>
        <Spacer />
        <Heading size={'sm'}>0</Heading>
      </Flex>

      <Flex m="10px">
        <Heading size={'sm'}>
        Price
        </Heading>
        <Spacer />
        <Heading size={'sm'}>$ 0</Heading>
      </Flex>

      <Flex m="10px">
        <Heading size={'sm'}>
        Discounts
        </Heading>
        <Spacer />
        <Heading size={'sm'}>$ 0</Heading>
      </Flex>
      <Divider />
      <Flex m="10px">
        <Heading size={'sm'}>
        Estimated Total
        </Heading>
        <Spacer />
        <Heading size={'sm'}>$ 128.99</Heading>
      </Flex>

      <Text color='gray'>or 4 interest-free payments of $ 10.00 with offerPay.</Text>
      <Box m='20px'>
      <NavLink to ='/Payment'><Button bgColor="rgb(132, 194, 37)" color="white" fontSize={'18px'} fontWeight='bold'>Checkouts</Button></NavLink>
      </Box>
    </Box>
  )
}

export default TotalCheck;