import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text fontSize="2xl" fontWeight="bold">
                Top News Story
              </Text>
              <Text>Details about the top news story...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text fontSize="2xl" fontWeight="bold">
                Another News Story
              </Text>
              <Text>Details about another news story...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1">
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">
                Trending News
              </Text>
              <Text>Details about trending news...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">
                Advertisement
              </Text>
              <Text>Ad content...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;