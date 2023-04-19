import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Text, Flex, Spacer } from '@chakra-ui/react';





const LogoutNav = () => {
    const [scroll, setScroll] = useState(false);



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
            </Flex>
        </Flex>
    );
};

export default LogoutNav;
