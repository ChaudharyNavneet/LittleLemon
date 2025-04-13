import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import chef1 from "./../assets/chef1.jpg";
import chef2 from "./../assets/chef2.jpg";

export const Description = () => (
  <Box py={12} px={6}>
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={8}
      maxW="6xl"
      mx="auto"
    >
      <VStack align="start" spacing={4}>
        <Heading color="yellow.600">Little Lemon</Heading>
        <Heading size="md" color="gray.700">
          Chicago
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </Text>
      </VStack>
      <VStack spacing={4}>
        <Image
          borderRadius="lg"
          src={chef1}
          alt="Chef 1"
          backgroundPosition="center"
          maxH='250px'
        />
        <Image
          borderRadius="lg"
          src={chef2}
          alt="Chef 2"
          backgroundPosition="center"
          maxH='250px'
          
        />
      </VStack>
    </Grid>
  </Box>
);
