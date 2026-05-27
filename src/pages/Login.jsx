import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [error, setError] = useState("");


  // =========================
  // LOGIN
  // =========================

  const handleLogin = () => {

    // VALIDATION

    if (!email || !password || !role) {

      setError("All fields are mandatory");

      return;
    }

    setError("");


    // =========================
    // ADMIN LOGIN
    // =========================

    if (
      email === "admin@gmail.com" &&
      password === "admin123" &&
      role === "Admin"
    ) {

      localStorage.setItem("role", "admin");
      localStorage.setItem("email", email);

      navigate("/admin-dashboard");
    }


    // =========================
    // TRAINER LOGIN
    // =========================

    else if (
      email === "trainer@gmail.com" &&
      password === "trainer123" &&
      role === "Trainer"
    ) {

      localStorage.setItem("role", "trainer");
      localStorage.setItem("email", email);

      navigate("/trainer-dashboard");
    }


    // =========================
    // MEMBER LOGIN
    // =========================

    else if (
      email === "member@gmail.com" &&
      password === "member123" &&
      role === "Member"
    ) {

      localStorage.setItem("role", "member");
      localStorage.setItem("email", email);

      navigate("/member-dashboard");
    }

    else {

      setError("Invalid Credentials");
    }
  };


  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="bg-gradient-to-b from-gray-900 to-black border border-orange-500 p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">

        {/* TITLE */}

        <div className="text-center mb-8">

          <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-4xl font-bold">
            M
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
            Login
          </h1>

          <p className="text-gray-400">
            Welcome to MyPersonal Trainer
          </p>

        </div>


        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-gray-700 text-white p-4 rounded-xl mb-4 focus:outline-none focus:border-orange-500"
        />


        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-gray-700 text-white p-4 rounded-xl mb-4 focus:outline-none focus:border-orange-500"
        />


        {/* ROLE */}

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-black border border-gray-700 text-white p-4 rounded-xl mb-4 focus:outline-none focus:border-orange-500"
        >

          <option value="">
            Select Role
          </option>

          <option value="Admin">
            Admin
          </option>

          <option value="Trainer">
            Trainer
          </option>

          <option value="Member">
            Member
          </option>

        </select>


        {/* ERROR */}

        {error && (

          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-xl mb-4">

            {error}

          </div>

        )}


        {/* LOGIN BUTTON */}

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-4 rounded-xl text-lg font-bold shadow-lg"
        >
          Login
        </button>


        {/* BACK HOME */}

        <div className="text-center mt-6">

          <Link
            to="/"
            className="text-orange-500 hover:text-orange-400 transition"
          >
            ← Back to Home
          </Link>

        </div>


        {/* DEMO LOGIN */}

        <div className="mt-8 bg-black border border-gray-800 p-5 rounded-2xl">

          <h2 className="text-orange-500 font-bold text-lg mb-4">
            Demo Login
          </h2>

          <div className="space-y-3 text-gray-300 text-sm">

            <div className="bg-gray-900 p-3 rounded-xl">
              <p className="font-bold text-orange-400">
                Admin
              </p>

              <p>admin@gmail.com</p>
              <p>admin123</p>
            </div>


            <div className="bg-gray-900 p-3 rounded-xl">
              <p className="font-bold text-orange-400">
                Trainer
              </p>

              <p>trainer@gmail.com</p>
              <p>trainer123</p>
            </div>


            <div className="bg-gray-900 p-3 rounded-xl">
              <p className="font-bold text-orange-400">
                Member
              </p>

              <p>member@gmail.com</p>
              <p>member123</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}