import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const navigate = useNavigate();

  // =========================
  // AUTH CHECK
  // =========================

  const admin = localStorage.getItem("admin");

  if (!admin) {

    navigate("/login");
  }


  // =========================
  // LOGOUT
  // =========================

  const logout = () => {

    localStorage.removeItem("admin");

    navigate("/login");
  };


  // =========================
  // DASHBOARD CARDS
  // =========================

  const cards = [

    {
      title: "Classes",
      value: "12",
      color: "from-blue-500 to-blue-700",
      link: "/classes",
      icon: "🏋️"
    },

    {
      title: "Attendance",
      value: "245",
      color: "from-green-500 to-green-700",
      link: "/attendance",
      icon: "📅"
    },

    {
      title: "Trainers",
      value: "8",
      color: "from-purple-500 to-purple-700",
      link: "/trainer-management",
      icon: "🧑‍🏫"
    },

    {
      title: "Members",
      value: "120",
      color: "from-pink-500 to-pink-700",
      link: "/members",
      icon: "👨‍👩‍👧"
    },

    {
      title: "Pricing Plans",
      value: "6",
      color: "from-orange-500 to-orange-700",
      link: "/admin-pricing",
      icon: "💰"
    },

    {
      title: "Reports",
      value: "15",
      color: "from-indigo-500 to-indigo-700",
      link: "/reports",
      icon: "📊"
    }

  ];


  return (

    <div className="min-h-screen bg-black text-white">

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-72 bg-gray-950 min-h-screen border-r border-gray-800 p-6 hidden md:block">

          {/* LOGO */}

          <div className="flex items-center gap-4 mb-12">

            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
              M
            </div>

            <div>

              <h1 className="text-2xl font-bold text-orange-500">
                MyPersonal Trainer
              </h1>

              <p className="text-gray-400 text-sm">
                Admin Panel
              </p>

            </div>

          </div>


          {/* MENU */}

          <div className="space-y-4">

            <Link
              to="/admin-dashboard"
              className="block bg-orange-500 text-white p-4 rounded-2xl font-semibold"
            >
              Dashboard
            </Link>

            <Link
              to="/classes"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Classes
            </Link>

            <Link
              to="/attendance"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Attendance
            </Link>

            <Link
              to="/members"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Members
            </Link>

            <Link
              to="/trainer-management"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Trainers
            </Link>

            <Link
              to="/admin-pricing"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Pricing Plans
            </Link>

            <Link
              to="/reports"
              className="block bg-gray-900 hover:bg-gray-800 p-4 rounded-2xl transition"
            >
              Reports
            </Link>

          </div>


          {/* LOGOUT */}

          <div className="mt-20">

            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-bold transition"
            >
              Logout
            </button>

          </div>

        </div>


        {/* MAIN CONTENT */}

        <div className="flex-1 p-6 md:p-10">

          {/* TOP BAR */}

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">

            <div>

              <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                Admin Dashboard
              </h1>

              <p className="text-gray-400 mt-2">
                Welcome back Admin 👋
              </p>

            </div>


            <div className="flex items-center gap-4">

              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 border border-gray-700 p-4 rounded-2xl w-full md:w-72 outline-none focus:border-orange-500"
              />

              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                A
              </div>

            </div>

          </div>


          {/* STATS CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">

            {cards.map((card, index) => (

              <Link to={card.link} key={index}>

                <div className={`bg-gradient-to-r ${card.color} rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300`}>

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-lg opacity-80">
                        {card.title}
                      </p>

                      <h2 className="text-5xl font-bold mt-3">
                        {card.value}
                      </h2>

                    </div>

                    <div className="text-6xl">
                      {card.icon}
                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* LOWER SECTION */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* RECENT ACTIVITIES */}

            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-orange-500 mb-8">
                Recent Activities
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between border-b border-gray-800 pb-4">

                  <span>
                    New member joined
                  </span>

                  <span className="text-gray-500">
                    2 mins ago
                  </span>

                </div>

                <div className="flex justify-between border-b border-gray-800 pb-4">

                  <span>
                    Attendance updated
                  </span>

                  <span className="text-gray-500">
                    10 mins ago
                  </span>

                </div>

                <div className="flex justify-between border-b border-gray-800 pb-4">

                  <span>
                    Trainer assigned
                  </span>

                  <span className="text-gray-500">
                    30 mins ago
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    New pricing plan added
                  </span>

                  <span className="text-gray-500">
                    1 hour ago
                  </span>

                </div>

              </div>

            </div>


            {/* QUICK ACTIONS */}

            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-orange-500 mb-8">
                Quick Actions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <Link
                  to="/classes"
                  className="bg-blue-500/20 border border-blue-500 text-blue-400 p-6 rounded-2xl text-center font-bold hover:bg-blue-500/30 transition"
                >
                  Add Class
                </Link>

                <Link
                  to="/attendance"
                  className="bg-green-500/20 border border-green-500 text-green-400 p-6 rounded-2xl text-center font-bold hover:bg-green-500/30 transition"
                >
                  Attendance
                </Link>

                <Link
                  to="/trainer-management"
                  className="bg-purple-500/20 border border-purple-500 text-purple-400 p-6 rounded-2xl text-center font-bold hover:bg-purple-500/30 transition"
                >
                  Add Trainer
                </Link>

                <Link
                  to="/members"
                  className="bg-pink-500/20 border border-pink-500 text-pink-400 p-6 rounded-2xl text-center font-bold hover:bg-pink-500/30 transition"
                >
                  Add Member
                </Link>

                <Link
                  to="/admin-pricing"
                  className="bg-orange-500/20 border border-orange-500 text-orange-400 p-6 rounded-2xl text-center font-bold hover:bg-orange-500/30 transition col-span-1 sm:col-span-2"
                >
                  Manage Pricing Plans
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}