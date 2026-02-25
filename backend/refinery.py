import os
import json
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
if API_KEY:
    genai.configure(api_key=API_KEY)

MODEL_NAME = "gemini-2.5-flash"
model = genai.GenerativeModel(MODEL_NAME)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SeedPayload(BaseModel):
    seed_logic: str

LOG_FILE_PATH = os.path.expanduser("~/nxtwaves/vault/compliance/sgi_provenance.log")

def log_compliance(seed: str, model_used: str):
    log_entry = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "input_seed": seed,
        "model_used": model_used,
        "compliance": "India_IT_Rules_2026_SGI"
    }
    os.makedirs(os.path.dirname(LOG_FILE_PATH), exist_ok=True)
    with open(LOG_FILE_PATH, "a") as f:
        f.write(json.dumps(log_entry) + "\n")

@app.post("/api/metamorphosis")
async def process_seed(payload: SeedPayload):
    try:
        log_compliance(payload.seed_logic, MODEL_NAME)
        prompt = f"Construct a structured synthetic JSON dataset reflecting this seed logic: {payload.seed_logic}\nProvide only valid JSON in your response."
        response = model.generate_content(prompt)
        text = response.text.strip()
        if text.startswith("```json"): text = text[7:]
        elif text.startswith("```"): text = text[3:]
        if text.endswith("```"): text = text[:-3]
        
        try:
            data = json.loads(text.strip())
        except Exception:
            data = {"raw_output": text.strip()}
            
        return {"data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
