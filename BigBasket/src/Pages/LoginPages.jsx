

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Container,
  Box,
  Hide,
  useToast,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import lo from "../../src/prologo.png"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';
import { SetUserDataAfterLogin } from '../Redux/AuthReducer/action';
import axios from 'axios';

export default function Login() {

  // const dispatch=useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state || { data: '/' }
  console.log(state.data)
  const toast = useToast()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signUppage = () => {
    navigate("/signup")
  }

  const LoginUser = () => {
    try {
      let users = axios.get("https://naturetest.onrender.com/Users")
        .then((response) => {
          console.log(response)
          let login = response.data.find((item) => {
            return (
              item.email === formData.email &&
              item.password === formData.password
            );
          });
          if (
            formData.email === "NatureTrug@admin.com" &&
            formData.password === "@Admin"
          ) {
            navigate("/Dash");
          } else if (login) {
            dispatch(SetUserDataAfterLogin(login));
            toast({
              title: "Welcome to BigBasket.",
              description: "Successfully Logged in...",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/");
          } else {
            toast({
              title: "Invalid Credential.",
              description: "",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  // const handlelogin=(e)=>{
  //   e.preventDefault()
  //  if(email === 'NatureTrug@user.com' && password ==='@User')
  //  {
  //   dispatch({type : LOGIN_SUCCESS})
  //     navigate(state.data,{replace : true} )
  //   toast({
  //     position: 'top',
  //     title: 'Successful',
  //     description: "User Logged in Successfull",
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true,
  //   })
  //  }
  //  else if (email == 'NatureTrug@admin.com' && password =='@Admin')
  //  {
  //   dispatch({type : LOGIN_SUCCESS})
  //     navigate('/Dash' ,{replace : true})
  //   toast({
  //     position: 'top',
  //     title: 'Successful',
  //     description: "Admin Logged in Successfull",
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true,
  //   })
  //  }
  //  else{
  //   dispatch({type : LOGIN_FAILURE})
  //    toast({
  //     position: 'top',
  //     title: 'Unuccessful',
  //     description: "Wrong Credentials",
  //     status: 'error',
  //     duration: 3000,
  //     isClosable: true,
  //   })
  //   setEmail("")
  //   setPassword("")
  //  }
  // }

  return (
    <Box bgColor={'#84C225'} maxH={'sm'}>


      {/* <Container maxW='6xl'  centerContent border={"2px solid red"} borderRadius="8px" padding={"10px 50px "}> */}
      <Stack m="auto" maxW='6xl' maxH={'650px'} direction={{ base: 'column', md: 'row' }} backgroundColor={"white"}   >
        <Hide below='md'><Flex flex={1}>

          <Image
            alt={'Login Image'}
            boxSize='650px'
            // border="2px solid red"
            objectFit={'cover'}
            src={
              './Images/Login/Side-image.jpg'
            }
          />
        </Flex></Hide>
        <Flex p={0} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} padding="30px" >
            {/* <Image  boxSize='200px' objectFit='over' src={lo} alt='nature trug' margin="auto" /> */}
            <Heading fontSize={'3xl'} color={"#84C225"} >Login</Heading>
            <FormControl id="email">
              <FormLabel color={"#84C225"} >Email address</FormLabel>
              <Input type="email"
                name="email"
                value={formData.email} onChange={HandleChange} _focusVisible={{ border: "2px solid #84C225" }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"#84C225"} >Password</FormLabel>
              <Input type="password"
                name="password"
                value={formData.password}
                onChange={HandleChange} _focusVisible={{ border: "2px solid #84C225" }}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox colorScheme='green' defaultChecked >Remember me</Checkbox>
                <Link color={'#84C225'} >Forgot password?</Link>
              </Stack>
              <Button bgColor={"#84C225"} _hover={{ background: "#4cbb17" }} variant={'solid'}
                onClick={LoginUser}>
                Login
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have a account?{" "}
                  <Link color={"blue.400"} onClick={signUppage}>
                    SignUp
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}