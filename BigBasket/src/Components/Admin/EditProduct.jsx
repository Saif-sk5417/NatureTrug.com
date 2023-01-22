import { Container, Image, Flex, Grid, GridItem, InputGroup, InputRightElement, FormControl, FormLabel, Select, Input, Button, Heading, Box, border } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';


const EditProduct = () => {
    const [dvalue, setDvalue] = useState("");   //default value for edit input from select option
    const [pid, setPid] = useState(0);              //product id to be searched
    


    console.log(pid, dvalue)
    console.log
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


    const handleSubmit = () => {
        

    }
    const handleClick = () => {
        console.log(pid,dvalue)
    }

   
    return (
        
        <Box>
            <Box bgColor={"#3182CE"} borderRadius="8px" m={"10px"}> <Heading color={"white"}>Add Product</Heading></Box>
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']} gap={6} padding="10px">
                {/* edit Product section */}
                <GridItem border={"1px solid black"} borderRadius="8px" p="20px" >
                    {/* select tag */}
                    <Heading mb={"10px"}>Edit Product</Heading>
                    <Flex gap="20px" direction={"column"}>


                        <FormControl>
                            <Select border={"2px solid #3182CE"} value={dvalue} onChange={(e) => setDvalue(e.target.value)}>
                                <option value={"name"} difault defaultChecked>Product Name</option>
                                <option value={"category"}>Product Categoty</option>
                                <option value={"Price"}>Product Price</option>
                                <option value={"Image"}>Product Image</option>
                            </Select>
                        </FormControl>

                        {/* Input */}
                        <Input colorScheme="blue" border={"2px solid #3182CE"} placeholder={dvalue || "Product Name"} size='md' />

                        {/* button */}
                        <Button colorScheme="blue" variant={'solid'} maxW="50%" margin={"auto"} onClick={handleSubmit}>Submit</Button>
                    </Flex>
                </GridItem>

                {/* Product to edit */}
                <GridItem border={"1px solid black"} borderRadius="8px" p="20px" >
                    <Heading mb={"10px"}>Edit Product</Heading>
                    <Flex gap="20px" direction={"column"} >
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                border={"2px solid #3182CE"}
                                placeholder='Enter id' value={pid} onChange={(e) => setPid(e.target.value)} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}> Get </Button>
                            </InputRightElement>
                        </InputGroup>

                        {/* product details */}
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' m={"auto"}>
                            <Image src={Product.Image} alt={""} />

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    Name: {Product.name}
                                </Box>
                                <Box
                                    // mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    Category: {Product.category}
                                </Box>

                                <Box >
                                    Price: Rs{Product.Price}
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
        </Box>
    )
}

export { EditProduct }