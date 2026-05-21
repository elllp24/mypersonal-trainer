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

  // =========================
  // FETCH ATTENDANCE
  // =========================

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

  // =========================
  // ADD / UPDATE ATTENDANCE
  // =========================

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
      status: status,
      date: date,
      time: time
    };

    try {

      // UPDATE
      if (editingId) {

        await axios.put(
          `${API}/attendance/${editingId}`,
          data
        );

        setEditingId(null);

      }

      // ADD
      else {

        await axios.post(
          `${API}/attendance`,
          data
        );

      }

      fetchAttendance();

      // CLEAR
      setMemberName("");
      setClassName("");
      setStatus("");
      setDate("");
      setTime("");

    } catch (err) {

      console.log(err);

    }
  };

  // =========================
  // DELETE
  // =========================

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

  // =========================
  // EDIT
  // =========================

  const editAttendance = (item) => {

    setEditingId(item.id);

    setMemberName(item.member_name);
    setClassName(item.class_name);
    setStatus(item.status);
    setDate(item.date);
    setTime(item.time);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold">
          Attendance Management
        </h1>

        <Link
          to="/admin-dashboard"
          className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-black"
        >
          ← Back to Dashboard
        </Link>

      </div>

      {/* FORM */}

      <div className="bg-white p-6 rounded-2xl shadow mb-8">

        <div className="grid grid-cols-12 gap-4">

          {/* MEMBER */}

          <div className="col-span-4">

            <label className="font-semibold block mb-2">
              Member Name
            </label>

            <input
              type="text"
              placeholder="Enter member name"
              value={memberName}
              onChange={(e) =>
                setMemberName(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

          {/* CLASS */}

          <div className="col-span-4">

            <label className="font-semibold block mb-2">
              Class Name
            </label>

            <input
              type="text"
              placeholder="Enter class name"
              value={className}
              onChange={(e) =>
                setClassName(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

          {/* STATUS */}

          <div className="col-span-2">

            <label className="font-semibold block mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            >
              <option value="">
                Select
              </option>

              <option value="Present">
                Present
              </option>

              <option value="Absent">
                Absent
              </option>

              <option value="Leave">
                Leave
              </option>

            </select>

          </div>

          {/* TIME */}

          <div className="col-span-2">

            <label className="font-semibold block mb-2">
              Time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

          {/* DATE */}

          <div className="col-span-3">

            <label className="font-semibold block mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

        </div>

        <button
          onClick={saveAttendance}
          className={`mt-6 px-6 py-3 rounded-lg text-white ${
            editingId
              ? "bg-green-600"
              : "bg-blue-600"
          }`}
        >
          {editingId
            ? "Update Attendance"
            : "Add Attendance"}
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white p-6 rounded-2xl shadow overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-100">

              <th className="p-4 text-left">
                Member
              </th>

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Time
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {attendance.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.member_name}
                </td>

                <td className="p-4">
                  {item.class_name}
                </td>

                <td className="p-4">
                  {item.status}
                </td>

                <td className="p-4">
                  {item.time}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() =>
                      editAttendance(item)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteAttendance(item.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
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
  );
}