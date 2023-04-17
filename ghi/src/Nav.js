import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Text, Flex, Spacer } from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';





const Nav = () => {
    const [scroll, setScroll] = useState(false);
    const { logout } = useToken();



    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener('scroll', changeScroll);




    return (

        <Flex
            h="10vh"
            alignItems="center"
            p="6"
            boxShadow={scroll ? 'base' : 'none'}
            position="static"
            top="0"
            zIndex="static"
            w="full"
        >
            <NavLink to="/">
                <Text fontSize="xl" fontWeight="bold">
                    Dish Dynamo
                </Text>
            </NavLink>

            <Spacer />

            <Flex alignItems="center">
                <NavLink to="/login">
                    <Text fontSize="md" mr="10">
                        Login
                    </Text>
                </NavLink>
                <NavLink to="/signup">
                    <Text fontSize="md" mr="10">
                        Signup
                    </Text>
                </NavLink>
                <button onClick={logout}>
                    <Text fontSize="md">Logout</Text>
                </button>

            </Flex>
        </Flex>
    );
};

export default Nav;
