import React from 'react'
import {Box,Image,Grid,GridItem,Text, Heading} from "@chakra-ui/react";
import "../../App.css"
const Bank = () => {
  return (
    <Box
    h={'auto'}
    w={'100%'}
    m="auto"
    
   
    fontFamily={'ProximaNovaA-Regular'}>
      {/*  */}
      
      <h2 className="heading">Bank Offers</h2>
      <Grid templateColumns= 
          {['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}  gap={3} >
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov' >
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_onecard_360_160123.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_hsbc_360_160123.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_indusind-500_360_160123.jpg' h='100%' w='100%' />
      </GridItem>
      
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/c180fc98-bbcd-4dba-9bad-65fc5dca26e6/t1_hp_aff_m_paytm-wallet_360_160123.jpg' h='100%' w='100%' />
      </GridItem>
      </Grid>
      </Box>
  )
}

export default Bank