import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {

  const [classes, setClasses] = useState([]);

  // FETCH CLASSES
  const fetchClasses = async () => {

    try {

      const res = await API.get("/classes");
      setClasses(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          MyPersonal Trainer
        </h1>

        <ul className="space-y-5 text-lg">

          <li className="text-yellow-400 font-semibold">
            Dashboard
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Classes
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Trainers
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Members
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Attendance
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Payments
          </li>

        </ul>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-500">
              Total Classes
            </h2>

            <p className="text-4xl font-bold mt-3">
              {classes.length}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-500">
              Trainers
            </h2>

            <p className="text-4xl font-bold mt-3">
              {new Set(classes.map(c => c.trainer)).size}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-500">
              Total Members
            </h2>

            <p className="text-4xl font-bold mt-3">

              {classes.reduce(
                (total, item) => total + item.members,
                0
              )}

            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-500">
              Revenue
            </h2>

            <p className="text-4xl font-bold mt-3">
              $8,500
            </p>

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Recent Classes
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Trainer</th>
                <th className="p-4 text-left">Time</th>
                <th className="p-4 text-left">Members</th>
              </tr>

            </thead>

            <tbody>

              {classes.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{item.name}</td>

                  <td className="p-4">{item.trainer}</td>

                  <td className="p-4">{item.time}</td>

                  <td className="p-4">{item.members}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}