from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import users, difficulty, ingredients

app = FastAPI()

# router = APIRouter()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", os.environ.get("CORS_HOST", None)],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authenticator.router)
app.include_router(users.router)
app.include_router(difficulty.router)
app.include_router(ingredients.router)
