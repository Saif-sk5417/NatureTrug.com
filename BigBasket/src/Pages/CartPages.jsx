
import {Box, Heading,Flex, Spacer,Grid, GridItem,Image,Icon, Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react";
import { FaShoppingBasket} from "react-icons/fa"
import CartQuantity from "../Components/Cart/CartQuantity";
import TotalCheck from "../Components/Cart/TotalCheck";
import {Navbar} from "../Components/Navbar";
import {DeleteIcon} from "@chakra-ui/icons"
import { Footer } from "../Components/Footer";
import Cart from "../Components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, RemoveFromCart } from "../Redux/AppReducer/action";
import { useEffect } from "react";
import { useToast } from "react-toastify";
import { EmptyCart } from "../Components/Cart/EmptyCart";
import { getDairyProductsData, RemoveDairyFromCart,getFoodProductsData,RemoveFoodFromCart } from '../Redux/AppReducer/action';
const CartPages = () =>
{
   const Products = useSelector((store) => store.AppReducer.Products)
   const cartData = Products.filter((el) => el.CartQuantity > 0)
   const Total = cartData.reduce((sum,el) => sum += el.Price * el.CartQuantity,0 )
   const dispatch = useDispatch()
   const handelDelete = (id) =>{
    if(id){
     dispatch(RemoveFromCart(id))
     .then(()=>{
        dispatch(getProductsData())
     })
    }
    if(id){
        dispatch(RemoveDairyFromCart(id))
        .then(()=>{
           dispatch(getDairyProductsData())
        })  
    }
    if(id){
        dispatch(RemoveFoodFromCart(id))
        .then(()=>{
           dispatch(getFoodProductsData())
        })  
    }
}
   useEffect(()=>{
    if(Products.length == 0){
      dispatch(getProductsData())
    }
  
   },[Products.length ,dispatch])
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
            {cartData.length == 0 ? <EmptyCart /> : 
            cartData.length > 0 && cartData.map((el) => {
                return (
                    <Cart 
                    key = {el.id}
                    id = {el.id} 
                    Weight = {el.Weight}
                    image = {el.Image}
                    name = {el.name}
                    CartQuantity = {el.CartQuantity}
                    price = {el.Price}
                    handelCartDelete = {handelDelete}
                    />
                )
            })
            }
           </GridItem>
           
           <GridItem colSpan={["2","2","1"]}>
            <TotalCheck CartDatalength={cartData.length} Total = {Total}/>
           </GridItem>
        </Grid>
       </Box>
       </Box>
       <Footer />
       </Box>
       
    )
}

export default CartPages