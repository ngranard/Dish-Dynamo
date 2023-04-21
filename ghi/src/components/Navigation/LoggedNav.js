import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
    Text,
    Flex,
    Spacer,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { ChevronDownIcon } from '@chakra-ui/icons'





const LoggedNav = () => {
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
                <NavLink to="/create">
                    <Text fontSize="md" mr="5">
                        Create Recipe
                    </Text>
                </NavLink>
                <NavLink to="/search">
                    <Text fontSize="md" mr="5">
                        Recipe Search
                    </Text>
                </NavLink>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Name
                    </MenuButton>
                    <MenuList>
                        <NavLink to={"/update"}>
                            <MenuItem>Update Profile</MenuItem>
                        </NavLink>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </Flex>
    );
};

export default LoggedNav;
