import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductsData } from "../Redux/AppReducer/action"
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    useToast,Grid,GridItem
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { StarIcon } from '@chakra-ui/icons'



const SingleProductPage = () => {
    const toast = useToast();
    const [SingleProduct, setSingleProduct] = useState({})
    const Products = useSelector((store) => store.AppReducer.Products)
    const dispatch = useDispatch()
    const { id } = useParams();
    const handleAdd = () => {
        alert("added to cart")
    }
    useEffect(() => {
        if (Products.length === 0) {
            dispatch(getProductsData())
        }
    }, [Products.length, dispatch])
    useEffect(() => {
        if (id) {
            const single = Products.find((el) => el.id === Number(id))
          
            single && setSingleProduct(single)
        }
    }, [id])
    return (
        // <div>
        //     SingleProductPage
        // </div>
        // <Box bgColor={"#A8C082"} border={"1px solid red"}>

        <Container maxW={'4xl'} >
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 5, md: 10 }}
            >
                <Flex
                //   border="2px solid red"
                >
                    <Image

                        rounded={'md'}
                        maxH={"sm"}
                        alt={'product image'}
                        src={
                            'https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg'
                        }
                        //   fit={'cover'}
                        align={'center'}
                        w={'80%'}
                        border
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}
                //   border="2px solid red"
                >
                    <Box as={'header'} >
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                            align="left">
                            {/* Automatic Watch */}
                            {SingleProduct.name}
                        </Heading>
                        <Text
                            // color={useColorModeValue('gray.900', 'gray.400')}
                            color={"#84C225"}
                            fontWeight={300}
                            fontSize={'2xl'}
                            align="left">
                            {/* $350.00 USD */}
                            Rs.{SingleProduct.Price}
                        </Text>
                        <Text
                            // color={useColorModeValue('gray.900', 'gray.400')}
                            color={"#84C225"}
                            fontWeight={300}
                            fontSize={'2xl'}
                            align="left">
                            {/* $350.00 USD */}
                            Category:{SingleProduct.category}
                        </Text>
                        <Text
                            // color={useColorModeValue('gray.900', 'gray.400')}
                            color={"#84C225"}
                            fontWeight={300}
                            fontSize={'2xl'}
                            align="left">
                            {/* $350.00 USD */}
                            Rating: {SingleProduct.rating}<StarIcon marginBottom={"11px"} />
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>


                    </Stack>

                    <Button
                        //   rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bgColor="#84C225"
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }} onClick={() =>
                            toast({
                                title: 'Success',
                                description: "Item Added to cart",
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            })
                        }>
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping color="#84C225" />
                        <Text color={"#84C225"}>with in 36 hour delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
            {/* for Similar Products */}

            {/* view more Products */}

            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                <GridItem colSpan={2} h='10' bg='gray.100'><Text fontSize={"xl"} minH={"100px"}></Text></GridItem>
                <GridItem colStart={4} colEnd={6} h='10' bg='gray.100' ><Text fontSize={"xl"}></Text></GridItem>
            </Grid>

        </Container>

    );
}

export default SingleProductPage



