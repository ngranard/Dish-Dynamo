steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE comments (
            id SERIAL PRIMARY KEY NOT NULL,
            comment TEXT NOT NULL,
            user_id INT NOT NULL REFERENCES users(id),
            recipe_id INT NOT NULL REFERENCES recipes(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE comments;
        """,
    ],
]
