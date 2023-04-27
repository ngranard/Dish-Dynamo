from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class CommentIn(BaseModel):
    comment: str
    user_id: int
    recipe_id: int


class CommentOut(BaseModel):
    id: int
    comment: str
    user_id: int
    recipe_id: int


class CommentRepository:
    def get_one(self, id: int) -> Optional[CommentOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            comment,
                            user_id,
                            recipe_id
                        FROM comments
                        WHERE id = %s
                        """,
                        [id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_comment_out(record)
        except Exception:
            return {"message": "Could not find comment"}

    def get_all(self) -> Union[Error, List[CommentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT
                            id,
                            comment,
                            user_id,
                            recipe_id
                        FROM comments;
                        """
                    )
                    return [self.record_to_comment_out(record) for record in db]
        except Exception:
            return {"message": "Could not get comments"}

    def delete(self, comment_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM comments
                        WHERE id = %s
                        """,
                        [comment_id],
                    )
                    return True
        except Exception:
            return False

    def update(self, comment_id: int, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE comments
                        SET
                        comment = %s
                        WHERE id = %s
                        """,
                        [
                            comment.comment,
                            comment_id,
                        ],
                    )
                    return self.comment_in_to_out(comment_id, comment)
        except Exception:
            return {"message": "Could not update comment"}

    def create(self, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO comments
                            (
                            comment,
                            user_id,
                            recipe_id
                            )
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            comment.comment,
                            comment.user_id,
                            comment.recipe_id,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.comment_in_to_out(id, comment)
        except Exception:
            return {"message": "Unable to create comment"}

    def comment_in_to_out(self, id: int, comment: CommentIn):
        old_data = comment.dict()
        return CommentOut(id=id, **old_data)

    def record_to_comment_out(self, record):
        return CommentOut(
            id=record[0],
            comment=record[1],
            user_id=record[2],
            recipe_id=record[3],
        )
