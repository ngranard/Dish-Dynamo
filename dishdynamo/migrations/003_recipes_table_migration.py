steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE recipes (
            id SERIAL PRIMARY KEY NOT NULL,
            recipe_name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            image_url VARCHAR(200) NOT NULL,
            instructions TEXT NOT NULL,
            rating INT,
            cooking_time VARCHAR(50) NOT NULL,
            user_id INT NOT NULL REFERENCES users(id),
            difficulty_id INT NOT NULL REFERENCES difficulty(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE recipes;
        """
    ],
]
