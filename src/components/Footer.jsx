import { Box, Stack, Text, Link } from '@chakra-ui/react';

export const Footer = () => (
  <Box bg="gray.900" color="white" py={6} mt={12}>
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      maxW="6xl"
      mx="auto"
      px={4}
    >
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </Text>
      <Stack direction="row" spacing={4}>
        <Link href="/#">Privacy</Link>
        <Link href="/#">Terms</Link>
        <Link href="/#">Contact</Link>
      </Stack>
    </Stack>
  </Box>
);
