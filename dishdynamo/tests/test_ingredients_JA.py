from fastapi.testclient import TestClient
from main import app
from queries.ingredients import IngredientRepository

client = TestClient(app)


class EmptyIngredientRepository:
    def get_all(self):
        return []


class CreateIngredientRepository:
    def create(self, ingredient):
        result = {"id": 1}
        result.update(ingredient)
        return result


def test_get_all_ingredients():
    app.dependency_overrides[IngredientRepository] = EmptyIngredientRepository

    response = client.get("/ingredients")
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []


def test_create_ingredients():
    app.dependency_overrides[IngredientRepository] = CreateIngredientRepository

    json = {
        "quantity": 1,
        "measurement": "test measurement",
        "name": "test name",
        "recipe_id": 1,
    }

    expected = {
        "id": 1,
        "quantity": 1,
        "measurement": "test measurement",
        "name": "test name",
        "recipe_id": 1,
    }

    response = client.post("/ingredients", json=json)
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == expected
