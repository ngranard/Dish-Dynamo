import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const CreateRecipe = ({ recipe, setRecipe }) => {
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <Box mt={8}>
      <FormControl id="recipe_name" isRequired>
        <FormLabel>Recipe Name</FormLabel>
        <Input
          name="recipe_name"
          value={recipe.recipe_name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl id="description" mt={4} isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl id="instructions" mt={4} isRequired>
        <FormLabel>Instructions</FormLabel>
        <Textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl id="cooking_time" mt={4} isRequired>
        <FormLabel>Cooking Time (minutes)</FormLabel>
        <NumberInput
          min={1}
          value={recipe.cooking_time}
          onChange={(value) =>
            setRecipe({ ...recipe, cooking_time: parseInt(value) })
          }
        >
          <NumberInputField name="cooking_time" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </Box>
  );
};

export default CreateRecipe;