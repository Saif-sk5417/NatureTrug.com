import React from 'react'
import DashboardData1 from './DashboardData1';
import { Box, Grid, GridItem, Heading, Spacer } from "@chakra-ui/react";
import { Navbar } from '../Navbar';
const Dashboard1 = () => {
  return (
    <Box>
    <Navbar />
    <Box h="auto" w="95%" m="auto" mt="180px">
      <Grid templateColumns={"repeat(5,1fr)"}>
        <GridItem colSpan={1} b p="10px">
          <Box
            h="auto"
            w="100%"
            m="auto"
            mt="15px"
            mb="30px"
            p="8px"
            borderRadius="11px"
            color="white"
            fontWeight="bold"
            bgColor="rgb(132, 194, 37)"
          >
            <Heading size="lg">Dashboard</Heading>
          </Box>
          <Box
            h="auto"
            w="100%"
            m="auto"
            mt="15px"
            mb="30px"
            p="8px"
            borderRadius="11px"
            color="white"
            fontWeight="bold"
            bgColor="rgb(132, 194, 37)"
          >
            <Heading size="lg">Category</Heading>
          </Box>
          <Box
            h="auto"
            w="100%"
            m="auto"
            mt="15px"
            mb="30px"
            p="8px"
            borderRadius="11px"
            color="white"
            fontWeight="bold"
            bgColor="rgb(132, 194, 37)"
          >
            <Heading size="lg">Add Products</Heading>
          </Box>
          <Box
            h="auto"
            w="100%"
            m="auto"
            mt="15px"
            mb="30px"
            p="8px"
            borderRadius="11px"
            color="white"
            fontWeight="bold"
            bgColor="rgb(132, 194, 37)"
          >
            <Heading size="lg">Edit Products</Heading>
          </Box>
          <Box
            h="auto"
            w="100%"
            m="auto"
            mt="15px"
            mb="30px"
            p="8px"
            borderRadius="11px"
            color="white"
            fontWeight="bold"
            bgColor="rgb(132, 194, 37)"
          >
            <Heading size="lg">Orders</Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <DashboardData1 />
        </GridItem>
      </Grid>
    </Box>
  </Box>
  )
}

export default Dashboard1;