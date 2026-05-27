from flask import Blueprint, request, jsonify

pricing_bp = Blueprint("pricing", __name__)

plans = []


# GET ALL PLANS

@pricing_bp.route("/pricing", methods=["GET"])
def get_plans():
    return jsonify(plans)


# ADD PLAN

@pricing_bp.route("/pricing", methods=["POST"])
def add_plan():

    data = request.json

    new_plan = {
        "id": len(plans) + 1,
        "title": data["title"],
        "price": data["price"],
        "duration": data["duration"],
        "features": data["features"]
    }

    plans.append(new_plan)

    return jsonify({
        "message": "Plan added successfully",
        "plan": new_plan
    })