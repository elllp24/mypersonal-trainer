import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import AdminDashboard from "./pages/AdminDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import MemberDashboard from "./pages/MemberDashboard";

import Classes from "./pages/Classes";
import Attendance from "./pages/Attendance";

import TrainerManagement from "./pages/TrainerManagement";

import MemberManagement from "./pages/MemberManagement";

import AdminPricing from "./pages/AdminPricing";




export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* DASHBOARDS */}

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/trainer-dashboard"
          element={<TrainerDashboard />}
        />

        <Route
          path="/member-dashboard"
          element={<MemberDashboard />}
        />


        {/* CLASSES */}

        <Route
          path="/classes"
          element={<Classes />}
        />


        {/* ATTENDANCE */}

        <Route
          path="/attendance"
          element={<Attendance />}
        />


        {/* TRAINER MANAGEMENT */}

        <Route
          path="/trainer-management"
          element={<TrainerManagement />}
        />

<Route
          path="/members"
          element={<MemberManagement />}
        />

        <Route
  path="/admin-pricing"
  element={<AdminPricing />}
/>

      </Routes>

    </BrowserRouter>
  );
}