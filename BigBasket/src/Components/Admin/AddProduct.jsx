import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export const AddProduct=()=> {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
       
        <Stack spacing={8} w='100%' maxW={'2xl'} py={12} px={6}>
          {/* <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack> */}
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={25}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Product Name</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl >
                <FormLabel>Product Category</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl >
                <FormLabel>Product SubCategory</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl >
                <FormLabel>Product ImageURL</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl >
                <FormLabel>Product Price</FormLabel>
                <Input type="number" />
              </FormControl>
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack> */}
                <Button
                w={'40%'}
                margin='auto'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }