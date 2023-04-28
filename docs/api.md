# FastAPI Endpoints

DishDynamo uses FastAPI to facilitate communication between the front end and the back end using RESTful API.

## Recipes Endpoints

| Action               | Method | URL                                          |
| -------------------- | ------ | -------------------------------------------- |
| List all recipes     | GET    | http://localhost:8000/recipes                |
| Create a recipe      | POST   | http://localhost:8000/recipes                |
| Get a one recipe     | GET    | http://localhost:8000/recipes/               |
| Update a recipe      | PUT    | http://localhost:8000/recipes/{recipe_id}    |
| Delete a recipe      | DELETE | http://localhost:8000/recipes/{recipe_id}    |
| Get a recipe by user | GET    | http://localhost:8000/recipes/user/{user_id} |

This endpoint sends a `GET` request to get all recipes
![recipes-get-all](/docs/api/get-all-recipes.png)

This endpoint creates a `POST` request to create a recipe
![Recipe-create-recipe](/docs/api/create-recipe.png)
![recipe-success](/docs/api/create-recipe-success.png)

This endpoint sends a `GET` request to get one recipe, enter the recipe id, in the example recipe id is 3
![recipes-get-one-recipe](/docs/api/get-one-recipe.png)

This endpoint sends a `PUT` requst to update a recipe
![recipes-update-recipe](/docs/api/update_recipe.png)

This endpoint sends a `DELETE` request to delete a recipe
![recipes-delete-recipe](/docs/api/recipes-delete-recipe.png)

Enter recipe id you wish to delete, in the example recipe id is 3
Returns true upon successful deletion of recipe
![delete-recipe-execute](/docs/api/delete-recipe-execute.png)

![delete-recipe-success](/docs/api/delete-recipe-success.png)

This endpoint sends a `GET` request to get one recipe by user id
![recipes-get-recipe-by-user](/docs/api/get-recipe-by-user.png)

## Search Endpoints

| Action                    | Method | URL                                                                |
| ------------------------- | ------ | ------------------------------------------------------------------ |
| Search by ingredient name | GET    | http://localhost:8000/search?ingredient={ingredient.name}          |
| Search by recipe name     | GET    | http://localhost:8000/search_recipe_name?recipe_name={recipe.name} |

This endpoint sends a `GET` request to search by ingredient name, enter the ingredient as a string for example 'Shrimp'
![Get-search-by-ingredient-name](/docs/api/Get-search-by-ingredient-name.png)

This endpoint sends a `GET` reqeust to search by recipe name, enter name of the recipe as a string
![search-recipe-name](/docs/api/search_recipe_name.png)

# User Endpoints

## User (Token)

| Action            | Method | URL                                                         |
| ----------------- | ------ | ----------------------------------------------------------- |
| Get user by token | GET    | http://localhost:8000/token?session_getter={session_getter} |
| Login the user    | POST   | http://localhost:8000/token                                 |
| Logout the user   | DELETE | http://localhost:8000/token?session_getter={session_getter} |

This endpoint sends a `Get` request to get user by token, enter session_getter(query) and fast_api(cookie) token (in this example 1 and 1)
![Get-token-user-token](/docs/api/get-token-user-token.png)

This endpoint sends a `POST` request to Login the user, enter username and password (in this example username:c@c.com password:c)
![post-token-login](/docs/api/post-token-login.png)

This endpoint sends a `DELETE` request to logout the user, enter session_getter and fastapi_token (in this example 1 and 1)
![delete-token-logout](/docs/api/delete-token-logout.png)

## User (Accounts)

| Action            | Method | URL                                     |
| ----------------- | ------ | --------------------------------------- |
| Create an account | POST   | http://localhost:8000/api/accounts      |
| Get all accounts  | GET    | http://localhost:8000/api/accounts/all  |
| Get one account   | GET    | http://localhost:8000/api/accounts/{id} |
| Update an account | PUT    | http://localhost:8000/api/accounts/{id} |
| Delete an account | DELETE | http://localhost:8000/api/accounts/{id} |

This endpoint sends a `POST` request to Create an account
![post-create-account](/docs/api/Post-Create-Account.png)

This endpoints sends a `GET` request to get all accounts
![get-all-accounts](/docs/api/Get-Get-All-Accounts.png)

This endpoint sends a `GET` request to get one account, enter id, in this example 2
![get-one-account](/docs/api/get-one-account.png)

This endpoint sends a `PUT` request to update an account, enter id, in this example 2
![post-update-one-account](/docs/api/post-update-one-account.png)

This endpoint sends a `DELETE` request to delete an account, enter id, in this example 2
![delete-one-account](/docs/api/Delete-one-account.png)

## User (Difficulties)

| Action                    | Method | URL                                                   |
| ------------------------- | ------ | ----------------------------------------------------- |
| Get all difficulties      | GET    | http://localhost:8000/difficulty                      |
| Create a difficulty       | POST   | http://localhost:8000/difficulty                      |
| Update a difficulty       | PUT    | http://localhost:8000/difficulty/(difficulty_id)      |
| Delete a difficulty       | DELETE | http://localhost:8000/api/accounts/{difficulty_id}    |
| Get difficulty name by id | GET    | http://localhost:8000/difficulty/name/{difficulty_id} |

This endpoint sends a `GET` request to get all difficulties
![get-difficulty-all](/docs/api/get-difficulty-all.png)

This endpoint sends a `POST` request to create a difficulty

<!-- couldn't create difficulty for screenshot -->

This endpoint sends a `PUT` request to update a difficulty

This endpoint sends a `DELETE` request to delete a difficulty

This endpoint sends a `GET` request to get difficulty name by difficulty_id
![get-difficulty-by-id](/docs/api/get-difficulty-by-id.png)

## Ingredients Endpoints

| Action                    | Method | URL                                              |
| ------------------------- | ------ | ------------------------------------------------ |
| Get all ingredients       | GET    | http://localhost:8000/ingredients                |
| Create an ingredient      | POST   | http://localhost:8000/ingredients                |
| Get one ingredient        | GET    | http://localhost:8000/ingredient/{ingredient_id} |
| Update one ingredient     | PUT    | http://localhost:8000/ingredient/{ingredient_id} |
| Delete one ingredient     | DELETE | http://localhost:8000/ingredient/{ingredient_id} |
| Get ingredients by recipe | GET    | http://localhost:8000/ingredient/{ingredient_id} |

This endpoint sends a `GET` request to get all ingredients
![get-all-ingredients](/docs/api/get-all-ingredients.png)

This endpoint sends a `POST` request to create an ingredient
![create-ingredient](/docs/api/create-ingredient.png)

This endpoint sends a `GET` request to Get One ingredient
![get-one-ingredient](/docs/api/get-one-ingredient.png)

This endpoint sends a `PUT` request to Update one ingredient
![get-one-ingredient](/docs/api/update-ingredient.png)

This endpoint sends a `DELETE` request to delete one ingredient
![get-one-ingredient](/docs/api/delete-ingredient.png)

This endpoint sends a `GET` request to get ingredients by recipe
![get-one-ingredient](/docs/api/get-ingredient-by-recipe.png)
