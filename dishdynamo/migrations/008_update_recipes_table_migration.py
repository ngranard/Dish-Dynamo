steps = [
    [
        # "Up" SQL statement
        """
        ALTER TABLE ingredients
            ALTER COLUMN quantity TYPE VARCHAR(20),
            ALTER COLUMN quantity SET NOT NULL;
        """,
        # "Down" SQL statement
        """
        DROP TABLE ingredients;
        """
    ],
]
