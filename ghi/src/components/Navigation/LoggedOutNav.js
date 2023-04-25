import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
    Avatar,
    Flex,
    Spacer,
    Img,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo4 from "../../assets/Logo4.png";
import { Link as ChakraLink } from "@chakra-ui/react";

const LogoutNav = () => {
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    const display = useBreakpointValue({ base: "none", md: "flex" });

    return (
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
                <ChakraLink
                    as={NavLink}
                    to="/login"
                    fontSize="lg"
                    mr="5"
                    _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                >
                    Login
                </ChakraLink>
                <ChakraLink
                    as={NavLink}
                    to="/signup"
                    fontSize="lg"
                    mr="5"
                    _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                >
                    Signup
                </ChakraLink>


            </Flex>

            <Menu>
                <MenuButton mr={5} mt={1} cursor="pointer" as={Avatar} size="sm" src="https://thumb.ac-illust.com/6c/6c45218ebb1010c201da153f9f439d3d_t.jpeg" />
                <MenuList>
                    <MenuItem as={NavLink} to="/login">
                        Login
                    </MenuItem>
                    <MenuItem as={NavLink} to="/signup">
                        Signup
                    </MenuItem>

                </MenuList>
                <IconButton onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </IconButton>

            </Menu>

        </Flex>
    );
};

export default LogoutNav;
