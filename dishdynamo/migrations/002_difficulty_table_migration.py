steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE difficulty (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE difficulty;
        """
    ],
]
