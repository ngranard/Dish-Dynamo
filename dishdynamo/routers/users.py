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
from typing import Union, List, Optional
from pydantic import BaseModel
from queries.users import (
    UserIn,
    UserInUpdate,
    UserOut,
    UserQueries,
    UserOutWithPassword,
    UserUpdate,
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


@router.get("/token", response_model=AccountToken | None)
async def get_user_token(
    request: Request,
    account: UserOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "token_type": "Bearer",
            "account": account,
        }


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: UserIn,
    request: Request,
    response: Response,
    accounts: UserQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except Error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())

@router.get("/api/accounts/all", response_model=Union[List[UserOut], Error])
def get_all_accounts(
    info: UserQueries = Depends(),
    account: dict = Depends(authenticator.get_current_account_data),
):
    if account is not None:
        return info.get_all_accounts()
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You are not authorized to access this resource"
        )

@router.get("/api/accounts/{id}", response_model=Union[UserOut, Error])
def get_account(
    id: int,
    info: UserQueries = Depends(),
    account: Optional[dict] = Depends(authenticator.get_current_account_data),
):
    if account is not None:
        return info.get_one(id)
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You are not authorized to access this resource"
        )

@router.put("/api/accounts/{id}", response_model=Union[UserUpdate, Error])
def update_account(
    id: int,
    user: UserInUpdate,
    info: UserQueries = Depends(),
    account: dict = Depends(authenticator.get_current_account_data),
    ) -> UserOutWithPassword:
    if account["id"] != id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cannot update account!",
        )
    return info.update(id, user)

@router.delete("/api/accounts/{id}", response_model=bool)
def delete_account(
    id: int,
    response: Response,
    info: UserQueries = Depends(),
) -> bool:
    response = info.delete_account(id)
    if response is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Account not found",
        )
    return response
