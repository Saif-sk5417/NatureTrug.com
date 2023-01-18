import React from 'react'
import {Box,Image,Grid,GridItem} from "@chakra-ui/react";
import "../../App.css"
const Mpopular = () => {
  return (
    <Box
    h={'auto'}
    w={'100%'}
    m="auto"
    
    fontFamily={'ProximaNovaA-Regular'}>
      {/*  */}
      
      <h2 className="heading">Most Popular</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}  gap={3} >
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-mostpopularStorefront_m_480_251222_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_stationy-mostpopularStorefront_m_480_251222_02.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-loc-mostpopularStorefront_m_480_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_say-mostpopularStorefront_m_480_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Grid>
      {/*  */}
      <h2 className="heading">Top Offers</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}  gap={3} >
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov' >
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_dow-topoffersStorefront_m_480_251222_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_big-packs-topoffersStorefront_m_480_251222_02.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_combos-topoffersStorefront_m_480_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_30-corner-topoffersStorefront_m_480_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      
      </Grid>
    </Box>
  )
}

export default Mpopular;