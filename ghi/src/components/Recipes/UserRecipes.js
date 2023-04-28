import {
    Box,
    Image,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Flex,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../useUser";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";


const RecipeCard = ({ recipe, onDelete, setRecipes }) => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleClick = () => {
        navigate(`/recipes/${recipe.id}`);
    };

    const handleDelete = async () => {
        onClose();
        const response = await onDelete(recipe.id);
        if (response.ok) {
            setRecipes((prevRecipes) =>
                prevRecipes.filter((item) => item.id !== recipe.id)
            );
        }
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            mb={4}
            position="relative"
        >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FaEllipsisV />}
                    position="absolute"
                    top={0}
                    right={0}
                />
                <MenuList>
                    <MenuItem onClick={onOpen}>Delete Recipe</MenuItem>
                </MenuList>
            </Menu>
            <Image src={recipe.image_url} alt={recipe.recipe_name} mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
                {recipe.recipe_name}
            </Text>
            <Text mb={4}>{recipe.description}</Text>
            <Button onClick={handleClick} mb={2}>
                View recipe
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Recipe</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete the recipe "{recipe.recipe_name}"?
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

function UserRecipes() {
    const token = useToken();
    const user = useUser(token);
    const [recipes, setRecipes] = useState([]);

    const handleDelete = async (recipe_id) => {
        const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`;
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include",
        });
        return response;
    };

    const fetchUserRecipes = async (user_id) => {
        const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/user/${user_id}`;
        const response = await fetch(url, {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const data = await response.json();
            setRecipes(data);
        }
    };

    useEffect(() => {
        if (user && user.id) {
            fetchUserRecipes(user.id);
        }
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <Box maxW="600px" mx="auto">
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" my={8}>
                {user.first_name}'s Recipes
            </Text>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Box key={recipe.id} position="relative">
                        <RecipeCard
                            recipe={recipe}
                            onDelete={handleDelete}
                            setRecipes={setRecipes}
                        />
                    </Box>
                ))
            ) : (
                <Box textAlign="center">
                    <Flex justifyContent="center" alignItems="center" my={8}>
                        <Image src="https://i.ibb.co/M8MJH8f/Screenshot-2023-04-27-at-3-47-31-PM-removebg-preview.png" />
                    </Flex>
                    <Text fontSize="xl" fontWeight="bold" my={8}>
                        Don't have any recipes?
                        <Box mt={4}>
                            <Button colorScheme="blue" size="md" as={Link} to="/create">
                                Make one here
                            </Button>
                        </Box>
                    </Text>
                </Box>
            )}
        </Box >
    );
}

export default UserRecipes;
