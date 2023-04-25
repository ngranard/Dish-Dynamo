import { Heading, Text, Box, Button, Flex, Img, Divider } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React from 'react'
import art_3 from '../assets/art_3.jpg'
import { SearchIcon } from '@chakra-ui/icons'
import Testimonials from './Testimonials.tsx';
import { useColorModeValue } from '@chakra-ui/react'


const Main = () => {
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.700")} m="auto" w="50vh" h="60vh"
                alignItems="center" rounded="xl" >
                <Heading as="h1" p="3" fontSize={{ base: '5xl', md: '7xl' }} mt={{ base: '50px', md: '100px' }}>
                    Your Ingredients, Your Recipes
                </Heading>
                <Text p="3" fontSize={{ base: 'lg', md: 'xl' }} mt={{ base: '20px', md: '30px' }}>
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
                    w="100%"
                    h="fit-content"

                />
            </Box>
            <Divider />
            <Testimonials />

        </>
    );
};
export default Main
