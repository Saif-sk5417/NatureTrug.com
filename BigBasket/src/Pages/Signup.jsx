
import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
// This a Signup page
const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

      const handleSubmit = (event) => {
        event.preventDefault();
      const payload={
        formData
      }
      console.log(payload)
      };
  return (
    <Box w="400px" mx="auto">
  <Heading mb="4">Sign up</Heading>
  <form onSubmit={handleSubmit}>
    <FormControl mb="4">
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </FormControl>
    <Button type="submit">Submit</Button>
  </form>
</Box>
  )
}

export default Signup
