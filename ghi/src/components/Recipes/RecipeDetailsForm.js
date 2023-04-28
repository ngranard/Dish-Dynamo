import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
} from "@chakra-ui/react";

const RecipeDetailsForm = ({ recipe, setRecipe }) => {
  const [difficulties, setDifficulties] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USER_SERVICE_API_HOST}/difficulty`)
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
