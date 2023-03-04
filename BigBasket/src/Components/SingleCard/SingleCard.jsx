import { StarIcon } from "@chakra-ui/icons";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    Select,
    Flex,
    Spacer,
    Box,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverHeader,
    Popover
  } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import Counter from "./Counter";
  import styles from './SingleCard.module.css'
  const SingleCard = ({name,image,Category,Price,Weights,rating,id,CartQuantity}) => {
    return (
      <Card w="320px" h="auto" m="auto" className={styles.card} pt="0px" mt="20px"
      boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
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
               {Category}
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
              placeholder={Weights}
              mt="10px"
              color="gray"
              fontSize="12px"
              fontWeight="bolder"
              size="sm"
              borderRadius="4px"
            >
              <option value="option1">{Weights}</option>
              <option value="option2">250g - Rs 19.50</option>
            </Select>
            <Flex>
            <Text fontSize="12px" color="rgb(132, 194, 37)" fontWeight="bold">
              Price : ₹ {Price}
              <span>
                <Text color="gray" fontSize="12px" fontWeight="bold">
                  MRP : <strike>RS 55.28</strike>
                </Text>
              </span>
            </Text>
            <Spacer />
            <StarIcon color='rgb(132, 194, 37)' />
            <Text color="gray" fontSize="12px" fontWeight="bold" ml='5px'>
             {rating}/5
            </Text>
            </Flex>
            <Text fontSize="13px"  color="gray" mt="20px">
              {" "}
              Standard Delivery: Tomorrow 9:00AM - 1:30PM
            </Text>
          </Stack>
          <Flex mt="20px">
          {CartQuantity === 0 ? 
          <Popover>
          <PopoverTrigger>
          <Button bgColor="rgb(132, 194, 37)">
              <Text fontSize="12px" color="white" fontWeight="bold">
                BUY NOW
              </Text>
            </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight='bold' bg='#30d238d9' color ='white'>Add it to cart First!</PopoverHeader>
            </PopoverContent>
          </Popover> 
          : 
           <NavLink to = '/Cart'><Button bgColor="rgb(132, 194, 37)">
           <Text fontSize="12px" color="white" fontWeight="bold">
             BUY NOW
           </Text>
           </Button></NavLink>
       }
            <Spacer />
             {CartQuantity === 0 ? <AddToCart id = {id} /> : <Counter id = {id} CartQuantity ={CartQuantity}/>}
          </Flex>
        </CardBody>
      </Card>
    );
  };
  export default SingleCard;