import { Box, Container, Flex, Text, VStack, Image, Grid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={4}>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Image src="/images/top-news.jpg" alt="Top News" borderRadius="md" mb={4} />
              <Text fontSize="2xl" fontWeight="bold">
                Top News Story
              </Text>
              <Text>Details about the top news story...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Image src="/images/another-news.jpg" alt="Another News" borderRadius="md" mb={4} />
              <Text fontSize="2xl" fontWeight="bold">
                Another News Story
              </Text>
              <Text>Details about another news story...</Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
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
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Index;