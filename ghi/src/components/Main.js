import { Heading, Text, Box, Button, Flex, Img, Divider, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import art_3 from "../assets/art_3.jpg";
import art_5 from "../assets/art_5.jpg";
import { SearchIcon } from "@chakra-ui/icons";
import Testimonials from "./Testimonials.tsx";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Main = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
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
                w="fit-content"
                h="60vh"
                alignItems="center"
                rounded="xl"
            >
                <Box
                    bg={useColorModeValue("gray.300", "gray.500")}
                    m="auto"
                    w="fit-content"
                    h={{ base: "35vh", md: "25vh" }}
                    alignItems="center"
                    rounded="xl"
                >
                    <Heading

                        as="h1"
                        p="1"
                        fontSize={{ base: "5xl", md: "7xl" }}
                        mt={{ base: "50px", md: "100px" }}
                    >
                        Your Ingredients, Your Recipes
                    </Heading>
                    <Text
                        p="3"
                        pl={3}
                        fontSize={{ base: "lg", md: "xl" }}
                        mt={{ base: "20px", md: "30px" }}
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
                                    bgGradient: "linear(to-r, blue.400, blue.600)"
                                }}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
            <Box mt={-20} w="fit-content" h="fit-content" mx="auto">
                <Box
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    borderRadius="lg"
                    boxShadow="lg"
                    overflow="hidden"
                    mt={-5}
                    ml={{ base: "20px", md: "20%" }}
                    p={2}
                    maxW={{ base: "90%", md: "80%", lg: "60%" }}
                >
                    <VStack columns={{ base: 1, md: 2 }} spacing={4}>

                        <Img
                            src={art_5}
                            alt="Hero image"
                            objectFit="cover"
                            w="100%"
                            h={{ base: "350px", md: "600px" }}
                        />

                        <Img
                            src={art_3}
                            alt="Hero image"
                            objectFit="cover"
                            w="100%"
                            h={{ base: "350px", md: "800px" }}
                        />

                    </VStack>
                </Box>
            </Box>
            <Divider />
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <Testimonials />
            </motion.div>
        </Box>
    );
};

export default Main;
