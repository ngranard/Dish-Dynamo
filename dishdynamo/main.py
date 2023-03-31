from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import users, difficulty
import os

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(users.router)
app.include_router(difficulty.router)

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


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }
