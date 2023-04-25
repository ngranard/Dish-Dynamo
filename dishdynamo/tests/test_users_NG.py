from fastapi.testclient import TestClient
from main import app
from queries.users import UserQueries
from authenticator import authenticator


client = TestClient(app)


class EmptyUserQueries:
    def get_all_accounts(self):
        return [get_all_accounts]

    def update(self, id: int, account):
        if id == 1:
            result = {
                "id": 1,
                "first_name": "test",
                "last_name": "test",
                "email": "unit@test.com",
            }
            result.update(account)
            return result
        else:
            return None


get_all_accounts = {
    "id": 1,
    "first_name": "test",
    "last_name": "test",
    "email": "unit@test.com",
}

test_account = {
    "id": 1,
    "first_name": "test",
    "last_name": "test",
    "email": "unit@test.com",
}


def account_override():
    return test_account


def test_get_all_accounts():
    app.dependency_overrides[UserQueries] = EmptyUserQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override

    response = client.get("/api/accounts/all")
    assert response.status_code == 200
    assert response.json() == [get_all_accounts]

    app.dependency_overrides = {}


def test_update_account():
    app.dependency_overrides[UserQueries] = EmptyUserQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override

    account_id = 1
    json = {
        "first_name": "updated",
        "last_name": "test",
        "email": "unit@test.com",
    }

    expected = {
        "id": 1,
        "first_name": "updated",
        "last_name": "test",
        "email": "unit@test.com",
    }

    response = client.put(f"/api/accounts/{account_id}", json=json)
    assert response.status_code == 200
    response_json = response.json()
    response_json["id"] = 1
    assert response_json == expected

    app.dependency_overrides = {}
