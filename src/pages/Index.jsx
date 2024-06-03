import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center" flexDirection={{ base: "column", md: "row" }}>
            <Text fontSize="xl" fontWeight="bold" mb={{ base: 2, md: 0 }}>My Website</Text>
            <Flex flexDirection={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }}>
              <Link href="#" mx={2} my={{ base: 1, md: 0 }}>Home</Link>
              <Link href="#" mx={2} my={{ base: 1, md: 0 }}>About</Link>
              <Link href="#" mx={2} my={{ base: 1, md: 0 }}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a simple React app with a basic structure.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4} mt="auto">
        <Container maxW="container.md">
          <Text textAlign={{ base: "center", md: "left" }}>© 2023 My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;