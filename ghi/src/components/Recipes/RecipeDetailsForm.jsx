import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const RecipeDetailsForm = ({ recipe, setRecipe }) => {
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      toast({
        title: "Recipe created.",
        description: "Successfully created a new recipe.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error creating recipe.",
        description: "An error occurred while creating the recipe.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="difficulty_id" isRequired>
            <FormLabel>Difficulty</FormLabel>
            <Select
              name="difficulty_id"
              value={recipe.difficulty_id}
              onChange={setRecipe}
            >
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Select>
          </FormControl>

          <FormControl id="rating">
            <FormLabel>Rating</FormLabel>
            <NumberInput
              min={0}
              max={5}
              step={0.5}
              value={recipe.rating}
              onChange={(value) =>
                setRecipe({ ...recipe, rating: parseFloat(value) })
              }
            >
              <NumberInputField name="rating" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="image_url">
            <FormLabel>Image URL</FormLabel>
            <Input
              name="image_url"
              value={recipe.image_url}
              onChange={setRecipe}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RecipeDetailsForm;
