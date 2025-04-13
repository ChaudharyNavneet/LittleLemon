import {
  Flex,
  Image,
  Link,
  Spacer,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  VStack,
} from "@chakra-ui/react";
import logo from "./../assets/Logo.svg";
import hamburger  from "./../assets/hamburger.svg"


export const Header = () => {
  const linkHoverColor = useColorModeValue("yellow.500", "yellow.300");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "Menu", href: "menu" },
    { label: "Reservations", href: "reservations" },
    { label: "Order Online", href: "order" },
    { label: "Login", href: "login" },
  ];

  return (
    <Flex
      as="header"
      p={4}
      bg="white"
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.100"
      boxShadow="sm"
      wrap="wrap"
    >
      <Image src={logo} alt="Little Lemon" height="50px" />

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={
            <Image
              src={hamburger}
              alt="Menu"
              boxSize="30px"
              objectFit="cover"
              borderRadius="md"
            />
          }
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
        />
      </Box>

      <Flex
        as="nav"
        gap={6}
        display={{ base: "none", md: "flex" }}
        align="center"
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            fontWeight="semibold"
            fontSize="md"
            color="gray.700"
            _hover={{ color: linkHoverColor, textDecoration: "none" }}
            _focus={{ boxShadow: "outline", borderRadius: "md" }}
          >
            {label}
          </Link>
        ))}
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  fontWeight="semibold"
                  fontSize="lg"
                  color="gray.700"
                  _hover={{ color: linkHoverColor, textDecoration: "none" }}
                  onClick={onClose}
                >
                  {label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
