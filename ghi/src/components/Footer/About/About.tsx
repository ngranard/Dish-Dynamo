import {
  Heading,
  Container,
  Box,
  VStack,
  Center,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { Developer, DeveloperCard } from "./DeveloperCard.tsx";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (emblaApi) {
        if (event.key === "ArrowLeft") {
          emblaApi.scrollPrev();
        } else if (event.key === "ArrowRight") {
          emblaApi.scrollNext();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [emblaApi]);

  const developers: Developer[] = [
    {
      name: "Brandon",
      role: "Fullstack Engineer",
      avatar:
        "https://media.licdn.com/dms/image/D5603AQGgg85iuDL4CQ/profile-displayphoto-shrink_800_800/0/1671564341578?e=1687996800&v=beta&t=vFWg2YW-Rr_vmRqgA8zb7vjt7fFIYlzkqPszHurCvAw",
      backgroundImage:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      linkedinUrl: "https://www.linkedin.com/in/brandon-souvannarath/",
      gitlabUrl: "https://gitlab.com/brandonsouv",
    },
    {
      name: "John",
      role: "Fullstack Engineer",
      avatar:
        "https://media.licdn.com/dms/image/D5635AQGsAl-8s0f3NA/profile-framedphoto-shrink_800_800/0/1662515617888?e=1683151200&v=beta&t=ZBRlZ831h8ObfR0g5d2x03JvLEp3eKs0jbno16OtSTo",
      backgroundImage:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      linkedinUrl: "https://www.linkedin.com/in/john-agni/",
      gitlabUrl: "https://gitlab.com/ohtheagni",
    },
    {
      name: "Noah",
      role: "Fullstack Engineer",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQHq6MiwPEqIKQ/profile-displayphoto-shrink_800_800/0/1680584185804?e=1687996800&v=beta&t=_0FVbLOZGVlsgGK7ib27fgrNTLw9CJ3DiOWc_jZQHRI",
      backgroundImage:
        "https://media.licdn.com/dms/image/D5616AQFAojzP2SD9rg/profile-displaybackgroundimage-shrink_350_1400/0/1680643153881?e=1687996800&v=beta&t=8eYuJBDJDyXd9Aat3GwSYFHiOgDaN5nUuMX3ATbAqRI",
      linkedinUrl: "https://www.linkedin.com/in/noahgranard/",
      gitlabUrl: "https://gitlab.com/ngranard",
    },
    {
      name: "Tenzing",
      role: "Fullstack Engineer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      backgroundImage:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      linkedinUrl: "https://www.linkedin.com/in/noahgranard/",
      gitlabUrl: "https://gitlab.com/TenzingK0",
    },
  ];

  return (
    <VStack
      bgGradient={useColorModeValue(
        "linear(to-r, blue.100, purple.700)",
        "linear(to-r, gray.300, purple.900)"
      )}
      minHeight="100vh"
      spacing={12}
      py={7}
    >
      <Center>
        <VStack spacing={3}>
          <Heading as="h1" size="2xl" fontWeight="Medium">
            About Dish Dynamo
          </Heading>
          <Divider borderColor="gray.500" w="100%" />
        </VStack>
      </Center>
      <Container maxW="container.lg">
        <Box
          p={6}
          borderRadius="md"
          bg={useColorModeValue("gray.100", "gray.700")}
          boxShadow="base"
        >
          <Text fontSize="lg">
            Dish Dynamo is an app that helps users figure out what to eat.
            Developed by a talented team of engineers, the app aims to
            revolutionize the way people think about cooking.
          </Text>
        </Box>
      </Container>
      <Center>
        <VStack spacing={3}>
          <Heading as="h2" size="xl" fontWeight="light">
            Meet the Team
          </Heading>
          <Divider borderColor="gray.500" w="100%" />
        </VStack>
      </Center>
      <Box
        position="relative"
        width="100%"
        maxWidth="container.lg"
        margin="auto"
      >
        <Box
          ref={emblaRef}
          overflow="hidden"
          width="100%"
          maxWidth="container.lg"
          margin="auto"
          pb="20px"
        >
          <Box display="flex">
            {developers.map((developer) => (
              <Box
                key={developer.name}
                width="100%"
                paddingBottom={5}
                flex="0 0 auto"
              >
                <DeveloperCard developer={developer} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Center py={6}>
        {developers.map((_, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            bgColor={selectedIndex === index ? "gray.700" : "gray.300"}
            borderRadius="full"
            boxSize={4}
            marginLeft={2}
            marginRight={2}
            _focus={{ outline: "none" }}
          />
        ))}
      </Center>
    </VStack>
  );
}
