import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const PlaceholderPage = ({ title = "Coming Soon!" }) => {
  return (
    <Box
      textAlign="center"
      py={20}
      px={6}
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, yellow.400, yellow.600)"
        backgroundClip="text"
      >
        {title}
      </Heading>
      <Text fontSize="18px" mt={3} mb={6}>
        This page is still under development. Check back soon!
      </Text>

      <Button
        as={RouterLink}
        to="/"
        colorScheme="yellow"
        variant="solid"
      >
        Go Back Home
      </Button>
    </Box>
  );
};

