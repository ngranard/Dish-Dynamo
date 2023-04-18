from fastapi.testclient import TestClient
from main import app
from queries.difficulty import DifficultyRepository

client = TestClient(app)


class EmptyDifficultyRepository:
    def get_all(self):
        return []


class CreateDifficultyRepository:
    def create(self, difficulty):
        result = {"id": 1, "name": "test difficulty"}
        result.update(difficulty)
        return result


def test_get_all_difficulties():
    app.dependency_overrides[DifficultyRepository] = EmptyDifficultyRepository

    response = client.get("/difficulty")
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []


def test_create_difficulty():
    app.dependency_overrides[DifficultyRepository] = CreateDifficultyRepository

    json = {"id": 1, "name": "test difficulty"}

    expected = {"id": 1, "name": "test difficulty"}

    response = client.post("/difficulty", json=json)
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == expected
