import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Center,
  VStack,
  Heading,
  Text,
  Image,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

function RecipeDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState({
    recipe_name: "",
    image_url: "",
    description: "",
    instructions: "",
    rating: "",
    cooking_time: "",
    difficulty_id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8000/recipes/${recipe_id}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRecipe(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [recipe_id]);

  const getDifficultyLevel = (id) => {
    switch (id) {
      case 1:
        return "Easy";
      case 2:
        return "Medium";
      case 3:
        return "Hard";
      default:
        return "Unknown";
    }
  };

  if (isLoading) {
    return <Center>Loading...</Center>;
  }
  return (
    <Center>
      <VStack spacing={6} w="full" maxW="2xl">
        <Heading>{recipe.recipe_name}</Heading>
        <Image
          src={recipe.image_url}
          alt={recipe.recipe_name}
          borderRadius="md"
          w="full"
        />
        <Text>{recipe.description}</Text>
        <Text fontWeight="bold">Instructions:</Text>
        <Text>{recipe.instructions}</Text>
        <Box>
          <Tag size="md" mr={2}>
            <TagLabel>Rating: {recipe.rating}</TagLabel>
          </Tag>
          <Tag size="md" mr={2}>
            <TagLabel>Cooking Time: {recipe.cooking_time} mins</TagLabel>
          </Tag>
          <Tag size="md">
            <TagLabel>
              Difficulty: {getDifficultyLevel(recipe.difficulty_id)}
            </TagLabel>
          </Tag>
        </Box>
      </VStack>
    </Center>
  );
}

export default RecipeDetail;
