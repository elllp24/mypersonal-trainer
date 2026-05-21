import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed">

      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        MyPersonal Trainer
      </div>

      <div className="flex flex-col p-4 space-y-3">

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-xl"
        >
          Dashboard
        </Link>

        <Link
          to="/classes"
          className="hover:bg-gray-700 p-3 rounded-xl"
        >
          Classes
        </Link>

        <Link
          to="/attendance"
          className="hover:bg-gray-700 p-3 rounded-xl"
        >
          Attendance
        </Link>

        <Link
          to="/payments"
          className="hover:bg-gray-700 p-3 rounded-xl"
        >
          Payments
        </Link>

        <Link
          to="/ratings"
          className="hover:bg-gray-700 p-3 rounded-xl"
        >
          Ratings
        </Link>

      </div>

    </div>
  );
}