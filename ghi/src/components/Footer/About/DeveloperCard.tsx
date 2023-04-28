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
  Center,
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
  const boxShadowColor = useColorModeValue("black", "white");

  return (
    <Center>
      <Box
        border="solid 1px"
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("gray.100", "gray.700")}
        boxShadow={"2xl"}
        rounded={"lg"}
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
            boxShadow={`0 0 0 3px ${boxShadowColor}`}
            borderColor={boxShadowColor}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {developer.name}
            </Heading>
            <Text color={useColorModeValue("gray.600", "gray.200")}>
              {developer.role}
            </Text>
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
    </Center>
  );
}
