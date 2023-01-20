
import {Box, Heading,Flex, Spacer,Grid, GridItem,Image,Icon} from "@chakra-ui/react";
import { FaShoppingBasket} from "react-icons/fa"
import CartQuantity from "../Components/Cart/CartQuantity";
import TotalCheck from "../Components/Cart/TotalCheck";
import {Navbar} from "../Components/Navbar";
import {DeleteIcon} from "@chakra-ui/icons"
import { Footer } from "../Components/Footer";
const CartPages = () =>
{
    return (
        <Box>
        <Navbar/>
       <Box h='auto' w={["90%","90%","85%"]} m='auto' mt='150px' fontFamily={'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}>
        <Box w={["40%","25%","18%"]} h="auto" m='auto' p="10px" >
        <Flex>
        <FaShoppingBasket color="red"  fontSize='40px'/>
        <Spacer />
        <Heading size={["lg","lg","lg"]}>My Basket</Heading> 
        </Flex>
        </Box>
        {/*  */}
       <Box w="100%" h='auto' m="auto" mt="30px">
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(3, 1fr)']} gap="3" >
           <GridItem colSpan={2}  mb="10px">
             <Box m='auto' textAlign={'left'} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pt='5px' pb='5px' pl='15px' pr='15px'>
                <Flex>
                <Box m={'auto'} p='5px'>
                <Image src="https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg" h={['90','','120']} w='auto'/>
                </Box>
                <Spacer />
                <Box w={'auto'}
                    m='auto'>
                <Heading size={['xs','sm','md']} p={[0.5,0.5,1]} >Cauliflower</Heading>
                <Heading size={['xs','sm','sm']} p={1}  color={'gray'}>250ml</Heading>
                <Image
                src="https://www.bbassets.com/static/v2627/custPage/build/content/img/vegicon.svg"
                h="6"
                w="6"
                
              />
                </Box>
                <Spacer />
                <Box w={'auto'}
                    m='auto'>
                    <CartQuantity/>
                </Box>
                <Spacer />
                <Box w={'auto'}
                    m='auto'>
                <Heading size={['xs',"",'md']}>₹ 2.99</Heading>
                </Box>
                <Spacer/>
                <Box w={'auto'}
                    m='auto'> <Icon as={DeleteIcon} boxSize={[5,6,7]} color="red" /></Box>
                </Flex>
             </Box>
            
           </GridItem>
           
           <GridItem colSpan={["2","2","1"]}>
            <TotalCheck />
           </GridItem>
        </Grid>
       </Box>
       </Box>
       <Footer />
       </Box>
       
    )
}

export default CartPages