import React from 'react';
import SimpleSlider from './SliderComp';
import {Box,Image,Grid,GridItem,Hide} from "@chakra-ui/react"
import "../../App.css"
const BrandStore = () => {
  return (
  
    <Box
    h={'auto'}
    // w={'100%'}
    w={ '100%' }
    m="auto"
   
    
    fontFamily={'ProximaNovaA-Regular'}>
      {/*  */}
      <Box >
      <h2 className="heading">Home & Kitchen Essentials</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']}  gap={3} >
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
        <Image src='./Images/BrandStore/Kitc1.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='./Images/BrandStore/kit2.jpg' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov' >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_steel-coppers-GMStorefront(Till10th)_m_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_kitchen-tools-GMStorefront(Till10th)_m_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_casseroles-GMStorefront(Till10th)_m_251222_05.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/9db9e4db-b1e2-4da0-816f-c6ed9c080442/hp_bathroom-GMStorefront(Till10th)_m_251222_06.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
      </Box>
      {/*  */}
      <Box >
      <SimpleSlider />
      </Box>
      {/*  */}
      <Box >
      <h2 className="heading">Brand Store</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']}  gap={3}>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
        <Image src='./Images/BrandStore/Amol.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='./Images/BrandStore/Dettol.jpg' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov' >
      <Image src='./Images/BrandStore/cocacola.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='./Images/BrandStore/loreal.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='./Images/BrandStore/Indiagate.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='./Images/BrandStore/durex.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
      </Box>
      {/*  */}
      <Box m="auto" mt='20px'>
      <h2 className="heading">Featured Recipes</h2>
      <Box>
        <Image src='https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg' />
      </Box>
      </Box>
      {/*  */}
    </Box>
  )
}

export default BrandStore;