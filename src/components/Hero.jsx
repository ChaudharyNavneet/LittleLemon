import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import food from "./../assets/food.jpg"

export const Hero=() => {
  const navigate = useNavigate();

  return (
    <Flex bg="#495E57" p={10} color="white" justify="space-between" align="center">
      <Box maxW="400px">
        <Heading color="#F4CE14">Little Lemon</Heading>
        <Text fontSize="xl" mt={1}>Chicago</Text>
        <Text mt={4}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Text>
        <Button mt={6} colorScheme="yellow" onClick={() => navigate('/reservations')}>
          Reserve a Table
        </Button>
      </Box>
      <Image  src={food} alt="Delicious food" borderRadius="lg" maxH='300px'  />
    </Flex>
  );
}
