import { useEffect, useState } from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
      <Image src={recipe.image_url} alt={recipe.recipe_name} mb={4} />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {recipe.recipe_name}
      </Text>
      <Text mb={4}>{recipe.description}</Text>
      <Link onClick={handleClick}>View recipe</Link>
    </Box>
  );
}

function UserRecipes() {
  const token = useToken();
  const [user, setUser] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (recipe_id) => {
    const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/${recipe_id}`;
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    if (response.ok) {
      navigate("/my-recipes");
      fetchUserRecipes();
    }
  };

  const fetchUserRecipes = async () => {
    const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/recipes/`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setRecipes(data);
    }
  };

  const fetchUser = async () => {
    const url = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/token`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.account);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  useEffect(() => {
    fetchUserRecipes(user.id);
  }, [user]);

  return (
    <Box maxW="600px" mx="auto">
      <Text>{user.first_name}'s recipes</Text>
      {recipes.map((recipe) => (
        <Box key={recipe.id}>
          <RecipeCard recipe={recipe} />
          <Link onClick={() => handleDelete(recipe.id)}>Delete recipe</Link>
        </Box>
      ))}
    </Box>
  );
}

export default UserRecipes;
