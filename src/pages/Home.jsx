import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}

      <nav className="bg-black border-b border-orange-500 px-4 md:px-10 py-4 flex justify-between items-center sticky top-0 z-50">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl font-bold">
            M
          </div>

          <div>

            <h1 className="text-xl md:text-3xl font-bold text-orange-500">
              MyPersonal Trainer
            </h1>

            <p className="text-gray-400 text-xs md:text-sm">
              Smart Fitness Management
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3 md:gap-8 text-sm md:text-lg font-medium">

          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#features" className="hover:text-orange-500 transition hidden md:block">
            Features
          </a>

          <a href="#about" className="hover:text-orange-500 transition hidden md:block">
            About
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Login
          </Link>

        </div>

      </nav>


      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}

      <section
        id="home"
        className="bg-gradient-to-r from-black via-gray-900 to-black py-16 md:py-32 px-4 md:px-10"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 md:mb-8">

              Transform Your
              <br />

              Fitness Business
              <br />

              <span className="text-orange-500">
                Digitally
              </span>

            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10">

              Powerful AI-based training management system
              to manage trainers, members, classes,
              attendance, analytics, and performance —
              all in one dashboard.

            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/login"
                className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-center text-lg md:text-xl font-bold hover:bg-orange-600 transition"
              >
                Get Started
              </Link>

              <button
                className="border border-orange-500 px-8 py-4 rounded-2xl text-lg md:text-xl hover:bg-orange-500 transition"
              >
                Watch Demo
              </button>

            </div>

          </div>


          {/* RIGHT */}

          <div className="relative">

            <div className="bg-gray-900 rounded-3xl p-4 md:p-8 shadow-2xl border border-orange-500">

              <div className="grid grid-cols-2 gap-4 md:gap-5">

                <div className="bg-black rounded-2xl p-4 md:p-6">

                  <h2 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-300">
                    Total Members
                  </h2>

                  <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
                    1,240
                  </h1>

                </div>

                <div className="bg-black rounded-2xl p-4 md:p-6">

                  <h2 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-300">
                    Trainers
                  </h2>

                  <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
                    48
                  </h1>

                </div>

                <div className="bg-black rounded-2xl p-4 md:p-6">

                  <h2 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-300">
                    Attendance
                  </h2>

                  <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
                    94%
                  </h1>

                </div>

                <div className="bg-black rounded-2xl p-4 md:p-6">

                  <h2 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-300">
                    Revenue
                  </h2>

                  <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
                    ₹4.8L
                  </h1>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* FEATURES */}
      {/* ========================= */}

      <section
        id="features"
        className="py-16 md:py-24 px-4 md:px-10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h1 className="text-3xl md:text-5xl font-bold mb-5 text-orange-500">
              Powerful Features
            </h1>

            <p className="text-lg md:text-xl text-gray-400">
              Everything you need to manage your fitness business
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              {
                icon: "🧑‍🏫",
                title: "Trainer Management",
                desc: "Manage trainers, schedules and assignments."
              },
              {
                icon: "📅",
                title: "Attendance",
                desc: "Smart attendance tracking system."
              },
              {
                icon: "🏋️",
                title: "Class Scheduling",
                desc: "Manage classes and timings easily."
              },
              {
                icon: "🤖",
                title: "AI Insights",
                desc: "Smart AI analytics and reports."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-gray-900 p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-orange-500/30 hover:-translate-y-2 transition border border-gray-800"
              >

                <div className="text-5xl md:text-6xl mb-6">
                  {item.icon}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="py-16 md:py-24 px-4 md:px-10 bg-gray-950"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>

            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-orange-500">
              Why Choose Us?
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">

              MyPersonal Trainer helps gyms and trainers
              digitize operations with AI-powered tools
              for attendance, scheduling, performance
              tracking and analytics.

            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">

              Built using modern scalable technologies
              with enterprise-level security.

            </p>

          </div>

          <div className="bg-black rounded-3xl p-6 md:p-10 shadow-xl border border-orange-500">

            <div className="space-y-8">

              {[
                "Enterprise-grade secure platform",
                "Fast and optimized performance",
                "Smart AI-driven analytics"
              ].map((text, index) => (

                <div
                  key={index}
                  className="flex gap-5 items-start"
                >

                  <div className="text-3xl md:text-4xl text-orange-500">
                    ✔
                  </div>

                  <div>

                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                      {text}
                    </h2>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="py-16 md:py-20 bg-black"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-400 text-lg">
              Have questions? Send us your enquiry
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}

            <div>

              <h3 className="text-3xl font-bold text-orange-500 mb-6">
                Let's Talk
              </h3>

              <p className="text-gray-400 text-lg mb-8 leading-8">
                Contact our team for trainer management,
                attendance systems, fitness automation,
                AI analytics and custom solutions.
              </p>

              <div className="space-y-5">

                <div className="bg-gray-900 p-5 rounded-2xl shadow border border-gray-800">

                  <h4 className="font-bold text-xl mb-2 text-orange-500">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    761 ANG MO KIO AVE 2,<br />
                    HORIZON GREEN,<br />
                    SINGAPORE, 567792
                  </p>

                </div>

                <div className="bg-gray-900 p-5 rounded-2xl shadow border border-gray-800">

                  <h4 className="font-bold text-xl mb-2 text-orange-500">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    support@mypersonal-trainer.com
                  </p>

                </div>

                <div className="bg-gray-900 p-5 rounded-2xl shadow border border-gray-800">

                  <h4 className="font-bold text-xl mb-2 text-orange-500">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +65 97916144
                  </p>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="bg-gray-900 p-6 md:p-10 rounded-3xl shadow-xl border border-orange-500">

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <textarea
                  rows="5"
                  placeholder="Enter Your Enquiry"
                  className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>

                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition"
                >
                  Send Enquiry
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-black border-t border-orange-500 text-white py-8">

        <div className="text-center text-gray-400 text-sm md:text-base px-4">

          © 2026 MyPersonal Trainer. All rights reserved.

        </div>

      </footer>

    </div>
  );
}