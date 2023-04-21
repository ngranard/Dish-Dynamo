import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
    Text,
    Flex,
    Spacer,
    Button,
    Image,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo4 from "../../assets/Logo4.png";

const LogoutNav = () => {
    const [scroll, setScroll] = useState(false);
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
                <Image
                    src={Logo4}
                    alt="Logo"
                    w={{ base: "45%", md: "20%" }}
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
                <NavLink to="/login" activestyle={activeLinkStyle}>
                    <Text fontSize="lg" mr="10">Login</Text>
                </NavLink>
                <NavLink to="/signup" activestyle={activeLinkStyle}>
                    <Text fontSize="lg" mr="10">Signup</Text>
                </NavLink>
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
                        <NavLink to="/login">
                            <MenuItem>Login</MenuItem>
                        </NavLink>
                        <NavLink to="/signup">
                            <MenuItem>Signup</MenuItem>
                        </NavLink>
                        <IconButton
                            aria-label="Toggle dark mode"
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                            variant="ghost"
                        />
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
};

export default LogoutNav;
