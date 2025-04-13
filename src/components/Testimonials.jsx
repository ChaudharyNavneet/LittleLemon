import { Box, Heading, HStack, VStack, Text, Avatar } from '@chakra-ui/react';

import p1 from './../assets/p1.jpg';
import p2 from './../assets/p2.jpg';
import p3 from './../assets/p3.jpg';
import p4 from './../assets/p4.jpg';

const testimonials = [
  {
    name: 'Maria Sanchez',
    quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    stars: 5,
    image: p1,
  },
  {
    name: 'Antony Clifton',
    quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    stars: 5,
    image: p2,
  },
  {
    name: 'Tamika Jackson',
    quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    stars: 4,
    image:p3,
  },
  {
    name: 'Brandon Ming',
    quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    stars: 4,
    image: p4,
  }
];

export const Testimonials = () => (
  <Box bg="teal.700" py={12} px={6} color="white">
    <Heading textAlign="center" mb={10}>What people say about us!</Heading>
    <HStack spacing={6} justify="center" flexWrap="wrap">
      {testimonials.map((t, i) => (
        <Box key={i} bg="white" color="black" borderRadius="lg" p={6} w="250px">
          <VStack spacing={3}>
            <Avatar name={t.name} src={t.image} />
            <Text fontWeight="bold">{t.name}</Text>
            <Text fontSize="sm" color="gray.600">{'★'.repeat(t.stars)}</Text>
            <Text fontSize="sm">{t.quote}</Text>
          </VStack>
        </Box>
      ))}
    </HStack>
  </Box>
);
