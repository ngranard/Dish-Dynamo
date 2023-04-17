from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.difficulty import (
    Error,
    DifficultyIn,
    DifficultyOut,
    DifficultyRepository,
)


router = APIRouter()


@router.post("/difficulty", response_model=Union[DifficultyOut, Error])
def create_difficulty(
    difficulty: DifficultyIn,
    response: Response,
    repo: DifficultyRepository = Depends(),
):
    return repo.create(difficulty)


@router.get("/difficulty", response_model=Union[List[DifficultyOut], Error])
def get_all(
    repo: DifficultyRepository = Depends(),
):
    return repo.get_all()


@router.put("/difficulty/{difficulty_id}", response_model=Union[DifficultyOut, Error])
def update_difficulty(
    difficulty_id: int,
    difficulty: DifficultyIn,
    repo: DifficultyRepository = Depends(),
) -> Union[Error, DifficultyRepository]:
    return repo.update(difficulty_id, difficulty)


@router.delete("/difficulty/{difficulty_id}", response_model=bool)
def delete_difficulty(
    difficulty_id: int,
    repo: DifficultyRepository = Depends(),
) -> bool:
    return repo.delete(difficulty_id)


@router.get("/difficulty/{difficulty_id}", response_model=Optional[DifficultyOut])
def get_one_difficulty(
    difficulty_id: int,
    response: Response,
    repo: DifficultyRepository = Depends(),
) -> DifficultyOut:
    difficulty = repo.get_one(difficulty_id)
    if difficulty is None:
        response.status_code = 404
    return difficulty
