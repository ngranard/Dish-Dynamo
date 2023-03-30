from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.users import (
    UserIn,
    UserOut,
    UserQueries,
    Error,
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: UserOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()


@router.get("/token", response_model=Token | None)
async def get_token(
    request: Request,
    user: UserOut = Depends(authenticator.get_current_account_data)) -> AccountToken | None:
        if authenticator.cookie_name in request.cookies:
            return {
                    "access_token": request.cookies[authenticator.cookie_name],
                    "token_type": "bearer",
                    "account": user,
            }


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    account: UserIn,
    request: Request,
    response: Response,
    accounts: UserQueries = Depends(),
):
    hashed_password = authenticator.hash_password(account.password)
    print(type(hashed_password), "********* HASHED ****")
    try:
        print("Trying to create the user ************")
        user = accounts.create(account, hashed_password)
    except Error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=account.email, password=account.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=user, **token.dict())
