from pydantic import BaseModel
from typing import List, Union
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
    hashed_password: str

class UserOutWithPassword(UserOut):
    hashed_password: str

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
                        FROM users
                        WHERE email = %s
                        """,
                        [email]
                    )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_user_out(record)
        except Exception as e:
            print(e)
            return {"message": "Error getting user"}

    def create(self, account: UserIn, hashed_password: str) -> UserOutWithPassword:
        try:
            print(account.first_name)
            print(account.last_name)
            print(account.email)
            print(hashed_password)
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO users (first_name, last_name, email, hashed_password)
                        VALUES (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [account.first_name, account.last_name, account.email, hashed_password],
                    )
                print("Wrote to database *********")
                print(result)
                id = result.fetchone()[0]
                print(id)
                if id is None:
                    return None
                return self.user_in_to_out(id, account)
        except Exception as e:
            print(e)
            return {"message": "Error creating user"}

    def record_to_user_out(self, record):
        return UserOut(
            id=record[0],
            first_name=record[1],
            last_name=record[2],
            email=record[3],
            hashed_password=record[4]
        )

    def user_in_to_out(self, id: int, account: UserIn):
        old_data = account.dict()
        return UserOut(id=id, **old_data)
