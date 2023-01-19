import { Flex, Button, Spacer, Text } from "@chakra-ui/react";
const Quantity = () => {
  return (
    <Flex>
      <Button color="rgb(132, 194, 37)" variant="link">
        <Text fontSize="25px">-</Text>
      </Button>
      <Spacer />
      <Button variant="link">1</Button>
      <Spacer />
      <Button color="rgb(132, 194, 37)" variant="link">
        <Text fontSize="25px">+</Text>
      </Button>
    </Flex>
  );
};
export default Quantity;