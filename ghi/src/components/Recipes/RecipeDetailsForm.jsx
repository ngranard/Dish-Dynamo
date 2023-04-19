import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  VStack,
  Textarea,
  Select,
} from "@chakra-ui/react";

const RecipeDetailsForm = ({ recipe, setRecipe }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <VStack spacing={4}>
      <FormControl id="image_url">
        <FormLabel>Image URL</FormLabel>
        <Input
          name="image_url"
          value={recipe.image_url}
          onChange={handleChange}
          type="url"
          placeholder="Enter the image URL"
        />
      </FormControl>
      <FormControl id="rating">
        <FormLabel>Rating</FormLabel>
        <NumberInput min={0} max={5} step={0.5}>
          <NumberInputField
            name="rating"
            value={recipe.rating}
            onChange={handleChange}
            placeholder="Enter a rating between 0 and 5"
          />
        </NumberInput>
      </FormControl>
      <FormControl id="description">
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Enter a brief description of the recipe"
        />
      </FormControl>
      <FormControl id="difficulty">
        <FormLabel>Difficulty</FormLabel>
        <Select
          placeholder="Select difficulty"
          name="difficulty_id"
          value={recipe.difficulty_id}
          onChange={handleChange}
        >
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </Select>
      </FormControl>
    </VStack>
  );
};
export default RecipeDetailsForm;
