import { NavLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    Avatar,
    Flex,
    Spacer,
    Button,
    Img,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useBreakpointValue,
    useColorMode,
    MenuDivider,


} from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';
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



    return (
        <>
            <Flex
                bg="brand.700"
                h="15vh"
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
                        w={{ base: "20%", md: "20%" }}
                        h="auto"
                        marginTop="auto"
                        marginBottom="auto"
                        rounded="lg"
                        position="relative"
                        marginLeft="-18px"
                    />
                </NavLink>

                <Spacer />

                <Flex alignItems="center" display={display}>
                    <ChakraLink
                        as={NavLink}
                        to="/create"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                    >
                        Create Recipe
                    </ChakraLink>
                    <ChakraLink
                        as={NavLink}
                        to="/search"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                    >
                        Recipe Search
                    </ChakraLink>

                    <Button onClick={toggleColorMode} mr="5">
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Menu mr="5">
                        <MenuButton
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://imgs.search.brave.com/cSS5RedQNaeS5Qp15pLfnM9yAA4xwCvyZDHD9XeLq6s/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vY2xvc2VicmFj/ZS9pbWFnZS91cGxv/YWQvd180MDAvdjE0/OTEzMTUwMDcvdXNl/cmljb25faWQ3NnJi/LnBuZw'
                                }
                            />
                        </MenuButton>


                        <MenuList>
                            <MenuItem rounded={'full'}
                                as={NavLink} to="/update">Update Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem
                                rounded={'full'}
                                fontSize="lg"
                                mr="5"
                                onClick={logout}
                            >
                                Logout
                            </MenuItem>
                        </MenuList>

                    </Menu>



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
                            <MenuItem
                                rounded={'full'}
                                as={NavLink}
                                to="/create"
                                _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                            >
                                Create Recipe
                            </MenuItem>
                            <MenuItem
                                rounded={'full'}
                                as={NavLink}
                                to="/search"
                                _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                            >
                                Recipe Search
                            </MenuItem>

                            <IconButton
                                aria-label="Toggle dark mode"
                                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                                variant="ghost"
                            />
                            <MenuItem as={NavLink}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://imgs.search.brave.com/cSS5RedQNaeS5Qp15pLfnM9yAA4xwCvyZDHD9XeLq6s/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vY2xvc2VicmFj/ZS9pbWFnZS91cGxv/YWQvd180MDAvdjE0/OTEzMTUwMDcvdXNl/cmljb25faWQ3NnJi/LnBuZw'
                                    }
                                />
                            </MenuItem>
                            <MenuDivider />

                            <MenuItem rounded={'full'}
                                onClick={logout}>Logout</MenuItem>
                        </MenuList>

                    </Menu>
                </Box>
            </Flex>
        </>
    );
};

export default LoggedNav;
