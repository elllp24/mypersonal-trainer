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

      navigate("/member-dashboard");
    }

    else {

      setError("Invalid Credentials");
    }
  };


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[420px]">

        {/* TITLE */}

        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">
          Login
        </h1>


        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />


        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />


        {/* ROLE */}

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
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

          <p className="text-red-500 mb-4">
            {error}
          </p>

        )}


        {/* LOGIN BUTTON */}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
        >
          Login
        </button>


        {/* HOME */}

        <div className="text-center mt-6">

          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </Link>

        </div>


        {/* DEMO LOGIN */}

        <div className="mt-8 bg-gray-100 p-4 rounded-xl text-sm">

          <p className="font-bold mb-2">
            Demo Login
          </p>

          <p>
            Admin → admin@gmail.com / admin123
          </p>

          <p>
            Trainer → trainer@gmail.com / trainer123
          </p>

          <p>
            Member → member@gmail.com / member123
          </p>

        </div>

      </div>

    </div>
  );
}