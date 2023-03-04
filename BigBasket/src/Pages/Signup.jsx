
import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddUser } from '../Redux/AuthReducer/action';
import { Navbar } from '../Components/Navbar';
// This a Signup page
const Signup = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    navigateTo(path);
  };
  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const SignupUser = () => {
    
    try {
      dispatch(AddUser(formData));
      toast({
        title: "Welcome to SignIn-Page.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigateTo("/login");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Navbar />
      <Box w="400px" mx="auto" mt={'10%'}>
        <Heading mb="4">Sign up</Heading>
        <form>
          <FormControl mb="4">
            <FormLabel>Name</FormLabel>
            <Input
            name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Input
            name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Mobile</FormLabel>
            <Input
            name="mobile"
              type="mobile"
              placeholder="Enter your mobile"
              value={formData.mobile}
              onChange={HandleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input
            name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={HandleChange}
            />
          </FormControl>
          <Button type="submit" onClick={SignupUser}>Submit</Button>
        </form>
      </Box>
    </>
  )
}

export default Signup
