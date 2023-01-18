import React from 'react';
import {Box,Image,Grid,GridItem,Hide} from "@chakra-ui/react";
import "../../App.css"
const Fruites = () => {
  return (

    <Box
    h={'auto'}
    w={'100%'}
    m="auto"
    
    
    fontFamily={'ProximaNovaA-Regular'}>
        {/*  */}
        <h2 className="heading">Fruits & Vegetables</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']}  gap={3} >
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov' >
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-vegetables-fnv_Storefront_m_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_cuts-sprouts-fnv_Storefront_m_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_exotic-fruits-fnv_Storefront_m_251222_05.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_herbs-seasonings-fnv_Storefront_m_251222_06.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
      {/*  */}
      <Box >
      <h2 className="heading">Your Daily Staples</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']}  gap={3} >
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dals-pulses-staplesStorefront_m_480_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_cooking-oils-staplesStorefront_m_480_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dry-fruits-staplesStorefront_m_480_251222_05.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_salt-staplesStorefront_m_480_251222_06.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
      </Box>
      {/*  */}
      <Box m='auto' mt='20px'>
      <h2 className="heading">Beverages</h2>
      <Grid
      h='auto'
      templateRows={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}
      templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}
      gap={3}
      >
     <GridItem rowSpan={2} colSpan={2} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_power-booster-beveragesStorefront_m_251222_560x378_01.jpg' w={'100%'} h='100%'/>
     </GridItem>
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_tea-beveragesStorefront_m_251222_275x184_02.jpg' w={'100%'} />
     </GridItem>
     
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_health-drinks-beveragesStorefront_m_251222_275x184_03.jpg' w={'100%'}/>
     </GridItem>
     
     <Hide below='sm'>
     <GridItem colSpan={1} border="1px solid #e1e1e1">
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_fruity-beveragesStorefront_m_251222_275x184_04.jpg' w={'100%'} />
     </GridItem>
     </Hide>
     <Hide below='sm'>
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/b56c687b-2a6f-407b-833d-2c0ce81369de/hp_soft-drinks-beveragesStorefront_m_251222_275x184_05.jpg' w={'100%'} />
     </GridItem>
     </Hide>
     </Grid>
      {/*  */}
         <h2 className="heading">Snack Store</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(6,1fr)']}  gap={3} >
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_namkeens-snacksStorefront_m_480_251022_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg' h='100%' w='100%' />
      </GridItem>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      <Hide below='sm'>
      <GridItem w='auto' h='140px' border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/6dab85b0-1718-4306-8be4-0fa697be1c38/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg' h='100%' w='100%' />
      </GridItem>
      </Hide>
      </Grid>
      </Box>
      {/*  */}
      <Box m='auto' mt='20px'>
      <h2 className="heading">Cleaning & Household</h2>
      <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}  gap={3} >
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
        <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_cleaners-disfec_cleaningStorefront_m_480_251222_01.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_detergebts-favric-cleaningStorefront_m_480_251222_02.jpg' h='100%' w='100%' />
      </GridItem>
      <GridItem w='auto' h={['160px','180px','195px']}  border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_disposable-bags-cleaningStorefront_m_480_251222_03.jpg' h='100%' w='100%' />
      </GridItem>
      
      <GridItem w='auto' h={['160px','180px','195px']} border="1px solid #e1e1e1" className='hov'>
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/4c928285-03d4-44c5-96f1-4bd6ee82200f/hp_fresheners-repellem-cleaningStorefront_m_480_251222_04.jpg' h='100%' w='100%' />
      </GridItem>
      </Grid>
      </Box>

      {/*  */}
      <Box>
      <h2 className="heading">Beauty & Hygiene</h2>
      <Grid
      h='auto'
      templateRows={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}
      templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}
      gap={3}
      >
     <GridItem rowSpan={2} colSpan={2} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hpmakeup-mania-_beautyStorefront_m_251222_560x378_01.jpg' w={'100%'} h='100%'/>
     </GridItem>
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_min-40-beautyStorefront_m_251222_275x184_02.jpg' w={'100%'} />
     </GridItem>
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_under-199-beautyStorefront_m_251222_275x184_03.jpg' w={'100%'}/>
     </GridItem>
     <Hide below='sm'>
     <GridItem colSpan={1} border="1px solid #e1e1e1">
      <Image  src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_fantastic-deos-perfumes-beautyStorefront_m_251222_275x184_04.jpg' w={'100%'} />
     </GridItem>
     </Hide>
     <Hide below='sm'>
     <GridItem colSpan={1} border="1px solid #e1e1e1" >
      <Image src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/41d73d99-69d4-4555-8613-348f40544f41/hp_shaving-carebeautyStorefront_m_251222_275x184_05.jpg' w={'100%'} />
     </GridItem>
     </Hide>
     </Grid>
     </Box>
     {/*  */}
    </Box>
  )
}

export default Fruites