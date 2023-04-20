import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  Select,
} from "@chakra-ui/react";

const RecipeDetailsForm = ({ recipe, setRecipe }) => {
  const [difficulties, setDifficulties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/difficulty")
      .then((response) => response.json())
      .then((data) => setDifficulties(data))
      .catch((error) => console.error(error));
  }, []);

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
        <NumberInput
          min={0}
          max={5}
          step={1}
          value={recipe.rating}
          onChange={(value) =>
            setRecipe({ ...recipe, rating: parseInt(value) })
          }
        >
          <NumberInputField
            name="rating"
            placeholder="Enter a rating between 0 and 5"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="difficulty">
        <FormLabel>Difficulty</FormLabel>
        <Select
          placeholder="Select difficulty"
          name="difficulty_id"
          value={recipe.difficulty_id}
          onChange={handleChange}
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty.id} value={difficulty.id}>
              {difficulty.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </VStack>
  );
};
export default RecipeDetailsForm;
