from fastapi.testclient import TestClient
from main import app
from queries.users import UserQueries
from authenticator import authenticator


client = TestClient(app)


class EmptyUserRepository:
    def get_all_accounts(self):
        return [get_all_accounts]


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
    app.dependency_overrides[UserQueries] = EmptyUserRepository
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = account_override

    response = client.get("/api/accounts/all")
    assert response.status_code == 200
    assert response.json() == [get_all_accounts]

    app.dependency_overrides = {}
