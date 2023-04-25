import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
    Flex,
    Spacer,
    Img,
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
import { MoonIcon, SunIcon, ArrowForwardIcon, SettingsIcon, AtSignIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import Logo4 from "../../assets/Logo4.png";
import { Link as ChakraLink } from "@chakra-ui/react";

const LoggedNav = () => {
    const [scroll, setScroll] = useState(false);
    const { logout } = useToken();
    const { colorMode, toggleColorMode } = useColorMode();
    const isMobile = useBreakpointValue({ base: true, md: false });

    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    const display = useBreakpointValue({ base: "none", md: "flex" });

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
                    <ChakraLink
                        as={NavLink}
                        to="/create"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}>
                        Create Recipe
                    </ChakraLink>
                    <ChakraLink
                        as={NavLink}
                        to="/search"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}>
                        Recipe Search
                    </ChakraLink>

                </Flex>

                <Menu >
                    <MenuButton mr={5} mt={1} cursor="pointer" as={Avatar} size="sm" src="https://thumb.ac-illust.com/6c/6c45218ebb1010c201da153f9f439d3d_t.jpeg" />
                    <MenuList>
                        <ChakraLink as={NavLink} to="/my-recipes">
                            <MenuItem>
                                <Icon as={AtSignIcon} mr={2} /> My Recipes
                            </MenuItem>
                        </ChakraLink>
                        {isMobile && (
                            <>
                                <ChakraLink as={NavLink} to="/create">
                                    <MenuItem>
                                        <Icon as={EditIcon} mr={2} /> Create Recipe
                                    </MenuItem >
                                </ChakraLink >
                                <ChakraLink as={NavLink} to="/search">
                                    <MenuItem>
                                        <Icon as={Search2Icon} mr={2} /> Recipe Search
                                    </MenuItem>
                                </ChakraLink>

                            </>
                        )}

                        <MenuDivider />
                        <NavLink to="/update">
                            <MenuItem>
                                <Icon as={SettingsIcon} mr="2" />Update Profile
                            </MenuItem>
                        </NavLink>
                        <MenuItem onClick={logout}>
                            <ArrowForwardIcon mr="2" />
                            Logout
                        </MenuItem>
                    </MenuList >
                    <IconButton onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </Menu >
            </Flex >
        </>
    );
};

export default LoggedNav;
