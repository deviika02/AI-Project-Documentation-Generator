from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from gemini_service import generate_titles

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5175",
        "http://127.0.0.1:5175",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProjectRequest(BaseModel):
    documentType: str
    domain: str
    keywords: str
    description: str


@app.get("/")
def home():
    return {
        "message": "AI Project Title Generator API Running"
    }


@app.post("/generate")
def generate(data: ProjectRequest):

    result = generate_titles(
        data.documentType,
        data.domain,
        data.keywords,
        data.description
    )

    return {
        "titles": result
    }