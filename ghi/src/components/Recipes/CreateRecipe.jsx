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
    difficulty_id: 1,
    rating: 0,
    image_url: "",
  };
  const [recipe, setRecipe] = useState(initialRecipe);

  const handleSubmit = async (e) => {
    // Implement your form submission logic here.
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
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <RecipeForm />
        ) : step === 2 ? (
          <IngredientsForm />
        ) : (
          <RecipeDetailsForm
            recipe={recipe}
            setRecipe={setRecipe}
            handleSubmit={handleSubmit}
          />
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
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
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
