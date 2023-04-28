steps = [
    [
        # "Up" SQL statement
        """
        INSERT INTO difficulty VALUES
            (1, 'Very Easy'),
            (2, 'Easy'),
            (3, 'Medium'),
            (4, 'Hard'),
            (5, 'Very Hard')
        ;
        """,
        # "Down" SQL statement
        """
        SELECT setval('difficulty_id_seq', (SELECT MAX(id) + 1 FROM difficulty));
        """,
    ],
]
