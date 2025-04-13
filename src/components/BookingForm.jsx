import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

export const BookingForm = ({availableTimes}) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Submitted:", formData);
    onOpen(); // Show modal when submitted
  };

  return (
    <Box p={10} maxW="lg" mx="auto">
      <Heading mb={6}>Reserve a Table</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Time</FormLabel>
            <Select name="time" value={formData.time} onChange={handleChange}>
              <option value="">Select</option>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Guests</FormLabel>
            <Input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Occasion</FormLabel>
            <Select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="yellow" width="full">
            Reserve
          </Button>
        </VStack>
      </form>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reservation Confirmed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Thank you, <b>{formData.name}</b>! Your table is reserved on{" "}
              <b>{formData.date}</b> at <b>{formData.time}</b> for{" "}
              <b>{formData.guests}</b> guest(s).
            </Text>
            {formData.occasion && (
              <Text mt={2}>
                Occasion: <b>{formData.occasion}</b>
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
