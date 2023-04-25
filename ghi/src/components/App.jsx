import ThemeToggler from "./ThemeToggler";
import "./App.css";
import SignupForm from "./SignupForm";
import { Route, Routes } from "react-router-dom";
import Nav from "./Navigation/Nav";
import LoginForm from "./LoginForm.js";
import Main from "./Main";
import Footer from "./Footer";
import SearchBar from "./Recipes/RecipeSearch";
import { useEffect, useState } from "react";
import CreateRecipe from "./Recipes/CreateRecipe";
import { Box } from "@chakra-ui/react";
import UpdateProfile from "./UpdateProfileForm";
import UserRecipes from "./Recipes/UserRecipes";
import RecipeDetails from "./Recipes/UserRecipeDetail";

function App() {
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    if (document.getElementById("footer")) {
      setFooterHeight(document.getElementById("footer").clientHeight);
    }
  }, []);

  return (
    <>
      <Box>
        <Nav />
        <Routes>
          <Route path="/" element={<Main footerHeight={footerHeight} />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="create" element={<CreateRecipe />} />
          <Route path="update" element={<UpdateProfile />} />
          <Route path="my-recipes" element={<UserRecipes />} />
          <Route path="recipes/:recipeId" element={<RecipeDetails />} />

        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
