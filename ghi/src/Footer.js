import React from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
function Footer() {
    return (
        <Box mt={20} mb={12}>
            <Text fontSize="4xl" mt={12} fontWeight="bold" textAlign="center">
                Dish Dyanmo
            </Text>
            <Text
                fontSize="2xl"
                textAlign="center"
                maxW="800px"
                m="0 auto"
                borderBottom="1px #bbb solid"
                mt={4}
                pb={10}
            >
                We match your ingredients to the perfect recipes
            </Text>
            <SimpleGrid columns={3} w="max-content" gap={20} m="0 auto" mt={6}>
                <Text>Privacy</Text>
                <Text>About</Text>
                <Text>Contact Us</Text>
            </SimpleGrid>
        </Box>
    )
}
export default Footer
