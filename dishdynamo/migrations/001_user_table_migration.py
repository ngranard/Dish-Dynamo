steps = [
    [
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            hashed_password VARCHAR(200) NOT NULL
        );
        """,
        """
        DROP TABLE users;
        """,
    ],
]
