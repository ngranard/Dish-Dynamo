from fastapi import (
    Depends,
    Response,
    APIRouter,
)
from typing import List, Optional, Union
from queries.ingredients import (
    IngredientIn,
    IngredientRepository,
    IngredientOut,
    Error,
)

router = APIRouter()


@router.post("/ingredients", response_model=Union[IngredientOut, Error])
def create_ingredient(
    ingredient: IngredientIn,
    repo: IngredientRepository = Depends(),
):
    return repo.create(ingredient)


@router.get("/ingredients", response_model=Union[List[IngredientOut], Error])
def get_all(
    repo: IngredientRepository = Depends(),
):
    return repo.get_all()


@router.put(
    "/ingredient/{ingredient_id}", response_model=Union[IngredientOut, Error]
)
def update_ingredient(
    ingredient_id: int,
    ingredient: IngredientIn,
    repo: IngredientRepository = Depends(),
) -> Union[Error, IngredientRepository]:
    return repo.update(ingredient_id, ingredient)


@router.delete("/ingredient/{ingredient_id}", response_model=bool)
def delete_ingredient(
    ingredient_id: int,
    repo: IngredientRepository = Depends(),
) -> bool:
    return repo.delete(ingredient_id)


@router.get(
    "/ingredient/{ingredient_id}", response_model=Optional[IngredientOut]
)
def get_one_ingredient(
    ingredient_id: int,
    response: Response,
    repo: IngredientRepository = Depends(),
) -> IngredientOut:
    ingredient = repo.get_one(ingredient_id)
    if ingredient is None:
        response.status_code = 404
    return ingredient
