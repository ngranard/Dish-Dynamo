import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const IngredientForm = ({ onSubmit }) => {
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [name, setName] = useState("");
  const [recipeId, setRecipeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ quantity, measurement, name, recipe_id: recipeId });
  };

  return (
    <Box width="100%">
      <VStack spacing={4}>
        <FormControl id="quantity">
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>

        <FormControl id="measurement">
          <FormLabel>Measurement</FormLabel>
          <Input
            type="text"
            value={measurement}
            onChange={(e) => setMeasurement(e.target.value)}
          />
        </FormControl>

        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl id="recipeId">
          <FormLabel>Recipe ID</FormLabel>
          <Input
            type="number"
            value={recipeId}
            onChange={(e) => setRecipeId(e.target.value)}
          />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default IngredientForm;
