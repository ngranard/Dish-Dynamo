from fastapi import APIRouter, Depends, Response, HTTPException
from typing import List, Optional, Union
from queries.recipes import (
    Error,
    RecipeOut,
    RecipeRepository,
    RecipeOutWithUser,
    RecipeInWithIngredients,
    RecipeOutWithAdditionalData,
    # search_by_multiple_ingredients
)


router = APIRouter()


@router.post("/recipes", response_model=Union[RecipeOut, Error])
def create_recipe(
    recipe: RecipeInWithIngredients,
    response: Response,
    repo: RecipeRepository = Depends(),
):
    return repo.create(recipe)


@router.get("/recipes", response_model=Union[List[RecipeOutWithUser], Error])
def get_all(
    repo: RecipeRepository = Depends(),
):
    return repo.get_all()


@router.put("/recipes/{recipe_id}", response_model=Union[RecipeOut, Error])
def update_recipe(
    recipe_id: int,
    recipe: RecipeInWithIngredients,
    repo: RecipeRepository = Depends(),
) -> Union[Error, RecipeOut]:
    return repo.update(recipe_id, recipe)


@router.delete("/recipes/{recipe_id}", response_model=bool)
def delete_recipe(
    recipe_id: int,
    repo: RecipeRepository = Depends(),
) -> bool:
    return repo.delete(recipe_id)


@router.get(
    "/recipes/{recipe_id}",
    response_model=Optional[RecipeOutWithUser],
)
def get_one_recipe(
    recipe_id: int,
    response: Response,
    repo: RecipeRepository = Depends(),
) -> Optional[RecipeOutWithUser]:
    recipe = repo.get_one(recipe_id)
    if recipe is None:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return recipe


@router.get(
    "/recipes/user/{user_id}",
    response_model=Union[List[RecipeOutWithUser], Error],
)
def get_recipe_by_user(
    user_id: int,
    response: Response,
    repo: RecipeRepository = Depends(),
) -> Union[List[RecipeOutWithUser], Error]:
    recipe = repo.get_by_user_id(user_id)
    if recipe is None:
        raise HTTPException(status_code=404, detail="No recipes found for this user")
    return recipe


@router.get("/search", response_model=Union[List[RecipeOutWithAdditionalData], Error])
def search_by_multiple_ingredients(
    ingredients: str,
    repo: RecipeRepository = Depends(),
) -> Union[List[RecipeOutWithAdditionalData], Error]:
    recipes = repo.search_by_multiple_ingredients(ingredients)
    return recipes


@router.get(
    "/search_recipe_name",
    response_model=Union[List[RecipeOutWithUser], Error],
)
def search_by_recipe_name(
    recipe_name: str,
    repo: RecipeRepository = Depends(),
) -> Union[List[RecipeOutWithUser], Error]:
    recipes = repo.search_by_recipe_name(recipe_name)
    return recipes
