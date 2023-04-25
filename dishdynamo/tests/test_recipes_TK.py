from fastapi.testclient import TestClient
from main import app
from queries.recipes import RecipeRepository

client = TestClient(app)


class EmptyRecipeRepository:
    def get_all(self):
        return []


class CreateRecipeRepository:
    def create(self, recipe):
        result = {
            "id": 1,
        }
        result.update(recipe)
        return result


def test_get_all_recipes():
    app.dependency_overrides[RecipeRepository] = EmptyRecipeRepository

    response = client.get("/recipes")
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []


def test_create_recipe():
    app.dependency_overrides[RecipeRepository] = CreateRecipeRepository

    json = {
        "recipe_name": "test pie",
        "description": "this is a test",
        "image_url": "picture",
        "instructions": "test",
        "cooking_time": "10 min",
        "user_id": 1,
        "difficulty_id": 1,
        "ingredients": [
            {
                "quantity": 2,
                "measurement": "cups",
                "name": "heavy cream",
            }
        ]
    }

    expected = {
        "id": 1,
        "recipe_name": "test pie",
        "description": "this is a test",
        "image_url": "picture",
        "instructions": "test",
        "cooking_time": "10 min",
        "user_id": 1,
        "difficulty_id": 1,
    }

    response = client.post("/recipes", json=json)
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == expected
