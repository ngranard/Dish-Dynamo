import {
  Heading,
  Text,
  Box,
  Button,
  Flex,
  Img,
  Divider,
  VStack,
  useColorModeValue,
  Center,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import art_3 from "../assets/art_3.jpg";
import art_5 from "../assets/art_5.jpg";
import { SearchIcon } from "@chakra-ui/icons";
import Testimonials from "./Footer/Testimonials.tsx";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Main = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.05 });
  const [refTestimonials, inViewTestimonials] = useInView({ threshold: 0.2 });

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      m="0px"
      w="full"
      h="fit-content"
      alignItems="center"
      rounded="xl"
      pb={1}
    >
      <Box
        p="50px"
        bg={useColorModeValue("gray.100", "gray.700")}
        m="auto"
        boxShadow="md"
        w="fit-content"
        h={{ base: "80vh", md: "50vh" }}
        alignItems="center"
        rounded="xl"
      >
        <Stack
          bg={useColorModeValue("gray.300", "gray.500")}
          m="auto"
          mt={{ base: "50px", md: "0px" }}
          w="fit-content"
          h={{ base: "35vh", md: "25vh" }}
          alignItems="center"
          rounded="xl"
        >
          <Heading
            mb={{ base: "20px", md: "200px" }}
            as="h1"
            p="1"
            fontSize={{ base: "5xl", md: "7xl" }}
            mt={{ base: "10px", md: "100px" }}
          >
            <Center>Your Ingredients, Your Recipes</Center>
          </Heading>
          <Text
            p="3"
            pl={3}
            fontSize={{ base: "lg", md: "2xl" }}
            fontStyle="italic"
            mt={{ base: "20px", md: "320px" }}
          >
            Never struggle again with what to eat! Dish Dynamo is a recipe app
            that allows you to search for recipes based on the ingredients you
            have on hand.
          </Text>

          <Flex width="100%" justifyContent="center">
            <Link to="search">
              <Button
                rightIcon={<SearchIcon />}
                w="fit-content"
                p="6"
                px="20x"
                bg="blue.300"
                borderRadius="10px"
                mt="8"
                fontWeight="bold"
                color="white"
                fontSize="xl"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, blue.600)",
                }}
              >
                Get Started
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Box
        w="fit-content"
        h="fit-content"
        mx="auto"
        mt={{ base: "150px", md: "50px" }}
      >
        <Box
          border="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          borderRadius="lg"
          boxShadow="lg"
          overflow="hidden"
          mt={{ base: "-80px", md: "50px" }}
          ml={{ base: "20px", md: "20%" }}
          p={2}
          maxW={{ base: "90%", md: "80%", lg: "60%" }}
        >
          <VStack columns={{ base: 1, md: 2 }} spacing={4}>
            <motion.div
              ref={ref1}
              initial={{ x: "100%" }}
              animate={{ x: inView1 ? 1 : "70%" }}
              transition={{ duration: 1 }}
            >
              <Img
                src={art_5}
                alt="Hero image"
                objectFit="cover"
                w="100%"
                h={{ base: "350px", md: "600px" }}
              />
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ x: "100%" }}
              animate={{ x: inView2 ? 1 : "70%" }}
              transition={{ duration: 1 }}
            >
              <Img
                src={art_3}
                alt="Hero image"
                objectFit="cover"
                w="100%"
                h={{ base: "350px", md: "800px" }}
              />
            </motion.div>
          </VStack>
        </Box>
      </Box>
      <Divider />
      <motion.div
        ref={refTestimonials}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewTestimonials ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Testimonials />
      </motion.div>
    </Box>
  );
};

export default Main;
