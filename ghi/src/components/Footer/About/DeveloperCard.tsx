import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  LinkBox,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface Developer {
  name: string;
  role: string;
  avatar: string;
  backgroundImage: string;
  linkedinUrl: string;
  gitlabUrl: string;
}

interface DeveloperCardProps {
  developer: Developer;
}
export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      border={"1px solid"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image
        h={"120px"}
        w={"full"}
        src={developer.backgroundImage}
        objectFit={"cover"}
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={developer.avatar}
          boxShadow="0 0 0 2px white"
          borderColor="white"
        />
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {developer.name}
          </Heading>
          <Text color={"gray.500"}>{developer.role}</Text>
        </Stack>
        <Flex justify={"center"} mt={4}>
          <LinkBox as="span" cursor="pointer">
            <Link href={developer.linkedinUrl} isExternal>
              <Icon as={FaLinkedin} w={8} h={8} mr={2} />
            </Link>
          </LinkBox>
          <LinkBox as="span" cursor="pointer">
            <Link href={developer.gitlabUrl} isExternal>
              <Icon as={FaGithub} w={8} h={8} />
            </Link>
          </LinkBox>
        </Flex>
      </Box>
    </Box>
  );
}
