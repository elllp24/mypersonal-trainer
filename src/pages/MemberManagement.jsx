import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MemberManagement() {

  const navigate = useNavigate();

  // =========================================
  // ADMIN AUTH
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

  const [members, setMembers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [membership, setMembership] = useState("");

  const [trainer, setTrainer] = useState("");

  const [photo, setPhoto] = useState("");

  const [editingId, setEditingId] = useState(null);


  // =========================================
  // GET MEMBERS
  // =========================================

  const fetchMembers = async () => {

    try {

      const res = await axios.get(`${API}/members`);

      setMembers(res.data);

    } catch (error) {

      console.log(error);
    }
  };


  useEffect(() => {

    fetchMembers();

  }, []);


  // =========================================
  // SAVE MEMBER
  // =========================================

  const saveMember = async () => {

    if (
      !name ||
      !email ||
      !phone ||
      !membership ||
      !trainer
    ) {

      alert("All fields required");

      return;
    }

    const data = {

      name,
      email,
      phone,
      membership,
      trainer,
      photo
    };

    try {

      // UPDATE

      if (editingId) {

        await axios.put(
          `${API}/members/${editingId}`,
          data
        );

        alert("Member Updated");

        setEditingId(null);
      }

      // ADD

      else {

        await axios.post(
          `${API}/members`,
          data
        );

        alert("Member Added");
      }

      clearForm();

      fetchMembers();

    } catch (error) {

      console.log(error);
    }
  };


  // =========================================
  // DELETE MEMBER
  // =========================================

  const deleteMember = async (id) => {

    try {

      await axios.delete(
        `${API}/members/${id}`
      );

      fetchMembers();

    } catch (error) {

      console.log(error);
    }
  };


  // =========================================
  // EDIT MEMBER
  // =========================================

  const editMember = (member) => {

    setEditingId(member.id);

    setName(member.name);

    setEmail(member.email);

    setPhone(member.phone);

    setMembership(member.membership);

    setTrainer(member.trainer);

    setPhoto(member.photo);
  };


  // =========================================
  // CLEAR FORM
  // =========================================

  const clearForm = () => {

    setName("");

    setEmail("");

    setPhone("");

    setMembership("");

    setTrainer("");

    setPhoto("");

    setEditingId(null);
  };


  // =========================================
  // IMAGE
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

        <h1 className="text-5xl font-bold text-green-500">
          Member Management
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>


      {/* FORM */}

      <div className="bg-[#111111] p-8 rounded-3xl mb-14 border border-green-500/20">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Member Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

          <select
            value={membership}
            onChange={(e) => setMembership(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          >

            <option value="">
              Select Membership
            </option>

            <option value="Basic">
              Basic
            </option>

            <option value="Premium">
              Premium
            </option>

            <option value="VIP">
              VIP
            </option>

          </select>


          <input
            type="text"
            placeholder="Assigned Trainer"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />


          <input
            type="file"
            onChange={handleImage}
            className="bg-black border border-gray-700 p-4 rounded-xl"
          />

        </div>


        <button
          onClick={saveMember}
          className="mt-8 bg-green-500 hover:bg-green-600 px-10 py-4 rounded-2xl"
        >
          {
            editingId
              ? "Update Member"
              : "Add Member"
          }
        </button>

      </div>


      {/* MEMBER CARDS */}

      <div className="grid md:grid-cols-3 gap-10">

        {members.map((member) => (

          <div
            key={member.id}
            className="bg-[#111111] rounded-3xl overflow-hidden border border-green-500/20"
          >

            <img
              src={member.photo}
              alt=""
              className="w-full h-72 object-cover"
            />


            <div className="p-6">

              <h2 className="text-3xl font-bold text-green-500">
                {member.name}
              </h2>

              <p className="mt-3">
                {member.email}
              </p>

              <p>
                {member.phone}
              </p>

              <p className="mt-4 text-green-400">
                Membership: {member.membership}
              </p>

              <p>
                Trainer: {member.trainer}
              </p>


              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => editMember(member)}
                  className="bg-blue-500 px-5 py-2 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteMember(member.id)}
                  className="bg-red-500 px-5 py-2 rounded-xl"
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