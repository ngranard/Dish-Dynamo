import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { recipe_id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipeData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`
      );
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const deleteRecipe = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe) {
    return null;
  }

  return (
    <Box maxW="600px" mx="auto">
      <Image src={recipe.image_url} alt={recipe.recipe_name} mb={4} />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {recipe.recipe_name}
      </Text>
      <Text mb={4}>{recipe.description}</Text>
      <Text mb={4}>
        <strong>Cooking time:</strong> {recipe.cooking_time}
      </Text>
      <Text mb={4}>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </Text>
      <Text mb={4}>
        <strong>Instructions:</strong> {recipe.instructions}
      </Text>
      <Button colorScheme="red" onClick={deleteRecipe}>
        Delete recipe
      </Button>
    </Box>
  );
}

export default RecipeDetail;
