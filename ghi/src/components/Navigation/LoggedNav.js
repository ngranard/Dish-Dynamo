import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
    Text,
    Flex,
    Spacer,
    Button,
    Img,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    useBreakpointValue,
    useColorMode

} from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo4 from "../../assets/Logo4.png";

const LoggedNav = () => {
    const [scroll, setScroll] = useState(false);
    const { logout } = useToken();
    const { colorMode, toggleColorMode } = useColorMode();



    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    const display = useBreakpointValue({ base: "none", md: "flex" });

    const activeLinkStyle = {
        textDecoration: "underline",
        textDecorationColor: "#4299E1",
    };

    return (
        <>
            <Flex
                h="10vh"
                alignItems="center"
                p="6"
                boxShadow={scroll ? "base" : "none"}
                position="sticky"
                top="0"
                zIndex="100"
                w="full"
                backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            >
                <NavLink to="/">
                    <Img
                        src={Logo4}
                        alt="Logo"
                        w={{ base: "25%", md: "20%" }}
                        h="auto"
                        marginTop="5"
                        marginBottom="5"
                        rounded="lg"
                        position="relative"
                        marginLeft="-18px"
                    />
                </NavLink>

                <Spacer />

                <Flex alignItems="center" display={display}>
                    <NavLink to="/create" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Create Recipe</Text>
                    </NavLink>
                    <NavLink to="/search" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Recipe Search</Text>
                    </NavLink>
                    <NavLink to="/update" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Update Profile</Text>
                    </NavLink>
                    <button onClick={logout}>
                        <Text fontSize="lg" mr="5">Logout</Text>
                    </button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
                <Box display={{ base: "block", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <NavLink to="/create">
                                <MenuItem>Create Recipe</MenuItem>
                            </NavLink>
                            <NavLink to="/search">
                                <MenuItem>Recipe Search</MenuItem>
                            </NavLink>
                            <NavLink to="/update">
                                <MenuItem>Update Profile</MenuItem>
                            </NavLink>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                            <IconButton
                                aria-label="Toggle dark mode"
                                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                                variant="ghost" />
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </>
    );
};

export default LoggedNav;
