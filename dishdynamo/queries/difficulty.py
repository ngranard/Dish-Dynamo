from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class DifficultyIn(BaseModel):
    name: str


class DifficultyOut(BaseModel):
    id: int
    name: str


class DifficultyRepository:
    def get_one(self, difficulty_id: int) -> Optional[DifficultyOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , name
                        FROM difficulty
                        WHERE id = %s
                        """,
                        [difficulty_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_difficulty_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that difficulty"}

    def delete(self, difficulty_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM difficulty
                        WHERE id = %s
                        """,
                        [difficulty_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(
        self, difficulty_id: int, difficulty: DifficultyIn
    ) -> Union[DifficultyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE difficulty
                        SET name = %s
                        WHERE id = %s
                        """,
                        [difficulty.name, difficulty_id],
                    )
                    return self.difficulty_in_to_out(difficulty_id, difficulty)
        except Exception as e:
            print(e)
            return {"message": "Could not update that difficulty"}

    def get_all(self) -> Union[Error, List[DifficultyOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, name
                        FROM difficulty;
                        """
                    )
                    return [
                        self.record_to_difficulty_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message:": "Could not get all difficulties"}

    def get_difficulty_name(self, difficulty_id: int) -> Optional[str]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT name
                        FROM difficulty
                        WHERE id = %s
                        """,
                        [difficulty_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return record[0]
        except Exception as e:
            print(e)
            return None

    def create(self, difficulty: DifficultyIn) -> Union[DifficultyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO difficulty
                            (name)
                        VALUES
                            (%s)
                        RETURNING id;
                        """,
                        [difficulty.name],
                    )
                    id = result.fetchone()[0]
                    return self.difficulty_in_to_out(id, difficulty)
        except Exception:
            return {"message": "Create did not work"}

    def difficulty_in_to_out(self, id: int, difficulty: DifficultyIn):
        old_data = difficulty.dict()
        return DifficultyOut(id=id, **old_data)

    def record_to_difficulty_out(self, record):
        return DifficultyOut(
            id=record[0],
            name=record[1],
        )
