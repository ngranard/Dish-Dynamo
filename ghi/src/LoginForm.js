import React from 'react';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { useState } from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { token, login } = useToken();

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password);
        console.log(token)
        event.target.reset();

    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" size="lg" id="email" name="email" onChange={event => setEmail(event.target.value)} />
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" size="lg" name="password" id="password" onChange={event => setPassword(event.target.value)} />
                            <Button variantcolor="teal"
                                variant="outline"
                                type="submit"
                                value="Submit"
                                width="full"
                                mt={4}>
                                Sign In
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

export default LoginForm;
