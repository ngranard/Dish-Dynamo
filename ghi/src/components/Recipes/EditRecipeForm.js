import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Editable, EditablePreview, EditableInput, EditableTextarea, FormControl, Select, Button, ButtonGroup } from "@chakra-ui/react";
import useUser from "../useUser";
import useToken from "@galvanize-inc/jwtdown-for-react";
import sadToast from "../../assets/sadToast.png"


function EditRecipe() {
    const { recipe_id } = useParams();
    const [difficulties, setDifficulties] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [userId, setUserId] = useState('');
    const [difficulty, setDifficulty] = useState(undefined);
    const [ingredients, setIngredients] = useState(null);
    const navigate = useNavigate();
    const token = useToken();
    const user = useUser(token);

    useEffect(() => {
        const fetchRecipeData = async () => {
            const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`);

            if (response.ok) {
                const data = await response.json();
                setRecipe(data)
                setRecipeName(data.recipe_name)
                setDescription(data.description)
                setImageUrl(data.image_url)
                setInstructions(data.instructions)
                setCookingTime(data.cooking_time)
                setUserId(data.user_id)
                setDifficulty(data.difficulty_id)
            }
        }
        fetchRecipeData();
    }, [recipe_id]);

    useEffect(() => {
        const fetchIngredientsData = async () => {
            const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/ingredient/recipe/${recipe_id}`);

            if (response.ok) {
                const data = await response.json();
                setIngredients(data)
            }
        }
        fetchIngredientsData();
    }, [recipe_id]);

    const fetchDifficultiesData = async () => {
        const response = await fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/difficulty`);

        if (response.ok) {
            const data = await response.json();
            setDifficulties(data)
        }
    }
    useEffect(() => {
        fetchDifficultiesData();
    }, []);

    const handleIngredientChange = (id, field, value) => {
        const updatedIngredients = ingredients.map((ingredient) => {
            if (ingredient.id === id) {
                return {
                    ...ingredient,
                    [field]: value,
                };
            }
            return ingredient;
        });
        setIngredients(updatedIngredients)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const ingredientsData = [];
        ingredients.map(ingredient => {
            let ingredientObject = {
                "quantity": ingredient.quantity,
                "measurement": ingredient.measurement,
                "name": ingredient.name
            }
            return ingredientsData.push(ingredientObject);
        })
        const data = {}
        data.recipe_name = recipeName;
        data.description = description;
        data.image_url = imageUrl;
        data.instructions = instructions;
        data.cooking_time = cookingTime;
        data.user_id = userId;
        data.difficulty_id = parseInt(difficulty);
        data.ingredients = ingredientsData;

        const editRecipeUrl = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`;
        const fetchConfig = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(editRecipeUrl, fetchConfig);
        if (response.ok) {
            navigate(`/recipes/${recipe.id}`);
        }

    }

    const handleCancel = async () => {
        navigate(`/recipes/${recipe.id}`);
    }

    if (!recipe || !ingredients) {
        return <p>Loading...</p>;
    }

    if (user.id === recipe.user_id) {
        return (
            <Box maxW="600px" mx="auto">
                <Image src={imageUrl} alt={recipeName} mb={4} />
                <Box mb={4}>
                    <strong>Image URL:</strong>
                    <Editable value={imageUrl}>
                        <EditablePreview />
                        <EditableInput onChange={(e) => setImageUrl(e.target.value)} />
                    </Editable>
                </Box>
                <Box mb={4}>
                    <strong>Recipe Name:</strong>
                    <Editable value={recipeName}>
                        <EditablePreview fontSize="xl" fontWeight="bold" mb={2} />
                        <EditableInput onChange={(e) => setRecipeName(e.target.value)} />
                    </Editable>
                </Box>
                <Box mb={4}>
                    <strong>Recipe Description:</strong>
                    <Editable value={description}>
                        <EditablePreview />
                        <EditableTextarea onChange={(e) => setDescription(e.target.value)} />
                    </Editable>
                </Box>
                <Box mb={4}>
                    <strong>Cooking Time (in minutes):</strong>
                    <Editable value={cookingTime}>
                        <EditablePreview />
                        <EditableInput onChange={(e) => setCookingTime(e.target.value)} />
                    </Editable>
                </Box>
                <Box mb={4}>
                    <strong>Difficulty:</strong>
                    <FormControl id="difficulty">
                        <Select
                            placeholder="Select difficulty"
                            name="difficulty_id"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            {difficulties.map((difficulty) => (
                                <option key={difficulty.id} value={difficulty.id}>
                                    {difficulty.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <strong>Ingredients:</strong>
                <Table variant="simple" mb={4}>
                    <Thead>
                        <Tr>
                            <Th>Quantity</Th>
                            <Th>Measurement</Th>
                            <Th>Name</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {ingredients.map((ingredient) => (
                            <Tr key={ingredient.id}>
                                <Td>
                                    <Editable value={ingredient.quantity}>
                                        <EditablePreview />
                                        <EditableInput onChange={(e) => handleIngredientChange(ingredient.id, 'quantity', e.target.value)} />
                                    </Editable>
                                </Td>
                                <Td>
                                    <Editable value={ingredient.measurement}>
                                        <EditablePreview />
                                        <EditableInput onChange={(e) => handleIngredientChange(ingredient.id, 'measurement', e.target.value)} />
                                    </Editable>
                                </Td>
                                <Td>
                                    <Editable value={ingredient.name}>
                                        <EditablePreview />
                                        <EditableInput onChange={(e) => handleIngredientChange(ingredient.id, 'name', e.target.value)} />
                                    </Editable>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box mb={4}>
                    <strong>Instructions:</strong>
                    <Editable defaultValue={instructions}>
                        <EditablePreview />
                        <EditableTextarea onChange={(e) => setInstructions(e.target.value)} />
                    </Editable>
                </Box>
                <ButtonGroup variant='outline' spacing='6'>
                    <Button onClick={handleSubmit} colorScheme='blue'>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </ButtonGroup>
            </Box>
        );
    } else return (
        <Box textAlign="center">
            <Flex justifyContent="center" alignItems="center" my={8}>
                <Image src={sadToast} />
            </Flex>
            <Box fontSize="xl" fontWeight="bold" my={8} >
                This is not your recipe! Please so back to the main page!
                <Box mt={4}>
                    <Button colorScheme="blue" size="md" as={Link} to="/">
                        Main Page
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default EditRecipe;
