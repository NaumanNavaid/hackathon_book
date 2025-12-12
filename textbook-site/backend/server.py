from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔴 PASTE API KEY HERE (If empty, it uses the Backup Brain below)
GEMINI_API_KEY = "AIzaSyCET2r4VOkMWJsw1OJRXmTu-RCTCHaGV5Y"

# --- THE "SMART" CONTEXT ---
# This tells the AI exactly which chapter covers what topic.
BOOK_CONTEXT = """
You are the AI Tutor for "AI Native Software Development".
Your Goal: Answer the user's question AND tell them which chapter to read.

Here is the Curriculum:
- **Chapter 1:** Physical AI vs GenAI, Agents.
- **Chapter 2:** Embodied Intelligence, Moravec's Paradox.
- **Chapter 3:** Sensors (Lidar, Cameras) & Actuators.
- **Chapter 4:** ROS 2 Basics, Middleware, DDS.
- **Chapter 5:** Nodes, Topics, Services.
- **Chapter 6:** Unity Robotics, Simulation.
- **Chapter 7:** Gazebo Physics, Friction, Gravity.
- **Chapter 13:** Computer Vision, YOLO, OpenCV.
- **Chapter 14:** Sensor Fusion, Kalman Filters (EKF/UKF).
- **Chapter 15:** SLAM (Simultaneous Localization & Mapping).
- **Chapter 16:** Path Planning (A*, RRT, Dijkstra).
- **Chapter 17:** VLA Models (Vision-Language-Action), RT-2.
- **Chapter 18:** Voice Pipelines, Whisper AI.
- **Chapter 19:** Cognitive Planning, GPT-4 for Robots.

INSTRUCTION: Always end your answer with "You can read more in Chapter [X]."
"""

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    user_text = request.message.lower()
    
    # 1. Try Real AI (if key exists)
    if GEMINI_API_KEY and "PASTE" not in GEMINI_API_KEY:
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
            payload = { "contents": [{ "parts": [{ "text": f"System: {BOOK_CONTEXT}\nUser: {request.message}" }] }] }
            response = requests.post(url, json=payload)
            data = response.json()
            if "candidates" in data:
                return {"reply": data["candidates"][0]["content"]["parts"][0]["text"]}
        except:
            pass # Fail silently to backup

    # 2. THE BACKUP BRAIN (Now with Chapter Citations!)
    
    # Part I
    if "physical ai" in user_text:
        return {"reply": "Physical AI integrates AI with robots to interact with the real world. You can read more in **Chapter 1**."}
    if "embodied" in user_text:
        return {"reply": "Embodied Intelligence suggests intelligence requires a body to interact with the world. Covered in **Chapter 2**."}
    if "sensor" in user_text or "lidar" in user_text or "actuator" in user_text:
        return {"reply": "Sensors give robots sight (Lidar/Camera), and Actuators give them movement. Detailed in **Chapter 3**."}

    # Part II
    if "ros" in user_text:
        return {"reply": "ROS 2 is the robotics middleware. It handles communication via DDS. Start reading in **Chapter 4**."}
    if "node" in user_text or "topic" in user_text:
        return {"reply": "Nodes are processes that perform tasks, communicating via Topics. This is the core of **Chapter 5**."}
    if "urdf" in user_text or "tf" in user_text:
        return {"reply": "URDF defines robot structure, and TF tracks positions. See **Part II** for details."}

    # Part III
    if "unity" in user_text:
        return {"reply": "Unity is used for photorealistic simulation and training vision models. Check **Chapter 6**."}
    if "gazebo" in user_text or "physics" in user_text:
        return {"reply": "Gazebo simulates physical forces like gravity and friction for testing. Covered in **Chapter 7**."}

    # Part IV
    if "vision" in user_text or "yolo" in user_text:
        return {"reply": "Computer Vision (YOLO/OpenCV) allows robots to detect objects. Read **Chapter 13**."}
    if "fusion" in user_text or "kalman" in user_text:
        return {"reply": "Sensor Fusion uses Kalman Filters to combine noisy data into a clean estimate. See **Chapter 14**."}
    if "slam" in user_text or "map" in user_text:
        return {"reply": "SLAM (Simultaneous Localization and Mapping) builds maps while tracking location. Deep dive in **Chapter 15**."}
    if "path" in user_text or "plan" in user_text or "a*" in user_text:
        return {"reply": "Path Planning (A*, RRT) finds collision-free routes. Learn the algorithms in **Chapter 16**."}

    # Part V
    if "vla" in user_text or "rt-2" in user_text:
        return {"reply": "VLA Models like RT-2 translate vision directly into robot actions. Covered in **Chapter 17**."}
    if "whisper" in user_text or "voice" in user_text:
        return {"reply": "We use Whisper AI to convert speech commands into robot actions. See **Chapter 18**."}
    if "gpt" in user_text or "cognitive" in user_text:
        return {"reply": "GPT-4 acts as a high-level planner to break down complex tasks. Read **Chapter 19**."}

    return {"reply": "I can help with that! I cover ROS 2 (Ch 4), SLAM (Ch 15), and Unity (Ch 6). What topic do you need?"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)