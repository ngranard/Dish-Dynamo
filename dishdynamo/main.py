from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import users, difficulty, recipes, ingredients

app = FastAPI()
app.include_router(recipes.router)
app.include_router(authenticator.router)
app.include_router(users.router)
app.include_router(difficulty.router)
app.include_router(ingredients.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://team-scrumtious.gitlab.io",
        os.environ.get("CORS_HOST", None),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
