import { Link } from "react-router-dom";

export default function AdminDashboard() {

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
      link: "/trainers",
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
      title: "Payments",
      value: "₹48K",
      color: "from-orange-500 to-orange-700",
      link: "/payments",
      icon: "💳"
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

    <div className="min-h-screen bg-gray-100">

      {/* SIDEBAR + CONTENT */}

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-72 bg-gray-900 min-h-screen text-white p-6">

          <h1 className="text-3xl font-bold mb-10 text-center">
            Training Pro
          </h1>

          <div className="space-y-4">

            <Link
              to="/admin-dashboard"
              className="block bg-blue-600 p-4 rounded-xl hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/classes"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
            >
              Classes
            </Link>

            <Link
              to="/attendance"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
            >
              Attendance
            </Link>

            <Link
              to="/members"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
            >
              Members
            </Link>

            <Link
              to="/trainers"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
            >
              Trainers
            </Link>

            <Link
              to="/reports"
              className="block bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
            >
              Reports
            </Link>

          </div>

          {/* LOGOUT */}

          <div className="mt-16">

            <Link
              to="/login"
              className="block bg-red-500 text-center py-4 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </Link>

          </div>

        </div>


        {/* MAIN CONTENT */}

        <div className="flex-1 p-8">

          {/* TOP BAR */}

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-4xl font-bold text-gray-800">
                Admin Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Welcome back Admin 👋
              </p>

            </div>

            <div className="flex items-center gap-4">

              <input
                type="text"
                placeholder="Search..."
                className="border p-3 rounded-xl w-72"
              />

              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>

            </div>

          </div>


          {/* STATS CARDS */}

          <div className="grid grid-cols-3 gap-6 mb-10">

            {cards.map((card, index) => (

              <Link to={card.link} key={index}>

                <div className={`bg-gradient-to-r ${card.color} text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300`}>

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-lg opacity-80">
                        {card.title}
                      </p>

                      <h2 className="text-4xl font-bold mt-2">
                        {card.value}
                      </h2>

                    </div>

                    <div className="text-6xl opacity-70">
                      {card.icon}
                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* RECENT ACTIVITIES */}

          <div className="grid grid-cols-2 gap-6">

            {/* LEFT */}

            <div className="bg-white rounded-3xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Recent Activities
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between border-b pb-3">

                  <span>New member joined</span>
                  <span className="text-gray-500">2 mins ago</span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span>Attendance updated</span>
                  <span className="text-gray-500">10 mins ago</span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span>Trainer assigned</span>
                  <span className="text-gray-500">30 mins ago</span>

                </div>

                <div className="flex justify-between">

                  <span>Payment received</span>
                  <span className="text-gray-500">1 hour ago</span>

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="bg-white rounded-3xl shadow p-6">

              <h2 className="text-2xl font-bold mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <Link
                  to="/classes"
                  className="bg-blue-100 text-blue-700 p-6 rounded-2xl text-center font-bold hover:bg-blue-200"
                >
                  Add Class
                </Link>

                <Link
                  to="/attendance"
                  className="bg-green-100 text-green-700 p-6 rounded-2xl text-center font-bold hover:bg-green-200"
                >
                  Attendance
                </Link>

                <div className="bg-purple-100 text-purple-700 p-6 rounded-2xl text-center font-bold cursor-pointer hover:bg-purple-200">
                  Add Trainer
                </div>

                <div className="bg-pink-100 text-pink-700 p-6 rounded-2xl text-center font-bold cursor-pointer hover:bg-pink-200">
                  Add Member
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}