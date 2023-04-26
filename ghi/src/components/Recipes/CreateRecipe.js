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
import IngredientsForm from "./Ingredients/IngredientsForm";
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
    return requiredFields.every((field) => !!recipe[field]);
  };

  const validateIngredients = () => {
    return ingredients.length > 0;
  };
  const [ingredients, setIngredients] = useState([]);
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(33);
  const initialRecipe = {
    recipe_name: "",
    description: "",
    instructions: "",
    cooking_time: "",
    ingredients: [],
    difficulty_id: 0,
    rating: "",
    image_url: "",
  };
  const [recipe, setRecipe] = useState(initialRecipe);
  const token = useToken();
  const user = useUser(token);

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 0) {
      if (validateForm()) {
        setStep(1);
        setProgress(66);
      } else {
        toast({
          title: "Error!",
          description: "Please fill in all fields.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (step === 1) {
      if (validateIngredients()) {
        setStep(2);
        setProgress(99);
      } else {
        toast({
          title: "Error!",
          description: "Please add at least one ingredient.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (validateForm()) {
      setStep(step + 1);
      setProgress(100);
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
      setProgress(100);
      const recipeWithUserId = { ...recipe, user_id: user.id };
      console.log(recipe);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(recipeWithUserId),
          },
        );

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
          setRecipe(initialRecipe);
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
        {step === 0 && <RecipeForm recipe={recipe} setRecipe={setRecipe} />}
        {step === 1 && (
          <IngredientsForm
            recipe={recipe}
            setRecipe={setRecipe}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        )}
        {step === 2 && (
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
                  setProgress(progress - 33);
                }}
                isDisabled={step === 0}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {step !== 2 ? (
                <Button
                  type="button"
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
