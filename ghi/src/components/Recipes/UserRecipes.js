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
import sadToast from "../../assets/sadToast.png"


const RecipeCard = ({ recipe, onDelete, setRecipes }) => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleClick = () => {
        navigate(`/recipes/${recipe.id}`);
    };

    const handleEdit = () => {
        navigate(`/recipes/edit/${recipe.id}`);
    }

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
                    <MenuItem onClick={handleEdit}>Edit Recipe</MenuItem>
                </MenuList>
            </Menu>
            <Image src={recipe.image_url} alt={recipe.recipe_name} mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2} >
                {recipe.recipe_name}
            </Text>
            <Text mb={4}  >{recipe.description}</Text>
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
    const [recipes, setRecipes] = useState(null);
    const [userFirstName, setUserFirstName] = useState();


    const handleDelete = async (recipe_id) => {
        const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`;
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include",
        });
        return response;
    };

    const fetchUserData = async (user_id) => {
        const accountUrl = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/api/accounts/${user_id}`;
        const response = await fetch(accountUrl, {
            method: "GET",
            credentials: "include",
        });

        if (response.ok) {
            const data = await response.json();
            setUserFirstName(data.first_name)
        }
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
            fetchUserData(user.id);
        }
    }, [user]);

    if (!user) {
        return null;
    }

    if (!recipes) {
        return <div>Loading...</div>;
    }

    if (recipes.length > 0) {
        return (
            <Box maxW="600px" mx="auto">
                <Box fontSize="3xl" fontWeight="bold" textAlign="center" my={8}>
                    {userFirstName}'s Recipes
                </Box>
                    {recipes.map((recipe) => (
                        <Box key={recipe.id} position="relative">
                            <RecipeCard
                                recipe={recipe}
                                onDelete={handleDelete}
                                setRecipes={setRecipes}
                            />
                        </Box>
                    ))}
            </Box>
        );
    }
    if (recipes.length === 0) {
        return (
            <Box textAlign="center">
                <Flex justifyContent="center" alignItems="center" my={8}>
                    <Image src={sadToast} />
                </Flex>
                <Box fontSize="xl" fontWeight="bold" my={8} >
                    You haven't created any recipes yet!
                    <Box mt={4}>
                        <Button colorScheme="blue" size="md" as={Link} to="/create">
                            Make one here
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default UserRecipes;
