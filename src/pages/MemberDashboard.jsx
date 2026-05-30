import { useNavigate } from "react-router-dom";

export default function MemberDashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("role");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-12">

        <div>

          <h1 className="text-5xl font-bold text-orange-500">
            Member Dashboard
          </h1>

          <p className="text-gray-400 mt-3">
            Welcome to Fitness Management System
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
        >
          Logout
        </button>

      </div>


      {/* MEMBER INFO */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* MY CLASSES */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            My Classes
          </h2>

          <p className="text-gray-400">
            View enrolled classes
          </p>

        </div>


        {/* ATTENDANCE */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Attendance
          </h2>

          <p className="text-gray-400">
            Check attendance records
          </p>

        </div>


        {/* MEMBERSHIP */}

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Membership
          </h2>

          <p className="text-gray-400">
            View membership details
          </p>

        </div>

      </div>

    </div>
  );
}