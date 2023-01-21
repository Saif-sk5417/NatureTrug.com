import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { VscPassFilled } from "react-icons/vsc"
import { NavLink } from 'react-router-dom'
// import { FaShoppingBasket } from "react-icons/fa"

export  const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bg={'#75c532'}>Place Order</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:"flex", alignItems:"center"}}>
            {/* <Lorem count={2} /> */}
            <p>Your Order Placed Successfully</p> <VscPassFilled color='green' fontSize={"20px"} />
          </ModalBody>

          <ModalFooter>
          <NavLink to={'/'}><Button colorScheme='green' mr={3} onClick={onClose}>
              Close
            </Button></NavLink> 
            <NavLink to={'/Fruites&Vegetables'}><Button variant='ghost'> Continue Shopping</Button></NavLink> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
