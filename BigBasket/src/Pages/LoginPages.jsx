

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
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
  
  export default function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const dispatch=useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
  
    const handlelogin=(e)=>{
      e.preventDefault()
      let userData={
        email,
        password
      }
    //   dispatch(login(userData)).then(()=>{
    //     navigate(location.state, { replace: true });
    //   });
    if(email==="abc@naturetrug.com" && password==="password"){
        alert("loginSuccesful");
        navigate(location.state, { replace: true });
      }else{
        alert("email or password does not match");
      }
    }

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Login to Nature Trug</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" 
              value={email} onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}
              onClick={handlelogin}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }