import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.800" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>Contact us: contact@localnews.com | (123) 456-7890</Text>
        <Flex>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;