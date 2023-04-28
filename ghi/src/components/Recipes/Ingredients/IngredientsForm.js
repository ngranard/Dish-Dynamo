import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  List,
  ListItem,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
const IngredientsForm = ({
  recipe,
  setRecipe,
  ingredients,
  setIngredients,
}) => {
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  const addIngredient = () => {
    if (
      quantity.trim() !== "" &&
      measurement.trim() !== "" &&
      name.trim() !== ""
    ) {
      const newIngredient = { quantity, measurement, name };
      const updatedIngredients = [...ingredients, newIngredient];
      setIngredients(updatedIngredients);
      setRecipe({ ...recipe, ingredients: updatedIngredients });
      setQuantity("");
      setMeasurement("");
      setName("");
    } else {
      toast({
        title: "Error!",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  return (
    <Box width="100%">
      <VStack spacing={4}>
        <FormControl id="quantity" isRequired>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>

        <FormControl id="measurement" isRequired>
          <FormLabel>Measurement</FormLabel>
          <Input
            type="text"
            value={measurement}
            onChange={(e) => setMeasurement(e.target.value)}
          />
        </FormControl>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <Button onClick={addIngredient}>Add Ingredient</Button>
      </VStack>
      <List mt={4}>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <HStack>
              <Box flex="1">
                {ingredient.quantity} {ingredient.measurement} {ingredient.name}
              </Box>
              <IconButton
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => removeIngredient(index)}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default IngredientsForm;
