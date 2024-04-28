import { Box, Flex, Heading, Text, Image, Link, VStack, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580129924992-02eaa9a5509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGVzdGVyJTIwQXJ0aHVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE0Mjg4NTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chester Arthur" mb={4} />
        <Heading as="h2" size="xl" fontWeight="bold" color="primary.800">
          Chester Arthur
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Software Engineer | Tech Enthusiast | Open Source Contributor
        </Text>
      </Box>

      <VStack spacing={4} align="center">
        <Text fontSize="md" color="gray.500">
          Welcome to my personal website! I'm a passionate software engineer with a focus on modern web technologies and open source projects. Explore my work, follow my updates, and feel free to connect with me.
        </Text>
        <Box py={4}>
          <Link href="mailto:chester.arthur@example.com" isExternal>
            <Icon as={FaEnvelope} w={6} h={6} mx={2} />
          </Link>
          <Link href="https://www.linkedin.com/in/chester-arthur" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} mx={2} />
          </Link>
          <Link href="https://github.com/chesterarthur" isExternal>
            <Icon as={FaGithub} w={6} h={6} mx={2} />
          </Link>
          <Link href="https://twitter.com/chester_arthur" isExternal>
            <Icon as={FaTwitter} w={6} h={6} mx={2} />
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
