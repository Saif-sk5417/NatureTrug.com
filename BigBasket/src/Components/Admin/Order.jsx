import {
    Box,
    Heading,
    Text,
    Icon,
    Flex,
    Spacer,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
  } from "@chakra-ui/react";
  import { WarningIcon, CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
  const Order = () => {
    return (
      <Box w="95%" h="auto" m="auto" mt="20px">
        <Box
          h="auto"
          w="100%"
          m="auto"
          mt="15px"
          mb="15px"
          p="8px"
          borderRadius="11px"
          color="white"
          fontWeight="bold"
          bgColor="rgb(132, 194, 37)"
        >
          <Heading size="lg"> Orders</Heading>
        </Box>
  
        <Box
          h="auto"
          w="100%"
          m="auto"
          mt="15px"
          mb="15px"
          p="8px"
          textAlign="left"
          bgColor="pink"
        >
          <Box w="13%">
            <Flex>
              <Icon as={WarningIcon} color="orange" p="auto" boxSize={5} />
              <Spacer />
              <Text fontSize="15px">Order In-process</Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Heading size="xs">SR NO.</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-ID</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-NAME</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-QUANTITY</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-PRICE</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-STATUS</Heading>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>433</Td>
                  <Td>Vanilla Bean</Td>
                  <Td>1</Td>
                  <Td>Rs 49.88</Td>
                  <Td>
                    <Button colorScheme="red">In-process</Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>433</Td>
                  <Td>Vanilla Bean</Td>
                  <Td>1</Td>
                  <Td>Rs 49.88</Td>
                  <Td>
                    <Button colorScheme="red">In-process</Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        {/*  */}
        <Box
          h="auto"
          w="100%"
          m="auto"
          mt="15px"
          mb="15px"
          p="8px"
          textAlign="left"
          bgColor="blue.200"
        >
          <Box w="13%">
            <Flex>
              <Icon as={CheckCircleIcon} color="green" p="auto" boxSize={5} />
              <Spacer />
              <Text fontSize="15px">Order Completed</Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Heading size="xs">SR NO.</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-ID</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-NAME</Heading>
                  </Th>
  
                  <Th>
                    <Heading size="xs">ORDER-PRICE</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">ORDER-STATUS</Heading>
                  </Th>
                  <Th>
                    <Heading size="xs">REMOVE</Heading>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>433</Td>
                  <Td>Vanilla Bean</Td>
  
                  <Td>Rs 49.88</Td>
                  <Td>
                    <Button colorScheme="green">Delivered</Button>
                  </Td>
                  <Td>
                    <Box
                      w="36px"
                      h="auto"
                      bgColor="red"
                      p="10px"
                      borderRadius="8px"
                    >
                      <Icon as={DeleteIcon} color="white" />
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>433</Td>
                  <Td>Vanilla Bean</Td>
  
                  <Td>Rs 49.88</Td>
                  <Td>
                    <Button colorScheme="green">Delivered</Button>
                  </Td>
                  <Td>
                    <Box
                      w="36px"
                      h="auto"
                      bgColor="red"
                      p="10px"
                      borderRadius="8px"
                    >
                      <Icon as={DeleteIcon} color="white" />
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  };
  export {Order};
  