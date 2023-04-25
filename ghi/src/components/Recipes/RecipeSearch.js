import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Switch,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByRecipe, setSearchByRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);
  // const getDifficultyLevel = (id) => {
  //   switch (id) {
  //     case 1:
  //       return "Easy";
  //     case 2:
  //       return "Medium";
  //     case 3:
  //       return "Hard";
  //     default:
  //       return "Unknown";
  //   }
  // };
  const handleSearch = async () => {
    if (!searchTerm) {
      setRecipes([]);
      return;
    }
    try {
      let response;
      if (searchByRecipe) {
        response = await axios.get('http://localhost:8000/search_recipe_name', {
          params: {
            recipe_name: searchTerm
          }
        });
      } else {
        response = await axios.get('http://localhost:8000/search', {
          params: {
            ingredient: searchTerm
          }
        });
      }
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      console.error("Error response:", error.response);
    }
  };

  return (
    <Box width="100%" maxWidth="500px" mx="auto" mt="8">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {searchByRecipe
            ? "Search recipes by recipe name"
            : "Search recipes by ingredient"}
        </Text>
        <HStack>
          <Text>Search by recipe</Text>
          <Switch
            isChecked={searchByRecipe}
            onChange={() => setSearchByRecipe(!searchByRecipe)}
          />
        </HStack>
        <FormControl>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchByRecipe ? "Enter recipe name" : "Enter ingredient"}
          />
        </FormControl>
        <Button colorscheme="blue" onClick={handleSearch}>
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
                    <AccordionButton colorscheme="blue">
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
                      <Text>Difficulty: {recipe.difficulty_id}</Text>
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
