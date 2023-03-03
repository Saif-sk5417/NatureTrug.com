import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Image,
  Text,
  Spacer,
  Heading,
  Select,
  Card,
  CardBody,
  useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { AddProducts } from '../../Redux/AdminReducer/action';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
export const AddProduct = () => {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const dispatch = useDispatch()

  const AddnewProduct = () => {
    let newProduct = {
      name,
      category,
      price,
      image
    }
    dispatch(AddProducts(newProduct))
    setName("")
    setCategory("")
    setPrice("")
    setImage("")
  }

  return (
    <>
    <Navbar/>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')} mt='50px'>
      
      <Stack spacing={8} w='100%' maxW={'2xl'} py={12} px={6} marginLeft={'10%'}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={25}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Product Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl >
              <FormLabel>Product Category</FormLabel>
              <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </FormControl>
            <FormControl >
              <FormLabel>Product ImageURL</FormLabel>
              <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </FormControl>
            <FormControl >
              <FormLabel>Product Price</FormLabel>
              <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                w={'40%'}
                margin='auto'
                // bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'white',
                  color:'black'
                }} onClick={AddnewProduct} bgColor="rgb(132, 194, 37)">
                Submit
              </Button>zzzzz
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Card w="320px" h="auto" m="auto"  pt="0px" mt="20px"
      boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" marginTop={'150px'}
      >
        <CardBody>
          <Box w="100%" h="20px">
            <Text
              fontSize="12px"
              color="#ba5253"
              fontWeight="bold"
              textAlign="right"
            >
              GET 49% OFF
            </Text>
          </Box>
          <Image
            pr ="20px"
            pl = "20px"
            src={image}
            alt={name}
            borderRadius="lg"
            h="200"
            w="85%"
            m="auto"
          />
          <Stack mt="3" spacing="0.5" textAlign="left">
            <Flex>
              <Text fontSize="12px" color="gray" fontWeight="bold">
               {category}
              </Text>
              <Spacer />
              <Image
                src="https://www.bbassets.com/static/v2627/custPage/build/content/img/vegicon.svg"
                h="6"
                w="6"
              />
            </Flex>
            <Heading size="md" paddingBottom="10px">
              {name}
            </Heading>
            <Select
              mt="10px"
              color="gray"
              fontSize="12px"
              fontWeight="bolder"
              size="sm"
              borderRadius="4px"
            >
              <option value="option2">250g - Rs 19.50</option>
            </Select>
            <Flex>
            <Text fontSize="12px" color="rgb(132, 194, 37)" fontWeight="bold">
              Price : ₹ {price}
              <span>
                <Text color="gray" fontSize="12px" fontWeight="bold">
                  MRP : <strike>RS 55.28</strike>
                </Text>
              </span>
            </Text>
            <Spacer />
            <StarIcon color='rgb(132, 194, 37)' />
            </Flex>
            <Text fontSize="13px"  color="gray" mt="20px">
              {" "}
              Standard Delivery: Tomorrow 9:00AM - 1:30PM
            </Text>
          </Stack>
          <Flex mt="20px">
            <Button bgColor="rgb(132, 194, 37)">
              <Text fontSize="12px" color="white" fontWeight="bold" _hover={{color:'black'}}>
                BUY NOW
              </Text>
            </Button>
            <Spacer />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
    <Footer/>
    </>
  );
}