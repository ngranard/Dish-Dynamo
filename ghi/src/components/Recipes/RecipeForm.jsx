import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import useUser from "../useUser";
import useToken from "@galvanize-inc/jwtdown-for-react";

const CreateRecipe = () => {
  const authToken = useToken();
  const currentUser = useUser(authToken);

  const [recipe, setRecipe] = useState({
    recipe_name: "",
    description: "",
    image_url: "",
    instructions: "",
    rating: 0,
    cooking_time: 0,
    user_id: currentUser?.id || null,
    difficulty_id: 1,
  });

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
