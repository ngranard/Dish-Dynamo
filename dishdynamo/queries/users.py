from pydantic import BaseModel
from typing import Union, List
from queries.pool import pool


class Error(BaseModel):
    message: str


class UserIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str


class UserOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str


class UserOutWithPassword(UserOut):
    hashed_password: str

class UserDelete(BaseModel):
    deleted: bool

class UserQueries:
    def get(self, email: str) -> UserOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , first_name
                            , last_name
                            , email
                            , hashed_password
                        FROM users
                        WHERE email = %s
                        """,
                        [email],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_user_out(record)
        except Exception as e:
            print(e)
            return {"message": "Error getting user"}

    def get_one(self, id: int) -> Union[Error, UserOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , first_name
                            , last_name
                            , email
                        FROM users
                        WHERE id = %s
                        """,
                        [id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_user_out_without_password(record)
        except Exception as e:
            print(e)
            return {"message": "Error getting user"}

    def get_all_accounts(self) -> Union[Error, List[UserOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id
                            , first_name
                            , last_name
                            , email
                        FROM users
                        """
                    )
                    return [self.record_to_user_out_without_password(record) for record in db.fetchall()]
        except Exception as e:
            print(e)
            return {"message": "Error getting users"}

    def create(
        self, account: UserIn, hashed_password: str
    ) -> UserOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO users
                            (first_name, last_name, email, hashed_password)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            account.first_name,
                            account.last_name,
                            account.email,
                            hashed_password,
                        ],
                    )
                    id = result.fetchone()[0]
                    if id is None:
                        return None
                    old_data = account.dict()
                    return UserOutWithPassword(
                        id=id, **old_data, hashed_password=hashed_password
                    )
        except Exception as e:
            print(e)
            return {"message": "Error creating user"}

    def delete(self, id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM users
                        WHERE id = %s
                        """,
                        [id]
                    )
                    return True
        except Exception:
            return False

    def record_to_user_out(self, record):
        return UserOutWithPassword(
            id=record[0],
            first_name=record[1],
            last_name=record[2],
            email=record[3],
            hashed_password=record[4],
        )

    def record_to_user_out_without_password(self, record):
        return UserOut(
            id=record[0],
            first_name=record[1],
            last_name=record[2],
            email=record[3],
        )
