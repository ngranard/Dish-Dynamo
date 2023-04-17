from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import users, difficulty, recipes
import os

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(users.router)
app.include_router(difficulty.router)
app.include_router(recipes.router)

router = APIRouter()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
