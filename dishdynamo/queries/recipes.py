from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class RecipeIn(BaseModel):
    recipe_name: str
    description: str
    image_url: str
    instructions: str
    rating: Optional[int]
    cooking_time: str
    user_id: int
    difficulty_id: int


class RecipeOut(BaseModel):
    id: int
    recipe_name: str
    description: str
    image_url: str
    instructions: str
    rating: Optional[int]
    cooking_time: str
    user_id: int
    difficulty_id: int


class RecipeRepository:
    def get_by_user_id(self, user_id: int) -> Union[Error, List[RecipeOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                             , recipe_name
                             , description
                             , image_url
                             , instructions
                             , rating
                             , cooking_time
                             , user_id
                             , difficulty_id
                        FROM recipes
                        WHERE user_id = %s
                        ORDER BY recipe_name;
                        """,
                        [user_id],
                    )
                    return [
                        self.record_to_recipe_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get list of recipes for this user"}

    def get_one(self, recipe_id: int) -> Optional[RecipeOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , recipe_name
                            , description
                            , image_url
                            , instructions
                            , rating
                            , cooking_time
                            , user_id
                            , difficulty_id
                        FROM recipes
                        WHERE id = %s
                        """,
                        [recipe_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_recipe_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that recipe"}

    def delete(self, recipe_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM recipes
                        WHERE id = %s
                        """,
                        [recipe_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(
        self, recipe_id: int, recipe: RecipeIn
    ) -> Union[RecipeOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE recipes
                        SET recipe_name = %s
                            , description = %s
                            , image_url = %s
                            , instructions = %s
                            , rating = %s
                            , cooking_time = %s
                            , user_id = %s
                            , difficulty_id = %s
                        WHERE id = %s
                        """,
                        [
                            recipe.recipe_name,
                            recipe.description,
                            recipe.image_url,
                            recipe.instructions,
                            recipe.rating,
                            recipe.cooking_time,
                            recipe.user_id,
                            recipe.difficulty_id,
                            recipe_id,
                        ],
                    )
                    return self.recipe_in_to_out(recipe_id, recipe)
        except Exception as e:
            print(e)
            return {"message": "Could not update that recipe"}

    def get_all(self) -> Union[Error, List[RecipeOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , recipe_name
                            , description
                            , image_url
                            , instructions
                            , rating
                            , cooking_time
                            , user_id
                            , difficulty_id
                        FROM recipes
                        ORDER BY recipe_name;
                        """
                    )
                    return [
                        self.record_to_recipe_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all recipes"}

    def create(self, recipe: RecipeIn) -> Union[RecipeOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO recipes
                            (
                                recipe_name,
                                description,
                                image_url,
                                instructions,
                                rating,
                                cooking_time,
                                user_id,
                                difficulty_id
                            )
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            recipe.recipe_name,
                            recipe.description,
                            recipe.image_url,
                            recipe.instructions,
                            recipe.rating,
                            recipe.cooking_time,
                            recipe.user_id,
                            recipe.difficulty_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.recipe_in_to_out(id, recipe)
        except Exception:
            return {"message": "Create did not work"}

    def recipe_in_to_out(self, id: int, recipe: RecipeIn):
        old_data = recipe.dict()
        return RecipeOut(id=id, **old_data)

    def record_to_recipe_out(self, record):
        return RecipeOut(
            id=record[0],
            recipe_name=record[1],
            description=record[2],
            image_url=record[3],
            instructions=record[4],
            rating=record[5],
            cooking_time=record[6],
            user_id=record[7],
            difficulty_id=record[8],
        )
