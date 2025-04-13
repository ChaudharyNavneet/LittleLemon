import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Card,
  CardBody,
  Flex,
  Stack
} from "@chakra-ui/react";
import salad from "./../assets/greek-salad.jpg";
import bruschetta from "./../assets/bruchetta.svg";
import lemon from "./../assets/lemon-dessert.jpg";
import { useNavigate } from "react-router-dom";

const specials = [
  {
    name: "Greek salad",
    price: "$12.99",
    image: salad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
  },
  {
    name: "Bruschetta",
    price: "$5.89",
    image: bruschetta,
    description:
      "Our Bruschetta is made from grilled bread with garlic and seasoned with olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemon,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient is authentic.",
  },
];

export const Specials = () => {
  const navigate= useNavigate()
  return (
    <Box p={{ base: 4, md: 10 }} maxW="1200px" mx="auto">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={4}
        mb={8}
      >
        <Heading size="lg">This week’s specials!</Heading>
        <Button colorScheme="yellow" size="md" onClick={() => navigate('/menu')}>
          Online Menu
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {specials.map((item, index) => (
          <Card
            key={index}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
          >
            <Image
              src={item.image}
              alt={item.name}
              height="200px"
              width="100%"
              objectFit="cover"
            />
            <CardBody>
              <Stack spacing={3}>
                <Flex justify="space-between" align="center" fontWeight="bold">
                  <Text fontSize="lg">{item.name}</Text>
                  <Text color="tomato" fontSize="md">
                    {item.price}
                  </Text>
                </Flex>
                <Text fontSize="sm" color="gray.600">
                  {item.description}
                </Text>
                <Button size="sm" colorScheme="yellow" width="fit-content">
                  Order a delivery
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};
