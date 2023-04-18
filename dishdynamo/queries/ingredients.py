from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class IngredientIn(BaseModel):
    quantity: int
    measurement: str
    name: str
    recipe_id: int


class IngredientOut(BaseModel):
    recipe_id: int
    quantity: int
    measurement: str
    name: str


class IngredientRepository(BaseModel):
    def get_one(self, ingredient_id: int) -> Optional[IngredientOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , quantity
                            , measurement
                            , name
                        FROM ingredients
                        WHERE id = %s
                        """,
                        [ingredient_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_ingredient_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that ingredient"}

    def delete(self, ingredient_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM ingredients
                        WHERE id = %s
                        """,
                        [ingredient_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(
        self, ingredient_id: int, ingredients: IngredientIn
    ) -> Union[IngredientOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE ingredients
                        SET quantity = %s
                            , measurement = %s
                            , name = %s
                        WHERE id = %s
                        """,
                        [
                            ingredients.quantity,
                            ingredients.measurement,
                            ingredients.name,
                            ingredient_id,
                        ],
                    )
                    return self.ingredient_in_to_out(
                        ingredient_id, ingredients
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not update that ingredient"}

    def get_all(self) -> Union[Error, List[IngredientOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , quantity
                            , measurement
                            , name
                        FROM ingredients
                        ORDER BY name;
                        """
                    )
                    return [
                        self.record_to_ingredient_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message:": "Could not get all ingredients"}

    def create(self, ingredient: IngredientIn) -> IngredientOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                INSERT INTO ingredients
                    (quantity, measurement, name, recipe_id)
                VALUES
                    (%s, %s, %s, %s)
                RETURNING id;
                """,
                    [
                        ingredient.quantity,
                        ingredient.measurement,
                        ingredient.name,
                        ingredient.recipe_id,
                    ],
                )
                id = result.fetchone()[0]
                old_data = ingredient.dict()
                return IngredientOut(id=id, **old_data)

    def record_to_ingredient_out(self, record):
        return IngredientOut(
            recipe_id=record[0],
            quantity=record[1],
            measurement=record[2],
            name=record[3],
        )

    def ingredient_in_to_out(self, id: int, ingredient: IngredientIn):
        old_data = ingredient.dict()
        return IngredientOut(id=id, **old_data)
