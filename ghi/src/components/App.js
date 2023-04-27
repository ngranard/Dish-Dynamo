import "./App.css";
import SignupForm from "./Navigation/SignupForm";
import { Route, Routes } from "react-router-dom";
import Nav from "./Navigation/Nav";
import LoginForm from "./Navigation/LoginForm.js";
import Main from "./Main";
import Footer from "./Footer/Footer";
import SearchBar from "./Recipes/RecipeSearch";
import { useEffect, useState } from "react";
import CreateRecipe from "./Recipes/CreateRecipe";
import { Box } from "@chakra-ui/react";
import UpdateProfile from "./UpdateProfileForm";
import UserRecipes from "./Recipes/UserRecipes";
import Contact from "./Contact";
<<<<<<< HEAD
import TestimonialsBig from "./Footer/TestimonialsBig.tsx";
=======
import RecipeDetails from "./Recipes/RecipeDetail";
import TestimonialsBig from "./TestimonialsBig.tsx";
>>>>>>> main
import ScrollToTop from "./Navigation/ScrollToTop";
import Premium from "./Footer/Premium.tsx";
import RecipeDetails from "./Recipes/UserRecipeDetail";
import AboutPage from "./Footer/About/About.tsx";

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
          <Route path="premium" element={<Premium />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
