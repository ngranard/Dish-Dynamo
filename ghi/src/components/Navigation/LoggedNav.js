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
    MenuDivider,
    IconButton,
    useBreakpointValue,
    useColorMode,
    Avatar,
    Icon

} from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { MoonIcon, SunIcon, HamburgerIcon, ArrowForwardIcon, SettingsIcon, AtSignIcon } from "@chakra-ui/icons";
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
                mt="fit-content"
                h="0px"
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
                        boxShadow="2xl"
                        dropShadow={{ base: "lg", md: "xl" }}
                        src={Logo4}
                        alt="Logo"
                        w={{ base: "25%", md: "20%" }}
                        h="fill"
                        marginTop="20"
                        marginBottom="5"
                        rounded="lg"
                        position="relative"
                        marginLeft="-18px"
                    />
                </NavLink>

                <Spacer />

                <Flex mt={1} alignItems="center" display={display}>

                    <Spacer />
                    <NavLink to="/create" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Create Recipe</Text>
                    </NavLink>
                    <NavLink to="/search" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Recipe Search</Text>
                    </NavLink>

                </Flex>
                <Box display={{ base: "block", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList >
                            <IconButton
                                aria-label="Toggle dark mode"
                                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                                variant="ghost" />
                            <NavLink to="/create">
                                <MenuItem>Create Recipe</MenuItem>
                            </NavLink>
                            <NavLink to="/search">
                                <MenuItem>Recipe Search</MenuItem>
                            </NavLink>

                        </MenuList>
                    </Menu>
                </Box>
                <Menu >
                    <MenuButton mt={1} cursor="pointer" as={Avatar} size="sm" src="https://thumb.ac-illust.com/6c/6c45218ebb1010c201da153f9f439d3d_t.jpeg" />
                    <MenuList>
                        <NavLink to="/my-recipes">
                            <MenuItem>
                                <Icon as={AtSignIcon} mr="2" />
                                My Recipes
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/update">
                            <MenuItem>
                                <Icon as={SettingsIcon} mr="2" />Update Profile
                            </MenuItem>
                        </NavLink>
                        <MenuItem onClick={logout}>
                            <ArrowForwardIcon mr="2" />
                            Logout
                        </MenuItem>
                        <MenuItem onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    );
};

export default LoggedNav;
