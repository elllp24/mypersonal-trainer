import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TrainerManagement() {

  const navigate = useNavigate();

  // =========================================
  // AUTH CHECK
  // =========================================

  useEffect(() => {

    const role = localStorage.getItem("role");

    if (role !== "admin") {

      navigate("/login");
    }

  }, [navigate]);


  // =========================================
  // STATES
  // =========================================

  const API = "http://127.0.0.1:8000";

  const [trainers, setTrainers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [photo, setPhoto] = useState("");

  const [editingId, setEditingId] = useState(null);


  // =========================================
  // GET TRAINERS
  // =========================================

  const fetchTrainers = async () => {

    try {

      const res = await axios.get(`${API}/trainers`);

      setTrainers(res.data);

    } catch (error) {

      console.log(error);
    }
  };


  useEffect(() => {

    fetchTrainers();

  }, []);


  // =========================================
  // ADD / UPDATE TRAINER
  // =========================================

  const saveTrainer = async () => {

    if (
      !name ||
      !email ||
      !phone ||
      !specialization
    ) {

      alert("All fields are required");

      return;
    }

    const data = {

      name,
      email,
      phone,
      specialization,
      photo

    };

    try {

      // UPDATE

      if (editingId) {

        await axios.put(
          `${API}/trainers/${editingId}`,
          data
        );

        alert("Trainer Updated");

        setEditingId(null);
      }

      // ADD

      else {

        await axios.post(
          `${API}/trainers`,
          data
        );

        alert("Trainer Added");
      }

      // CLEAR

      clearForm();

      fetchTrainers();

    } catch (error) {

      console.log(error);
    }
  };


  // =========================================
  // DELETE TRAINER
  // =========================================

  const deleteTrainer = async (id) => {

    try {

      await axios.delete(
        `${API}/trainers/${id}`
      );

      fetchTrainers();

    } catch (error) {

      console.log(error);
    }
  };


  // =========================================
  // EDIT TRAINER
  // =========================================

  const editTrainer = (trainer) => {

    setEditingId(trainer.id);

    setName(trainer.name);
    setEmail(trainer.email);
    setPhone(trainer.phone);
    setSpecialization(trainer.specialization);

    setPhoto(trainer.photo);
  };


  // =========================================
  // CLEAR FORM
  // =========================================

  const clearForm = () => {

    setName("");
    setEmail("");
    setPhone("");
    setSpecialization("");

    setPhoto("");

    setEditingId(null);
  };


  // =========================================
  // HANDLE IMAGE
  // =========================================

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {

      setPhoto(reader.result);
    };
  };


  // =========================================
  // LOGOUT
  // =========================================

  const logout = () => {

    localStorage.removeItem("role");
    localStorage.removeItem("email");

    navigate("/login");
  };


  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-5xl font-bold text-orange-500">
          Trainer Management
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>


      {/* FORM */}

      <div className="bg-[#111111] border border-orange-500/20 p-8 rounded-3xl shadow-2xl mb-14">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Trainer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-orange-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-black border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-orange-500"
          />

          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="bg-black border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-orange-500"
          />

          <input
            type="file"
            onChange={handleImage}
            className="bg-black border border-gray-700 text-white p-4 rounded-xl"
          />

        </div>


        <button
          onClick={saveTrainer}
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-semibold transition duration-300"
        >
          {
            editingId
              ? "Update Trainer"
              : "Add Trainer"
          }
        </button>

      </div>


      {/* TRAINER CARDS */}

      <div className="grid md:grid-cols-3 gap-10">

        {trainers.map((trainer) => (

          <div
            key={trainer.id}
            className="bg-[#111111] border border-orange-500/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
          >

            <img
              src={trainer.photo}
              alt=""
              className="w-full h-72 object-cover"
            />


            <div className="p-6">

              <h2 className="text-3xl font-bold text-orange-500">
                {trainer.name}
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                {trainer.specialization}
              </p>

              <p className="mt-4 text-gray-300">
                {trainer.email}
              </p>

              <p className="text-gray-300">
                {trainer.phone}
              </p>


              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => editTrainer(trainer)}
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTrainer(trainer.id)}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}