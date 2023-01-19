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
    Box
  } from "@chakra-ui/react";
import AddToCart from "./AddToCart";
  import styles from './SingleCard.module.css'
  const SingleCard = ({name,image,Category,Price,Weights,rating}) => {
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
            <Text color="gray" fontSize="12px" fontWeight="bold">
               {rating}
            </Text>
            </Flex>
            <Text fontSize="13px"  color="gray" mt="20px">
              {" "}
              Standard Delivery: Tomorrow 9:00AM - 1:30PM
            </Text>
          </Stack>
          <Flex mt="20px">
            <Button bgColor="rgb(132, 194, 37)">
              <Text fontSize="12px" color="white" fontWeight="bold">
                BUY NOW
              </Text>
            </Button>
            <Spacer />
            {/* <Counter /> */}
            <AddToCart />
            {/* {count == 0 ? <Addbtn handleClick={handleClick} /> : <Counter  />} */}
          </Flex>
        </CardBody>
      </Card>
    );
  };
  export default SingleCard;