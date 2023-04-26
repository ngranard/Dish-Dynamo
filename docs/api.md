# FastAPI Endpoints

## Recipes Endpoints

![recipes-get-all](/docs/api/get-all-recipes.png)
This endpoint sends a `GET` request to get all recipes

This endpoint creates a `POST` request to create a recipe
![Recipe-create-recipe](/docs/api/create-recipe.png)
![recipe-success](/docs/api/create-recipe-success.png)

This endpoint sends a `GET` request to get one recipe, enter the recipe id, in the example recipe id is 3
![recipes-get-one-recipe](/docs/api/recipes-get-onev2.png)

This endpoint sends a `PUT` requst to update a recipe
![recipes-update-recipe](/docs/api/recipes-update-recipe.png)

<!-- could not update recipe for screenshot -->

This endpoint sends a `DELETE` request to delete a recipe
![recipes-delete-recipe](/docs/api/recipes-delete-recipe.png)

Enter recipe id you wish to delete, in the example reciep id is 3
Returns true upon successful deletion of recipe
![delete-recipe-execute](/docs/api/delete-recipe-execute.png)

![delete-recipe-success](/docs/api/delete-recipe-success.png)

![recipes-get-recipe-by-user](/docs/api/recipe-get-recipe-by-userv2.png)
This endpoint sends a `GET` request to get one recipe by user id

Success response 200:
![recipes-get-recipe-by-user](/docs/api/recipe-get-recipe-by-userv2-success.png)

## Search Endpoints

This endpoint sends a `GET` request to search by ingredient name, enter the ingredient as a string for example 'Shrimp'
![Get-search-by-ingredient-name](/docs/api/Get-search-by-ingredient-name.png)

This endpoint sends a `GET` reqeust to search by recipe name, enter name of the recipe as a string

<!-- could not get recipe by recipe name -->

# User Endpoints

## User (Token)

This endpoint sends a `Get` request to get user by token, enter session_getter(query) and fast_api(cookie) token (in this example 1 and 1)
![Get-token-user-token](/docs/api/get-token-user-token.png)

This endpoint sends a `POST` request to Login the user, enter username and password (in this example username:c@c.com password:c)
![post-token-login](/docs/api/post-token-login.png)

This endpoint sends a `DELETE` request to logout the user, enter session_getter and fastapi_token (in this example 1 and 1)
![delete-token-logout](/docs/api/delete-token-logout.png)

## User (Accounts)

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

This endpoint sends a `GET` request to get all difficulties
![get-difficulty-all](/docs/api/get-difficulty-all.png)

This endpoint sends a `POST` request to create a difficulty

<!-- couldn't create difficulty for screenshot -->

This endpoint sends a `PUT` request to update a difficulty

This endpoint sends a `DELETE` request to delete a difficulty

This endpoint sends a `GET` request to get difficulty name by difficulty_id
![get-difficulty-by-id](/docs/api/get-difficulty-by-id.png)

## Ingredients Endpoints

This endpoint sends a `GET` request to Get One ingredient
![get-one-ingredient](/docs/api/get-one-ingredient.png)

This endpoint sends a `PUT` request to Update one ingredient
![get-one-ingredient](/docs/api/update-ingredient.png)

This endpoint sends a `DELETE` request to delete one ingredient
![get-one-ingredient](/docs/api/delete-ingredient.png)

This endpoint sends a `GET` request to get ingredients by recipe
![get-one-ingredient](/docs/api/get-ingredient-by-recipe.png)
