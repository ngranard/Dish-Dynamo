import { Heading, Text, Box, Button, Flex, Badge, Spacer, SimpleGrid, Image } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
    return (
        <>
            <Box maxW="2xl" m="0 auto">
                <Heading as="h1" textAlign="center" fontSize="7xl" mt="100px">
                    Your Ingredients, Your Recipes</Heading>
                <Text fontSize="xl" textAlign="center" mt="30px">

                    Never struggle again with what to eat! Dish Dynamo is a recipe app that allows you to search for recipes based on the ingredients you have on hand.
                </Text>
                <Text
                    w="fit-content"
                    p="4"
                    px="50px"
                    bg="blue.300"
                    borderRadius="10px"
                    m="0 auto"
                    mt="8"
                    fontWeight="bold"
                    color="white"
                    fontSize="xl"
                >
                    Get Started
                </Text>
            </Box>

            {/* <Box m="8" border="1px solid" borderColor="gray.400" w="300px" borderRadius="lg">
                <Box w="100%" h="200px" bg="gray.100" borderTopRadius="lg"></Box>
                <Box p="4">
                    <Badge fontSize="0.8em" colorScheme="red">
                        Popular
                    </Badge>
                    <Text fontSize="2xl" fontWeight="bold">
                        Brawhala
                    </Text>
                    <Text fontSize="xs" mb="6">
                        Toronto, Canada
                    </Text>
                    <Flex>
                        <Text fontSize="xs">Starting at $50/day</Text>
                        <Spacer />
                        <Button size="xs">Expand</Button>
                    </Flex>
                </Box>
            </Box> */}

            <Box mt={20}>
                <SimpleGrid columns={2}>
                    <Box>
                        <Image w="100%" m="0 auto" maxW="400px" h="300px" bg="gray.50" src="https://i.etsystatic.com/5174401/r/il/f4546c/8599523/il_680x540.8599523.jpg"></Image>
                    </Box>
                    <Box>
                        <Text fontSize="5xl" fontWeight="bold" maxW="600px">
                            How it works
                        </Text>
                        <Text mt={4} maxW="600px">
                            Using state of the art technology, we match you with the perfect recipe based on the ingredients you have on hand. No more wasting food or time!
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <Box mt={32} w="100%" bg="gray.200" py={20}>
                <Text maxW="800px" fontSize="3xl" textAlign="center" m="0 auto">
                    After using this app, I never have to worry about what I'm going to make for dinner. It's so easy to use and has saved me loads of time.
                </Text>
                <Text fontSize="xl" color="blue.500" mt={4} textAlign="center">
                    John Doe
                </Text>
                <Text fontSize="sm" textAlign="center">
                    CEO at Belky
                </Text>
            </Box>
        </>
    )
};
export default Main
