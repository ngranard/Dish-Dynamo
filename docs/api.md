# FastAPI Endpoints

## Recipes

![Recipe-create-recipe](/docs/api/recipes-create-recipe.png)
This endpoint creates a post request to create a recipe

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

Successful response:

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

![recipes-get-all](/docs/api/recipes-get-all.png)
This endpoint sends a get request to get all recipes

![JSON-recipes-get-all](/docs/api/JSON-recipes-get-all.png)

![recipes-delete-recipe](/docs/api/recipes-delete-recipe.png)

![recipes-get-one-recipe](/docs/api/recipes-get-one-recipe.png)

![recipes-get-recipe-by-user](/docs/api/recipes-get-recipe-by-user.png)

![recipes-update-recipe](/docs/api/recipes-update-recipe.png)
