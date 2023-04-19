import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'
function Footer() {
    return (
        <footer id="footer" position="sticky" bottom="0">
            <Box mt={{ base: '10', md: '20' }}>
                <Text fontSize="2xl" mt={12} fontWeight="bold" textAlign="center">
                    Dish Dynamo
                </Text>
                <Text
                    fontSize="l"
                    textAlign="center"
                    maxW="800px"
                    m="0 auto"
                    borderBottom="1px #bbb solid"
                    mt={4}
                    pb={10}
                >
                    We match your ingredients to the perfect recipes
                </Text>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: '4', md: '20' }}
                    mt={{ base: '6', md: '12' }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text>Privacy</Text>
                    <Text>About</Text>
                    <Text>Contact Us</Text>
                </Stack>
            </Box>
        </footer>
    );
}

export default Footer
