import { Link, useNavigate } from "react-router-dom";

export default function TrainerDashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("role");
    navigate("/login");

  };

  const backDashboard = () => {

    navigate("/admin-dashboard");

  };

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-12">

        <div>

          <h1 className="text-5xl font-bold text-orange-500">
            Trainer Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Manage classes and attendance
          </p>

        </div>

        <div className="flex gap-4">

          <button
            onClick={backDashboard}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold"
          >
            Back to Dashboard
          </button>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
          >
            Logout
          </button>

        </div>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CLASSES */}

        <Link
          to="/classes"
          className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-orange-500 transition"
        >

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Classes
          </h2>

          <p className="text-gray-400">
            Create and manage gym classes
          </p>

        </Link>

        {/* ATTENDANCE */}

        <Link
          to="/attendance"
          className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-orange-500 transition"
        >

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Attendance
          </h2>

          <p className="text-gray-400">
            Track member attendance
          </p>

        </Link>

      </div>

    </div>
  );
}