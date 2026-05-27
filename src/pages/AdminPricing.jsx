import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminPricing() {

  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState("");


  // =========================
  // AUTH CHECK
  // =========================

  useEffect(() => {

    const role = localStorage.getItem("role");

    if (role !== "admin") {

      navigate("/login");

    }

  }, [navigate]);



  // =========================
  // FETCH PLANS
  // =========================

  const fetchPlans = async () => {

    try {

      const res = await axios.get(
        "http://127.0.0.1:8000/pricing"
      );

      setPlans(res.data);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchPlans();

  }, []);



  // =========================
  // ADD PLAN
  // =========================

  const addPlan = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://127.0.0.1:8000/pricing",
        {
          title,
          price,
          duration,
          features: features.split(",")
        }
      );

      alert("Pricing Plan Added");

      setTitle("");
      setPrice("");
      setDuration("");
      setFeatures("");

      fetchPlans();

    } catch (error) {

      console.log(error);

    }

  };



  // =========================
  // DELETE PLAN
  // =========================

  const deletePlan = async (id) => {

    try {

      await axios.delete(
        `http://127.0.0.1:8000/pricing/${id}`
      );

      fetchPlans();

    } catch (error) {

      console.log(error);

    }

  };



  // =========================
  // LOGOUT
  // =========================

  const logout = () => {

    localStorage.removeItem("role");
    localStorage.removeItem("email");

    navigate("/login");
  };



  // =========================
  // DASHBOARD
  // =========================

  const goDashboard = () => {

    navigate("/admin-dashboard");
  };



  return (

    <div className="min-h-screen bg-black text-white p-6 md:p-10">


      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <button
          onClick={goDashboard}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold"
        >
          ← Dashboard
        </button>


        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
        >
          Logout
        </button>

      </div>



      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-10">
        Manage Pricing Plans
      </h1>



      {/* FORM */}

      <form
        onSubmit={addPlan}
        className="bg-gray-900 p-8 rounded-3xl border border-gray-800 max-w-3xl mb-14"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Plan Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-4 rounded-xl bg-black border border-gray-700"
            required
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-4 rounded-xl bg-black border border-gray-700"
            required
          />

          <input
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="p-4 rounded-xl bg-black border border-gray-700"
            required
          />

        </div>


        <textarea
          placeholder="Features separated by comma"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          rows="5"
          className="w-full mt-6 p-4 rounded-xl bg-black border border-gray-700"
          required
        ></textarea>


        <button
          type="submit"
          className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold"
        >
          Add Pricing Plan
        </button>

      </form>



      {/* PLAN LIST */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {plans.map((plan) => (

          <div
            key={plan.id}
            className="bg-gray-900 p-8 rounded-3xl border border-gray-800"
          >

            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              {plan.title}
            </h2>

            <h1 className="text-5xl font-bold mb-3">
              {plan.price}
            </h1>

            <p className="text-gray-400 mb-6">
              {plan.duration}
            </p>


            <div className="space-y-3 mb-8">

              {plan.features.map((feature, index) => (

                <p key={index}>
                  ✅ {feature}
                </p>

              ))}

            </div>


            <button
              onClick={() => deletePlan(plan.id)}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}