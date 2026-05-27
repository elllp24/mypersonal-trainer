from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import List

from .database import engine, Base

from .routes import router

from .models import (
    Trainer,
    Member,
    ClassModel,
    AttendanceModel
)


# =========================================================
# CREATE DATABASE TABLES
# =========================================================

Base.metadata.create_all(bind=engine)


# =========================================================
# FASTAPI APP
# =========================================================

app = FastAPI()


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# ROUTES
# =========================================================

app.include_router(router)


# =========================================================
# PRICING PLAN API
# =========================================================

pricing_plans = []


# =========================================================
# PRICING MODEL
# =========================================================

class PricingPlan(BaseModel):

    title: str

    price: str

    duration: str

    features: List[str]


# =========================================================
# GET PRICING PLANS
# =========================================================

@app.get("/pricing")
def get_pricing():

    return pricing_plans


# =========================================================
# ADD PRICING PLAN
# =========================================================

@app.post("/pricing")
def add_pricing(plan: PricingPlan):

    new_plan = {

        "id": len(pricing_plans) + 1,

        "title": plan.title,

        "price": plan.price,

        "duration": plan.duration,

        "features": plan.features
    }

    pricing_plans.append(new_plan)

    return {

        "message": "Pricing plan added successfully",

        "plan": new_plan
    }


# =========================================================
# DELETE PRICING PLAN
# =========================================================

@app.delete("/pricing/{plan_id}")
def delete_pricing(plan_id: int):

    global pricing_plans

    pricing_plans = [

        plan for plan in pricing_plans

        if plan["id"] != plan_id
    ]

    return {

        "message": "Plan deleted successfully"
    }


# =========================================================
# HOME API
# =========================================================

@app.get("/")
def home():

    return {

        "message": "Backend Running"
    }