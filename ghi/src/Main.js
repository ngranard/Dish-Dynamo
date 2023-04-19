import { Heading, Text, Box, SimpleGrid, Image, Button, Flex, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";


import React from 'react'

const Main = () => {
    return (
        <>
            <Box maxW="2xl" m="0 auto" alignItems="center">
                <Heading as="h1" textAlign="center" fontSize="7xl" mt="100px">
                    Your Ingredients, Your Recipes
                </Heading>
                <Text fontSize="xl" textAlign="center" mt="30px">
                    Never struggle again with what to eat! Dish Dynamo is a recipe app that allows you to search for recipes based on the ingredients you have on hand.
                </Text>
                <Flex width="100%" justifyContent="center">
                    <Link to="search">
                        <Button
                            w="fit-content"
                            p="4"
                            px="50px"
                            bg="blue.300"
                            borderRadius="10px"
                            mt="8"
                            fontWeight="bold"
                            color="white"
                            fontSize="xl"
                        >
                            Get Started
                        </Button>
                    </Link>
                </Flex>
            </Box>
            <Box mt={20}>

                <SimpleGrid columns={1}>
                    <Box mt={31} w="100%" bg="gray.200" py={20}>
                        <Flex justifyContent="space-around">
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
                                    role: "CEO at Patty's",
                                },
                                // Add two more testimonials here with their own quotes, avatars, names, and roles.
                            ].map((testimonial) => (
                                <Flex direction="column" alignItems="center" justifyContent="center" maxW="300px">
                                    <Text fontSize="3xl" textAlign="center" minHeight="200px">
                                        {testimonial.quote}
                                    </Text>
                                    <Box minHeight="150px">
                                        <Flex direction="column" alignItems="center" justifyContent="center">
                                            <Avatar size="2xl" src={testimonial.avatar} />
                                        </Flex>
                                    </Box>
                                    <Flex direction="column" alignItems="center" justifyContent="center">
                                        <Text fontSize="xl" color="blue.500" mt={4} textAlign="center">
                                            {testimonial.name}
                                        </Text>
                                        <Text fontSize="sm" textAlign="center">
                                            {testimonial.role}
                                        </Text>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Box>
                </SimpleGrid >
            </Box>


        </>
    )
};
export default Main
