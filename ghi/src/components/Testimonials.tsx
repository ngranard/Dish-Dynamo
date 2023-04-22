import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"2xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"m"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Box>
        <Avatar src={src} mb={2} size="lg" />
      </Box>
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"m"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {[
            {
              heading: "Delicious Recipes",
              text: "I am simply a better cook because of this app. I can't believe how easy it is to use and how many recipes I can find.",
              src: "https://pbs.twimg.com/tweet_video_thumb/FAH749rVEAM8I9A.jpg",
              name: "Dan Flashes",
              title: "Patron at Truffoni's",
            },
            {
              heading: "Intuitive Design",
              text: "After using this app, I never have to worry about what I'm going to make for dinner. It's so easy to use and has saved me loads of time.",
              src: "https://imgs.search.brave.com/0CwXPIKoQYyG-Yg7C0_HJj-8r6W__5P0qbA9tBNdHls/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9zbndv/cmtzY2VvLmltZ2l4/Lm5ldC9pZHMvZjY4/Nzc5MmQtNmIyNi00/NWY5LWJkYWYtNGY5/Y2YwYTZiZDFkLnNp/emVkLTEwMDB4MTAw/MC5KUEc_dz0xMDAw",
              name: "Djimon Hounsou",
              title: "CEO at KraftPunk",
            },
            {
              heading: "Mindblowing",
              text: "You really can't go wrong with Dish Dynamo. It's the best recipe app I've ever used. Maybe even the best app I've ever used. Period.",
              src: "https://imgs.search.brave.com/Ezj_vAXHMuj-3sM1oKptaaD8NGpHDDflVspEJDcxX4s/rs:fit:670:960:1/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/ZmFjZWJvb2svMDAx/LzMzNC85MzcvMmQ4/LmpwZ19sYXJnZQ",
              name: "Frank Renolds",
              title: "Owner of Patty's Pub",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={testimonial.src}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </Testimonial>
            </motion.div>
          ))}
        </Stack>
      </Container>
      <Heading>
        <Button mb={4}>See the full list of testimonials</Button>
      </Heading>
    </Box>
  );
}

export default Testimonials;
