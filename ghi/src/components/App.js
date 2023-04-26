import "./App.css";
import SignupForm from "./Navigation/SignupForm";
import { Route, Routes } from "react-router-dom";
import Nav from "./Navigation/Nav";
import LoginForm from "./Navigation/LoginForm.js";
import Main from "./Main";
import Footer from "./Footer";
import SearchBar from "./Recipes/RecipeSearch";
import { useEffect, useState } from "react";
import CreateRecipe from "./Recipes/CreateRecipe";
import { Box } from "@chakra-ui/react";
import UpdateProfile from "./UpdateProfileForm";
import UserRecipes from "./Recipes/UserRecipes";
import Contact from "./Contact";
import RecipeDetails from "./Recipes/UserRecipeDetail";
import TestimonialsBig from "./TestimonialsBig.tsx";
import ScrollToTop from "./Navigation/ScrollToTop";
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main footerHeight={footerHeight} />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="create" element={<CreateRecipe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recipes/:recipe_id" element={<RecipeDetails />} />
          <Route path="testimonials" element={<TestimonialsBig />} />
          <Route path="update" element={<UpdateProfile />} />
          <Route path="my-recipes" element={<UserRecipes />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
