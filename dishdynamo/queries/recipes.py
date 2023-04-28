from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool
import logging

logger = logging.getLogger(__name__)


class Error(BaseModel):
    message: str


class IngredientIn(BaseModel):
    quantity: str
    measurement: str
    name: str


class RecipeIn(BaseModel):
    recipe_name: str
    description: str
    image_url: str
    instructions: str
    cooking_time: str
    user_id: int
    difficulty_id: int


class RecipeInWithIngredients(RecipeIn):
    ingredients: List[IngredientIn]


class RecipeOut(BaseModel):
    id: int
    recipe_name: str
    description: str
    image_url: str
    instructions: str
    cooking_time: str
    user_id: int
    difficulty_id: int


class RecipeOutWithUser(RecipeOut):
    user_first_name: str
    user_last_name: str
    user_email: str
    difficulty: str


class RecipeOutWithAdditionalData(RecipeOut):
    ingredient_quantity: Optional[int]
    ingredient_measurement: Optional[str]
    ingredient_name: Optional[str]
    ingredient_recipe_id: Optional[int]
    user_first_name: str
    user_last_name: str
    user_email: str
    difficulty: str


class RecipeRepository:
    def get_by_user_id(self, user_id: int) -> List[Union[Error, RecipeOutWithUser]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT r.id, r.recipe_name, r.description,
                            r.image_url, r.instructions, r.cooking_time,
                            r.user_id, r.difficulty_id, u.first_name,
                            u.last_name, u.email, d.name AS difficulty
                        FROM recipes AS r
                        LEFT OUTER JOIN users AS u
                            ON (r.user_id = u.id)
                        LEFT OUTER JOIN difficulty AS d
                            ON (r.difficulty_id = d.id)
                        WHERE r.user_id = %s
                        ORDER BY recipe_name;
                        """,
                        [user_id],
                    )
                    return [self.record_to_recipe_out(record) for record in result]
        except Exception as e:
            print(e)
            return {"message": "Could not get list of recipes for this user"}

    def get_one(self, recipe_id: int) -> Optional[RecipeOutWithUser]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT r.id, r.recipe_name, r.description,
                            r.image_url, r.instructions, r.cooking_time,
                            r.user_id, r.difficulty_id,
                            u.first_name, u.last_name, u.email, d.name AS difficulty
                        FROM recipes AS r
                        LEFT OUTER JOIN users AS u
                            ON (r.user_id = u.id)
                        LEFT OUTER JOIN difficulty AS d
                            ON (r.difficulty_id = d.id)
                        WHERE r.id = %s
                        """,
                        [recipe_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_recipe_out(
                        record
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get that recipe"}

    def delete(self, recipe_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    # delete related records from ingredients table
                    db.execute(
                        """
                        DELETE FROM ingredients
                        WHERE recipe_id = %s
                        """,
                        [recipe_id],
                    )
                    # delete recipe from recipes table
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

    def update(self, recipe_id: int, recipe: RecipeInWithIngredients) -> Union[RecipeOut, Error]:
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
                            recipe.cooking_time,
                            recipe.user_id,
                            recipe.difficulty_id,
                            recipe_id,
                        ],
                    )
                    result = db.execute(
                        """
                        SELECT i.id
                        FROM ingredients AS i
                        WHERE i.recipe_id = %s
                        """,
                        [recipe_id],
                    )
                    id_list = [record[0] for record in result]
                    for id, ingredient in zip(id_list, recipe.ingredients):
                        db.execute(
                            """
                            UPDATE ingredients
                            SET quantity = %s
                                , measurement = %s
                                , name = %s
                                , recipe_id = %s
                            WHERE id = %s
                            """,
                            [
                                ingredient.quantity,
                                ingredient.measurement,
                                ingredient.name,
                                recipe_id,
                                id,
                            ],
                        )
                    return self.recipe_in_to_out_with_ingredients(recipe_id, recipe)
        except Exception as e:
            print(e)
            return {"message": "Could not update that recipe"}

    def get_all(self) -> Union[Error, List[RecipeOutWithUser]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT r.id, r.recipe_name, r.description,
                            r.image_url, r.instructions,
                            r.cooking_time, r.user_id, r.difficulty_id,
                            u.first_name, u.last_name, u.email,
                            d.name AS difficulty
                        FROM recipes AS r
                        LEFT OUTER JOIN users AS u
                            ON (r.user_id = u.id)
                        LEFT OUTER JOIN difficulty AS d
                            ON (r.difficulty_id = d.id)
                        ORDER BY recipe_name;
                        """,
                    )
                    return [self.record_to_recipe_out(record) for record in result]
        except Exception as e:
            print(e)
            return {"message": "Could not get all recipes"}

    def create(self, recipe: RecipeInWithIngredients) -> Union[RecipeOut, Error]:
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
                                cooking_time,
                                user_id,
                                difficulty_id
                            )
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            recipe.recipe_name,
                            recipe.description,
                            recipe.image_url,
                            recipe.instructions,
                            recipe.cooking_time,
                            recipe.user_id,
                            recipe.difficulty_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    for ingredient in recipe.ingredients:
                        db.execute(
                            """
                            INSERT INTO ingredients
                                (
                                    quantity,
                                    measurement,
                                    name,
                                    recipe_id
                                )
                            VALUES
                                (%s, %s, %s, %s)
                            """,
                            [
                                ingredient.quantity,
                                ingredient.measurement,
                                ingredient.name,
                                id,
                            ],
                        )
                    return self.recipe_in_to_out_with_ingredients(id, recipe)
        except Exception:
            return {"message": "Create did not work"}

    def recipe_in_to_out_with_ingredients(self, id: int, recipe: RecipeInWithIngredients):
        old_data = recipe.dict()
        return RecipeOut(id=id, **old_data)

    def recipe_in_to_out(self, id: int, recipe: RecipeIn):
        old_data = recipe.dict()
        return RecipeOut(id=id, **old_data)

    def record_to_recipe_out_with_additional_data(self, record):
        return RecipeOutWithAdditionalData(
            id=record[0],
            recipe_name=record[1],
            description=record[2],
            image_url=record[3],
            instructions=record[4],
            cooking_time=record[5],
            user_id=record[6],
            difficulty_id=record[7],
            ingredient_quantity=record[8],
            ingredient_measurement=record[9],
            ingredient_name=record[10],
            ingredient_recipe_id=record[11],
            user_first_name=record[12],
            user_last_name=record[13],
            user_email=record[14],
            difficulty=record[15],
        )

    def record_to_recipe_out(self, record):
        return RecipeOutWithUser(
            id=record[0],
            recipe_name=record[1],
            description=record[2],
            image_url=record[3],
            instructions=record[4],
            cooking_time=record[5],
            user_id=record[6],
            difficulty_id=record[7],
            user_first_name=record[8],
            user_last_name=record[9],
            user_email=record[10],
            difficulty=record[11],
        )

    def search_by_ingredient_name(
        self, ingredient_name: str
    ) -> Union[Error, List[RecipeOutWithAdditionalData]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT DISTINCT r.id
                            , r.recipe_name
                            , r.description
                            , r.image_url
                            , r.instructions
                            , r.cooking_time
                            , r.user_id
                            , r.difficulty_id,
                            u.first_name, u.last_name, u.email,
                            d.name AS difficulty
                        FROM recipes r
                        JOIN ingredients i ON r.id = i.recipe_id
                        LEFT JOIN users u ON r.user_id = u.id
                        LEFT JOIN difficulty d ON r.difficulty_id = d.id
                        WHERE LOWER(i.name) LIKE %s
                        ORDER BY r.recipe_name;
                        """,
                        [f"%{ingredient_name.lower()}%"],
                    )
                    return [self.record_to_recipe_out(record) for record in result]
        except Exception as e:
            logger.error(f"Error searching recipes by ingredient: {e}")
            return Error(message="Could not search recipes by ingredient")

    def search_by_recipe_name(self, recipe_name: str) -> Union[Error, List[RecipeOutWithUser]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            SELECT r.id, r.recipe_name, r.description,
                                r.image_url, r.instructions,
                                r.cooking_time, r.user_id, r.difficulty_id,
                                u.first_name, u.last_name, u.email,
                                d.name AS difficulty
                            FROM recipes AS r
                            LEFT OUTER JOIN users AS u
                                ON (r.user_id = u.id)
                            LEFT OUTER JOIN difficulty AS d
                                ON (r.difficulty_id = d.id)
                            WHERE LOWER(r.recipe_name) LIKE %s
                            ORDER BY recipe_name;
                            """,
                        [f"%{recipe_name.lower()}%"],
                    )
                    return [self.record_to_recipe_out(record) for record in result]
        except Exception as e:
            logger.error(f"Error searching recipes by name: {e}")
            return Error(message="Could not search recipes by name")
