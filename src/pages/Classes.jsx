import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Classes() {

  const API = "http://127.0.0.1:8000";

  const [classes, setClasses] = useState([]);

  const [name, setName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [time, setTime] = useState(new Date());
  const [members, setMembers] = useState("");

  const [editingId, setEditingId] = useState(null);

  // FETCH

  const fetchClasses = async () => {

    try {

      const res = await axios.get(`${API}/classes`);

      setClasses(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    fetchClasses();

  }, []);

  // SAVE

  const saveClass = async () => {

    if (!name || !trainer || !members) {

      alert("All fields are mandatory");

      return;

    }

    const data = {

      name,
      trainer,
      time: time.toLocaleString(),
      members

    };

    try {

      if (editingId) {

        await axios.put(
          `${API}/classes/${editingId}`,
          data
        );

        setEditingId(null);

      } else {

        await axios.post(
          `${API}/classes`,
          data
        );

      }

      fetchClasses();

      setName("");
      setTrainer("");
      setTime(new Date());
      setMembers("");

    } catch (err) {

      console.log(err);

    }
  };

  // DELETE

  const deleteClass = async (id) => {

    try {

      await axios.delete(`${API}/classes/${id}`);

      fetchClasses();

    } catch (err) {

      console.log(err);

    }
  };

  // EDIT

  const editClass = (item) => {

    setEditingId(item.id);

    setName(item.name);
    setTrainer(item.trainer);

    setMembers(item.members);

  };

  return (

    <div className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold text-orange-500">
          Class Management
        </h1>

        <Link
          to="/admin-dashboard"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
        >
          ← Dashboard
        </Link>

      </div>

      {/* FORM */}

      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl mb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <input
            type="text"
            placeholder="Class Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Trainer Name"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <DatePicker
            selected={time}
            onChange={(date) => setTime(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy h:mm aa"
            className="bg-black border border-gray-700 p-4 rounded-xl w-full text-white"
          />

          <input
            type="number"
            placeholder="Members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

        </div>

        <button
          onClick={saveClass}
          className={`mt-8 px-8 py-4 rounded-xl font-bold transition ${
            editingId
              ? "bg-green-600 hover:bg-green-700"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {editingId
            ? "Update Class"
            : "Add Class"}
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">

        <div className="overflow-auto">

          <table className="w-full">

            <thead className="bg-black">

              <tr>

                <th className="p-5 text-left text-orange-500">
                  Class
                </th>

                <th className="p-5 text-left text-orange-500">
                  Trainer
                </th>

                <th className="p-5 text-left text-orange-500">
                  Date & Time
                </th>

                <th className="p-5 text-left text-orange-500">
                  Members
                </th>

                <th className="p-5 text-center text-orange-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {classes.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-gray-800"
                >

                  <td className="p-5">
                    {item.name}
                  </td>

                  <td className="p-5">
                    {item.trainer}
                  </td>

                  <td className="p-5">
                    {item.time}
                  </td>

                  <td className="p-5">
                    {item.members}
                  </td>

                  <td className="p-5 text-center">

                    <button
                      onClick={() => editClass(item)}
                      className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg mr-3"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteClass(item.id)}
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