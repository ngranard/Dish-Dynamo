import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
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
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/search?ingredient=${searchTerm}`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <Box width="100%" maxWidth="500px" mx="auto" mt="8">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Search recipes by ingredient
        </Text>
        <FormControl>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter ingredient"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>

        {recipes.length > 0 && (
          <Box w="100%" mt="8">
            <Text fontSize="xl" fontWeight="bold">
              Recipes
            </Text>
            <Accordion allowToggle mt="4">
              {recipes.map((recipe) => (
                <AccordionItem key={recipe.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {recipe.recipe_name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <VStack spacing={4}>
                      <Text>{recipe.description}</Text>
                      <Text>Cooking Time: {recipe.cooking_time} mins</Text>
                      <Text>
                        Difficulty: {getDifficultyLevel(recipe.difficulty_id)}
                      </Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SearchBar;
