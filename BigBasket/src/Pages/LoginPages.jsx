

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
    Hide
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import lo from "../../src/prologo.png"
  
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
      <Box bgColor={'#A8C082'} maxH={'sm'}>
        
      
      {/* <Container maxW='6xl'  centerContent border={"2px solid red"} borderRadius="8px" padding={"10px 50px "}> */}
      <Stack m="auto" maxW='6xl'maxH={'700px'} direction={{ base: 'column', md: 'row' }} border={"2px solid #84C225"}  backgroundColor={"white"}   >
      <Hide below='md'><Flex flex={1}>
      
          <Image
            alt={'Login Image'}
            boxSize='690px'
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
              value={email} onChange={(e)=>setEmail(e.target.value)} _focusVisible={{ border : "2px solid #84C225"}}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"#84C225"} >Password</FormLabel>
              <Input type="password"
              value={password} onChange={(e)=>setPassword(e.target.value)} _focusVisible={{ border : "2px solid #84C225"}}
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
              <Button bgColor={"#84C225"} _hover={{ background: "#4cbb17"  }} variant={'solid'}
              onClick={handlelogin}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
        {/* <Flex flex={1}>
          <Image
            alt={'Login Image'}
            boxSize='662px'
            objectFit={'cover'}
            src={
              './Images/Login/Side-image.jpg'
            }
          />
        </Flex> */}
      </Stack>
      {/* </Container> */}
    </Box>
    );
  }