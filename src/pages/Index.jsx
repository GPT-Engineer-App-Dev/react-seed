import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
          <Flex>
            <Link href="#" mx={2}>Home</Link>
            <Link href="#" mx={2}>About</Link>
            <Link href="#" mx={2}>Contact</Link>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app using Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="center">
          <Text>&copy; 2023 MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;