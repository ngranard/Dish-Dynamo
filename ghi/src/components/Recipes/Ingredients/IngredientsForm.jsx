import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const IngredientsForm = () => {
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [name, setName] = useState("");

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
      </VStack>
    </Box>
  );
};

export default IngredientsForm;
