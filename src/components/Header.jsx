import { Flex, Image, Link, Spacer, useColorModeValue } from "@chakra-ui/react";
import logo from "./../assets/Logo.svg";

export const Header = () => {
  const linkHoverColor = useColorModeValue("yellow.500", "yellow.300");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "Order Online", href: "/order" },
    { label: "Login", href: "/login" },
  ];

  return (
    <Flex
      as="header"
      p={4}
      bg="white"
      align="center"
      borderBottom="1px solid"
      borderColor="gray.100"
      boxShadow="sm"
    >
      <Image src={logo} alt="Little Lemon" height="50px" />
      <Spacer />
      <Flex as="nav" gap={6}>
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
    </Flex>
  );
};
