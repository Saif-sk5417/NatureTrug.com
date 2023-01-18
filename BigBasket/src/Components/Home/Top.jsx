import React from 'react'
import {Box,Image,Grid,GridItem,Hide} from "@chakra-ui/react"
const Top = () => {
  return (
   <Box
    h={'auto'}
    w={'100%'}
    m="auto"
    mt='35px'
    
   fontFamily={'ProximaNovaA-Regular'}>
     
      
   
      <Grid w='100%'
          templateColumns= 
          {['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']} 
          gap={3} >
      <GridItem w='100%' h='65px' >
        <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_01.png' h='100%' w='100%' />
      </GridItem>
      <GridItem  h='65px'  >
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem  h='65px'  >
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_03.png' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem  h='65px' >
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_04.png' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem  h='65px' >
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_05.png' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem  h='65px' >
      <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_06.png' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
     </Box>


  )
}

export default Top;