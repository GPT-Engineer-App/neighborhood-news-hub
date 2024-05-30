import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Local News
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" px={2}>
            World
          </Link>
          <Link as={RouterLink} to="/local" px={2}>
            Local
          </Link>
          <Link as={RouterLink} to="/sports" px={2}>
            Sports
          </Link>
          <Link as={RouterLink} to="/entertainment" px={2}>
            Entertainment
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;