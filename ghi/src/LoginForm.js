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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useToken();


    const handleSubmit = event => {
        event.preventDefault();
        login(username, password);
        event.target.reset();

    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Email</FormLabel>
                            <Input type="username" placeholder="test@test.com" size="lg" id="username" name="username" onChange={event => setUsername(event.target.value)} />
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" size="lg" name="password" id="password" onChange={event => setPassword(event.target.value)} />
                            <Button variantcolor="teal"
                                variant="outline"
                                type="submit"
                                value="Login"
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
