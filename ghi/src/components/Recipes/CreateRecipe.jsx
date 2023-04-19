import React, { useState } from "react";
import {
  Box,
  Button,
  useToast,
  Progress,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";

import RecipeForm from "./RecipeForm";
import IngredientsForm from "./Ingredients/IngredientsForm";
import RecipeDetailsForm from "./RecipeDetailsForm";

function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const initialRecipe = {
    recipe_name: "",
    description: "",
    instructions: "",
    cooking_time: "",
    difficulty_id: "",
    rating: "",
    image_url: "",
  };
  const [recipe, setRecipe] = useState(initialRecipe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(recipe);
    try {
      const response = await fetch("https://localhost:8000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Success!",
        description: "Recipe added successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error!",
        description: "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        onSubmit={step === 3 ? handleSubmit : undefined}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <RecipeForm recipe={recipe} setRecipe={setRecipe} />
        ) : step === 2 ? (
          <IngredientsForm />
        ) : (
          <RecipeDetailsForm recipe={recipe} setRecipe={setRecipe} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button type="submit" w="7rem" colorScheme="red" variant="solid">
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Multistep;
