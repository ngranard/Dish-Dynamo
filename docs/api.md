# FastAPI Endpoints

## Recipes

![recipes-get-all](/docs/api/recipes-get-all.png)
This endpoint sends a `GET` request to get all recipes

Sample successful response (200):

```
[
  {
    "id": 1,
    "recipe_name": "Egg",
    "description": "Egg",
    "image_url": "https://images.pexels.com/photos/6958019/pexels-photo-6958019.jpeg",
    "instructions": "Egg",
    "cooking_time": "10",
    "user_id": 1,
    "difficulty_id": 1,
    "user_first_name": "c",
    "user_last_name": "c",
    "user_email": "c@c.com",
    "difficulty": "Very Easy"
  },
  {
    "id": 5,
    "recipe_name": "Shrimp Ramen",
    "description": "Spicy\nSeafoody\nRamen-y\n\nWhat's more to love?!",
    "image_url": "https://images.pexels.com/photos/3876122/pexels-photo-3876122.jpeg",
    "instructions": "1. Boil Ramen\n2. Put Shrimp\n3. Cut green onions\n4. Put Green onions in \n5. (Optional) put cheese\n6. Enjoy~",
    "cooking_time": "15",
    "user_id": 1,
    "difficulty_id": 2,
    "user_first_name": "c",
    "user_last_name": "c",
    "user_email": "c@c.com",
    "difficulty": "Easy"
  },
  {
    "id": 4,
    "recipe_name": "Sushi",
    "description": "sushi",
    "image_url": "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    "instructions": "sushi",
    "cooking_time": "10",
    "user_id": 1,
    "difficulty_id": 4,
    "user_first_name": "c",
    "user_last_name": "c",
    "user_email": "c@c.com",
    "difficulty": "Hard"
  },
  {
    "id": 3,
    "recipe_name": "test",
    "description": "test",
    "image_url": "http://www.example.com",
    "instructions": "test",
    "cooking_time": "1",
    "user_id": 1,
    "difficulty_id": 2,
    "user_first_name": "c",
    "user_last_name": "c",
    "user_email": "c@c.com",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "recipe_name": "toast",
    "description": "toast",
    "image_url": "https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg",
    "instructions": "toast",
    "cooking_time": "10",
    "user_id": 1,
    "difficulty_id": 1,
    "user_first_name": "c",
    "user_last_name": "c",
    "user_email": "c@c.com",
    "difficulty": "Very Easy"
  }
```

![Recipe-create-recipe](/docs/api/recipes-create-recipe.png)
This endpoint creates a `POST` request to create a recipe

Json request body:

```
{
  "recipe_name": "string",
  "description": "string",
  "image_url": "string",
  "instructions": "string",
  "cooking_time": "string",
  "user_id": 0,
  "difficulty_id": 0,
  "ingredients": [
    {
      "quantity": 0,
      "measurement": "string",
      "name": "string"
    }
  ]
}
```

Successful response (200 status code):

```
{
  "id": 0,
  "recipe_name": "string",
  "description": "string",
  "image_url": "string",
  "instructions": "string",
  "cooking_time": "string",
  "user_id": 0,
  "difficulty_id": 0
}
```

![recipes-get-one-recipe](/docs/api/recipes-get-onev2.png)
This endpoint sends a `GET` request to get one recipe, enter the recipe id, in the example recipe id is 3

![recipes-update-recipe](/docs/api/recipes-update-recipe.png)
This endpoint sends a `PUT` requst to update a recipe

![recipes-delete-recipe](/docs/api/recipes-delete-recipe.png)
This endpoint sends a `DELETE` request to delete a recipe

![delete-recipe-execute](/docs/api/recipes-delete-execute.png)
Enter recipe id you wish to delete, in the example reciep id is 3

![delete-recipe-success](/docs/api/delete-recipe-success.png)
Returns true upon successful deletion of recipe

![recipes-get-recipe-by-user](/docs/api/recipes-get-recipe-by-userv2.png)
This endpoint sends a `GET` request to get one recipe by user id

Success response 200:
![recipes-get-recipe-by-user](/docs/api/recipes-get-recipe-by-userv2-success.png)
