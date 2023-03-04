import { Container, Image, Flex, Grid, GridItem, InputGroup, InputRightElement, FormControl, FormLabel, Select, Input, Button, Heading, Box, border } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { GetProduct } from '../../Redux/AdminReducer/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';


const EditProduct = () => {
    const [dvalue, setDvalue] = useState("");   //default value for edit input from select option
    const [pid, setPid] = useState(0);    
    const[image,setImage]=useState("")          //product id to be searched
    const[category,setCategory]=useState("")          //product id to be searched
    const[price,setPrice]=useState(0)          //product id to be searched
    const[name,setName]=useState("")          //product id to be searched
    const dispatch=useDispatch()


    console.log(pid, dvalue)
    
    let Product = {
        "id": 1,
        "rating": 5,
        "name": "Onion (Loose)",
        "Image": "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
        "category": "Organic",
        "Price": 156,
        "Weight": "5 kg - Rs 156.00",
        "CartQuantity": 0
    }
 
    const newData=()=>{
       return  axios.patch(`http://localhost:8080/Products/${pid}`, {
            name: dvalue
          })
            .then(res => {
              console.log(res.data);
            })
            .catch(error => {
              console.log(error);
            });
    }

    const handleSubmit = () => {
        newData()
    }
    const GetProduct=(pid)=>{
        return axios.get(`https://nature-trug-database.vercel.app/Products/${pid}`)
        .then((res)=>{
            console.log(res)
            setImage(res.data.Image)
            setCategory(res.data.category)
            setPrice(res.data.Price)
            setName(res.data.name)
        })
        .catch((err)=>console.log(err))
        }
    const handleClick = () => {
        GetProduct(pid)
    }

   
    return (
        
        <Box>
            <Navbar/>
            <Box bgColor={"rgb(132, 194, 37)"} borderRadius="8px" m={"10px"} mt='180px' p='2'> <Heading color={"white"}>Add Product</Heading></Box>
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']} gap={6} padding="10px">
                {/* edit Product section */}
                <GridItem border={"1px solid black"} borderRadius="8px" p="20px" >
                    {/* select tag */}
                    <Heading mb={"10px"} >Edit Product</Heading>
                    <Flex gap="20px" direction={"column"}>


                        <FormControl>
                            <Select border={"2px solid rgb(132, 194, 37)"} value={dvalue} onChange={(e) => setDvalue(e.target.value)}>
                                <option value={name} onChange={(e) => setDvalue(e.target.value)}>Product Name</option>
                                <option value={category} onChange={(e) => setDvalue(e.target.value)}>Product Categoty</option>
                                <option value={price} onChange={(e) => setDvalue(e.target.value)}>Product Price</option>
                                <option value={image} onChange={(e) => setDvalue(e.target.value)}>Product Image</option>
                            </Select>
                        </FormControl>

                        {/* Input */}
                        <Input colorScheme="blue" border={"2px solid rgb(132, 194, 37)"} placeholder={dvalue || "Product Name" || "Product Category" || "Product Price" || "Product Image"} size='md' onChange={(e)=>setDvalue(e.target.value)} />

                        {/* button */}
                        <Button bgColor='rgb(132, 194, 37)' variant={'solid'} maxW="50%" margin={"auto"} onClick={handleSubmit}>Submit</Button>
                    </Flex>
                </GridItem>

                {/* Product to edit */}
                <GridItem border={"1px solid black"} borderRadius="8px" p="20px" >
                    <Heading mb={"10px"}>Edit Product</Heading>
                    <Flex gap="20px" direction={"column"} >
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                border={"2px solid rgb(132, 194, 37)"}
                                placeholder='Enter id' value={pid} onChange={(e) => setPid(e.target.value)} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}> Get </Button>
                            </InputRightElement>
                        </InputGroup>

                        {/* product details */}
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' m={"auto"}>
                            <Image src={image} alt={""} />

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    Name: {name}
                                </Box>
                                <Box
                                    // mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    Category: {category}
                                </Box>

                                <Box >
                                    Price: Rs{price}
                                    {/* <Box as='span' color='gray.600' fontSize='sm'>
                                        / wk
                                    </Box> */}
                                </Box>

                                <Box m="auto" mt='2'  >
                                    {Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                color={i < Product.rating ? 'teal.500' : 'gray.300'}
                                            />
                                        ))}

                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Footer />
        </Box>
    )
}

export { EditProduct }