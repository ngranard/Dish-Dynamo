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
import Contact from "./Footer/Contact";
import TestimonialsBig from "./Footer/TestimonialsBig.tsx";
import RecipeDetails from "./Recipes/RecipeDetail";
import ScrollToTop from "./Navigation/ScrollToTop";
import EditRecipe from "./Recipes/EditRecipeForm";
import Premium from "./Footer/Premium.tsx";
import AboutPage from "./Footer/About/About.tsx";
import UserContext from "../userContext";
import PrivacyPolicy from "./Footer/Privacy";

function App() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    if (document.getElementById("footer")) {
      setFooterHeight(document.getElementById("footer").clientHeight);
    }
  }, []);

  return (
    <>
      <Box>
        <UserContext.Provider value={{ name, setName }}>
          <Nav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main footerHeight={footerHeight} />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="search" element={<SearchBar />} />
            <Route path="create" element={<CreateRecipe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="recipes">
              <Route path=":recipe_id" element={<RecipeDetails />} />
              <Route path="edit/:recipe_id" element={<EditRecipe />} />
            </Route>
            <Route path="testimonials" element={<TestimonialsBig />} />
            <Route path="update" element={<UpdateProfile />} />
            <Route path="my-recipes" element={<UserRecipes />} />
            <Route path="premium" element={<Premium />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
          </Routes>
        </UserContext.Provider>
      </Box>
      <Footer />
    </>
  );
}

export default App;
