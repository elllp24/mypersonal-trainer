import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Attendance() {

  const API = "http://127.0.0.1:8000";

  const [attendance, setAttendance] = useState([]);

  const [memberName, setMemberName] = useState("");
  const [className, setClassName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [editingId, setEditingId] = useState(null);

  // FETCH

  const fetchAttendance = async () => {

    try {

      const res = await axios.get(`${API}/attendance`);

      setAttendance(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    fetchAttendance();

  }, []);

  // SAVE

  const saveAttendance = async () => {

    if (
      !memberName ||
      !className ||
      !status ||
      !date ||
      !time
    ) {

      alert("All fields are mandatory");
      return;

    }

    const data = {
      member_name: memberName,
      class_name: className,
      status,
      date,
      time
    };

    try {

      if (editingId) {

        await axios.put(
          `${API}/attendance/${editingId}`,
          data
        );

        setEditingId(null);

      } else {

        await axios.post(
          `${API}/attendance`,
          data
        );

      }

      fetchAttendance();

      setMemberName("");
      setClassName("");
      setStatus("");
      setDate("");
      setTime("");

    } catch (err) {

      console.log(err);

    }
  };

  // DELETE

  const deleteAttendance = async (id) => {

    try {

      await axios.delete(
        `${API}/attendance/${id}`
      );

      fetchAttendance();

    } catch (err) {

      console.log(err);

    }
  };

  // EDIT

  const editAttendance = (item) => {

    setEditingId(item.id);

    setMemberName(item.member_name);
    setClassName(item.class_name);
    setStatus(item.status);
    setDate(item.date);
    setTime(item.time);
  };

  return (

    <div className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold text-orange-500">
          Attendance Management
        </h1>

        <Link
          to="/admin-dashboard"
          className="bg-gray-900 border border-gray-700 px-6 py-3 rounded-xl hover:bg-orange-500 transition"
        >
          ← Back to Dashboard
        </Link>

      </div>

      {/* FORM */}

      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl mb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          <input
            type="text"
            placeholder="Member Name"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Leave">Leave</option>
          </select>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

        </div>

        <button
          onClick={saveAttendance}
          className={`mt-8 px-8 py-4 rounded-xl font-bold transition ${
            editingId
              ? "bg-green-600 hover:bg-green-700"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {editingId
            ? "Update Attendance"
            : "Add Attendance"}
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">

        <div className="overflow-auto">

          <table className="w-full">

            <thead className="bg-black">

              <tr>

                <th className="p-5 text-left text-orange-500">
                  Member
                </th>

                <th className="p-5 text-left text-orange-500">
                  Class
                </th>

                <th className="p-5 text-left text-orange-500">
                  Status
                </th>

                <th className="p-5 text-left text-orange-500">
                  Time
                </th>

                <th className="p-5 text-left text-orange-500">
                  Date
                </th>

                <th className="p-5 text-center text-orange-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {attendance.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-gray-800 hover:bg-gray-800 transition"
                >

                  <td className="p-5">
                    {item.member_name}
                  </td>

                  <td className="p-5">
                    {item.class_name}
                  </td>

                  <td className="p-5">
                    {item.status}
                  </td>

                  <td className="p-5">
                    {item.time}
                  </td>

                  <td className="p-5">
                    {item.date}
                  </td>

                  <td className="p-5 text-center">

                    <button
                      onClick={() =>
                        editAttendance(item)
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg mr-3"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteAttendance(item.id)
                      }
                      className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}