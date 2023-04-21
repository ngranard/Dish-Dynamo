import { Heading, Text, Box, SimpleGrid, Button, Flex, Avatar, Img } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React from 'react'
import art_3 from '../assets/art_3.jpg'
import { motion } from 'framer-motion';
import { SearchIcon } from '@chakra-ui/icons'


const Main = ({ footerHeight }) => {
    return (
        <>
            <Box maxW="2xl" m="0 auto" alignItems="center">
                <Heading as="h1" fontSize={{ base: '5xl', md: '7xl' }} mt={{ base: '50px', md: '100px' }}>
                    Your Ingredients, Your Recipes
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} mt={{ base: '20px', md: '30px' }}>
                    Never struggle again with what to eat! Dish Dynamo is a recipe app that allows you to search for recipes based on the ingredients you have on hand.
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
                                bgGradient: 'linear(to-r, blue.400, blue.600)',
                            }}
                        >
                            Get Started
                        </Button>
                    </Link>
                </Flex>
            </Box>
            <Box mt={{ base: '10', md: '20' }}>
                <Img
                    src={art_3}
                    alt="Hero image"
                    objectFit="cover"
                    w="fit-content"
                    h="fit-content"

                />
            </Box>
            <Box mt={{ base: '10', md: '20' }}>
                <SimpleGrid columns={1} spacing={{ base: '6', md: '10' }} mb={{ base: footerHeight, md: 0 }}>
                    <Box mt={31} w="100%" py={20}>

                        <Flex justifyContent="center">
                            <Flex
                                direction="row"
                                alignItems="stretch"
                                justifyContent="center"
                                w="fit-content"
                                h="fit-content"
                                wrap="wrap"
                            >
                                {[
                                    {
                                        quote:
                                            "I am simply a better cook because of this app. I can't believe how easy it is to use and how many recipes I can find.",
                                        avatar:
                                            "https://pbs.twimg.com/tweet_video_thumb/FAH749rVEAM8I9A.jpg",
                                        name: "Dan Flashes",
                                        role: "Patron at Truffoni's",
                                    },
                                    {
                                        quote:
                                            "After using this app, I never have to worry about what I'm going to make for dinner. It's so easy to use and has saved me loads of time.",
                                        avatar:
                                            "https://imgs.search.brave.com/0CwXPIKoQYyG-Yg7C0_HJj-8r6W__5P0qbA9tBNdHls/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9zbndv/cmtzY2VvLmltZ2l4/Lm5ldC9pZHMvZjY4/Nzc5MmQtNmIyNi00/NWY5LWJkYWYtNGY5/Y2YwYTZiZDFkLnNp/emVkLTEwMDB4MTAw/MC5KUEc_dz0xMDAw",
                                        name: "Djimon Hounsou",
                                        role: "CEO at KraftPunk",
                                    },
                                    {
                                        quote:
                                            "You really can't go wrong with Dish Dynamo. It's the best recipe app I've ever used. Maybe even the best app I've ever used. Period.",
                                        avatar:
                                            "https://imgs.search.brave.com/Ezj_vAXHMuj-3sM1oKptaaD8NGpHDDflVspEJDcxX4s/rs:fit:670:960:1/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/ZmFjZWJvb2svMDAx/LzMzNC85MzcvMmQ4/LmpwZ19sYXJnZQ",
                                        name: "Frank Renolds",
                                        role: "CEO at Patty's Pub",
                                    },
                                ].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Flex
                                            key={index}
                                            direction="column"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            maxW={{ base: '100%', md: '300px' }}
                                            bg="gray.400"
                                            borderRadius="lg"
                                            p={{ base: '2', md: '4' }}
                                            m={{ base: '2', md: '4' }}
                                            height="100%"
                                            boxShadow="md"
                                        >
                                            <Text fontSize={{ base: '2xl', md: '3xl' }} textAlign="center" minHeight={{ base: '100px', md: '200px' }}>
                                                {testimonial.quote}
                                            </Text>
                                            <Box>
                                                <Avatar size={{ base: 'lg', md: '2xl' }} src={testimonial.avatar} />
                                            </Box>
                                            <Flex direction="column" alignItems="center">
                                                <Text fontSize={{ base: 'md', md: 'xl' }} color="blue.500" mt={{ base: '2', md: '4' }} textAlign="center">
                                                    {testimonial.name}
                                                </Text>
                                                <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
                                                    {testimonial.role}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </motion.div>
                                ))}
                            </Flex>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    );
};
export default Main
