import React, { useState } from "react";
import {
  Box,
  Button,
  useToast,
  Progress,
  ButtonGroup,
  Heading,
  Flex,
} from "@chakra-ui/react";

import RecipeForm from "./RecipeForm";
import RecipeDetailsForm from "./RecipeDetailsForm";
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from "../useUser";

function Multistep() {
  const validateForm = () => {
    const requiredFields = [
      "recipe_name",
      "description",
      "instructions",
      "cooking_time",
    ];
    return requiredFields.every((field) => recipe[field]);
  };

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const initialRecipe = {
    recipe_name: "",
    description: "",
    instructions: "",
    cooking_time: "",
    difficulty_id: 0,
    rating: "",
    image_url: "",
  };
  const [recipe, setRecipe] = useState(initialRecipe);
  const token = useToken();
  const user = useUser(token);

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(step + 1);
      setProgress(progress + 50);
    } else {
      toast({
        title: "Error!",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const recipeWithUserId = { ...recipe, user_id: user.id };
      console.log(recipe);
      try {
        const response = await fetch("http://localhost:8000/recipes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(recipeWithUserId),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        if (responseData) {
          toast({
            title: "Success!",
            description: "Recipe added successfully!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setRecipe(initialRecipe); // Reset the form data
        }
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
    } else {
      toast({
        title: "Error!",
        description: "Please fill in all required fields.",
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
        onSubmit={handleSubmit}
      >
        <Heading as="h2" size="xl" mb="5%" textAlign="center">
          Enter Recipe Info
        </Heading>
        {step === 1 ? (
          <RecipeForm recipe={recipe} setRecipe={setRecipe} />
        ) : (
          <RecipeDetailsForm recipe={recipe} setRecipe={setRecipe} />
        )}
        <Progress
          hasStripe
          value={progress}
          mt="5%"
          mx="5%"
          isAnimated
        ></Progress>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {step === 1 ? (
                <Button
                  type="submit"
                  w="7rem"
                  onClick={handleNext}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                >
                  Submit
                </Button>
              )}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Multistep;
