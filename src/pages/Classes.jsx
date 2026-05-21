import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Classes() {

  const API = "http://127.0.0.1:8000";

  const [classes, setClasses] = useState([]);

  const [name, setName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [time, setTime] = useState("");
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

    if (
      !name ||
      !trainer ||
      !time ||
      !members
    ) {
      alert("All fields are mandatory");
      return;
    }

    const data = {
      name,
      trainer,
      time,
      members
    };

    try {

      // UPDATE

      if (editingId) {

        await axios.put(
          `${API}/classes/${editingId}`,
          data
        );

        setEditingId(null);

      }

      // ADD

      else {

        await axios.post(
          `${API}/classes`,
          data
        );

      }

      fetchClasses();

      setName("");
      setTrainer("");
      setTime("");
      setMembers("");

    } catch (err) {

      console.log(err);

    }
  };

  // DELETE

  const deleteClass = async (id) => {

    try {

      await axios.delete(
        `${API}/classes/${id}`
      );

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
    setTime(item.time);
    setMembers(item.members);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold">
          Class Management
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

          {/* CLASS NAME */}

          <div className="col-span-4">

            <label className="font-semibold block mb-2">
              Class Name
            </label>

            <input
              type="text"
              placeholder="Enter class name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

          {/* TRAINER */}

          <div className="col-span-4">

            <label className="font-semibold block mb-2">
              Trainer
            </label>

            <input
              type="text"
              placeholder="Trainer name"
              value={trainer}
              onChange={(e) =>
                setTrainer(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

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

          {/* MEMBERS */}

          <div className="col-span-2">

            <label className="font-semibold block mb-2">
              Members
            </label>

            <input
              type="number"
              placeholder="0"
              value={members}
              onChange={(e) =>
                setMembers(e.target.value)
              }
              className="border p-3 rounded-lg w-full"
            />

          </div>

        </div>

        <button
          onClick={saveClass}
          className={`mt-6 px-6 py-3 rounded-lg text-white ${
            editingId
              ? "bg-green-600"
              : "bg-blue-600"
          }`}
        >
          {editingId
            ? "Update Class"
            : "Add Class"}
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white p-6 rounded-2xl shadow overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-100">

              <th className="p-4 text-left">
                Class
              </th>

              <th className="p-4 text-left">
                Trainer
              </th>

              <th className="p-4 text-left">
                Time
              </th>

              <th className="p-4 text-left">
                Members
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {classes.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.trainer}
                </td>

                <td className="p-4">
                  {item.time}
                </td>

                <td className="p-4">
                  {item.members}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() =>
                      editClass(item)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteClass(item.id)
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