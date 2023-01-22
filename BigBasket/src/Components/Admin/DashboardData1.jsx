import { Box, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'

const DashboardData1 = () => {
  return (
    <Box w="95%" h="auto" m="auto" mt="20px">
        <Box
          h="auto"
          w="100%"
          m="auto"
          mt="15px"
          mb="15px"
          p="8px"
          borderRadius="11px"
          color="white"
          fontWeight="bold"
          bgColor="rgb(132, 194, 37)"
        >
          <Heading size="lg">Dashboard</Heading>
          
        </Box>
       <Box  w='80%' h='auto' m='auto' mt={'40px'} >
        <Grid templateColumns='repeat(3, 1fr)' gap={40}>
        <GridItem borderRadius={'5'} p="30" bgColor="rgb(132, 194, 37)" color={'white'}>
            <Heading size={'md'}>Total Products</Heading>
            <Heading size={'sm'} p='2'>Total Products</Heading>
        </GridItem>
        <GridItem borderRadius={'5'}  p="30" bgColor="blue" color={'white'}>
        <Heading size={'md'}>Weekly Sells</Heading>
        <Heading size={'sm'} p='2'>$ 19268</Heading>
        </GridItem>
        <GridItem borderRadius={'5'}  p="30" bgColor={'pink'} color={'white'}>
        <Heading size={'md'}>Weekly Order Count</Heading>
        <Heading size={'sm'} p='2'>150</Heading>
        </GridItem>
        </Grid>
        </Box>
        </Box>
  )
}

export default DashboardData1;