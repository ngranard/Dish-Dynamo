steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE recipes
            DROP COLUMN rating
        """,
        # "Down" SQL statement
        """
        DROP TABLE recipes;
        """,
    ],
]
