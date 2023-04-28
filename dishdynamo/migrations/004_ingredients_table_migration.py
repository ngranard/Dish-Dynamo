steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE ingredients (
            id SERIAL PRIMARY KEY NOT NULL,
            quantity INT NOT NULL,
            measurement VARCHAR(50) NOT NULL,
            name VARCHAR(50) NOT NULL,
            recipe_id INT NOT NULL REFERENCES recipes(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE ingredients;
        """,
    ],
]
