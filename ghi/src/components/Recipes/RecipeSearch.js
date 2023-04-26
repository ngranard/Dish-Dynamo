import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  useColorModeValue,
} from "@chakra-ui/react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByRecipe, setSearchByRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleRecipeDetails = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  // const bgColor = useColorModeValue('gray.50', 'gray.700');

  const handleSearch = async () => {
    if (!searchTerm) {
      setRecipes([]);
      return;
    }
    try {
      let response;
      if (searchByRecipe) {
        response = await axios.get(
          `${process.env.REACT_APP_USER_SERVICE_API_HOST}/search_recipe_name`,
          {
            params: {
              recipe_name: searchTerm,
            },
          },
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_USER_SERVICE_API_HOST}/search`,
          {
            params: {
              ingredient: searchTerm,
            },
          },
        );
      }
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      console.error("Error response:", error.response);
    }
  };

  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box
        width="100%"
        maxWidth="500px"
        mx="auto"
        mt="-5px"
        mb="570px"
        p={6}
        borderRadius="md"
        boxShadow="md"
        bg={bgColor}
      >
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
              placeholder={
                searchByRecipe ? "Enter recipe name" : "Enter ingredient"
              }
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
                        <Text>Difficulty: {recipe.difficulty}</Text>
                        <Button
                          colorScheme="teal"
                          onClick={() => handleRecipeDetails(recipe.id)}
                        >
                          View Recipe Details
                        </Button>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          )}
        </VStack>
      </Box>
    </motion.div>
  );
};

export default SearchBar;
