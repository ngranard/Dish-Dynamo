import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipeId}`)
            .then((response) => response.json())
            .then((data) => setRecipe(data));
    }, [recipeId]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/ingredient/recipe/${recipeId}`)
            .then((response) => response.json())
            .then((data) => setIngredients(data));
    }, [recipeId]);

    if (!recipe || !ingredients) {
        return <div>Loading...</div>;
    }

    return (
        <Box maxW="600px" mx="auto">
            <Image src={recipe.image_url} alt={recipe.recipe_name} mb={4} />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
                {recipe.recipe_name}
            </Text>
            <Text mb={4}>{recipe.description}</Text>
            <Text mb={4}>
                <strong>Cooking time:</strong> {recipe.cooking_time} minutes
            </Text>
            <Text mb={4}>
                <strong>Difficulty:</strong> {recipe.difficulty}
            </Text>
            <Table variant="simple" mb={4}>
                <Thead>
                    <Tr>
                        <Th>Quantity</Th>
                        <Th>Measurement</Th>
                        <Th>Name</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <strong>Ingredients:</strong>
                    {ingredients.map((ingredient) => (
                        <Tr key={ingredient.id}>
                            <Td>{ingredient.quantity}</Td>
                            <Td>{ingredient.measurement}</Td>
                            <Td>{ingredient.name}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Text mb={4}>
                <strong>Instructions:</strong> {recipe.instructions}
            </Text>
        </Box>
    );
}

export default RecipeDetails;
