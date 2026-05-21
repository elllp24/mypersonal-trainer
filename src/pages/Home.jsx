import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="bg-black border-b border-orange-500 px-4 md:px-10 py-4 sticky top-0 z-50">

        <div className="flex justify-between items-center">

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


          {/* DESKTOP MENU */}

          <div className="hidden md:flex items-center gap-8 text-lg font-medium">

            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#features" className="hover:text-orange-500 transition">
              Features
            </a>

            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>

            <Link
              to="/login"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
            >
              Login
            </Link>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden text-3xl text-orange-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>


        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="md:hidden flex flex-col gap-5 mt-6 bg-gray-900 p-6 rounded-2xl border border-orange-500 text-lg">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl text-center"
            >
              Login
            </Link>

          </div>

        )}

      </nav>


      {/* HERO */}

      <section
        id="home"
        className="bg-gradient-to-r from-black via-gray-900 to-black py-16 md:py-32 px-4 md:px-10"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8">

              Transform Your
              <br />

              Fitness Business
              <br />

              <span className="text-orange-500">
                Digitally
              </span>

            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">

              Powerful AI-based training management system
              for trainers, attendance, classes,
              analytics and memberships.

            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/login"
                className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-center text-lg font-bold hover:bg-orange-600 transition"
              >
                Get Started
              </Link>

              <button
                className="border border-orange-500 px-8 py-4 rounded-2xl text-lg hover:bg-orange-500 transition"
              >
                Watch Demo
              </button>

            </div>

          </div>


          {/* STATS */}

          <div>

            <div className="grid grid-cols-2 gap-5">

              {[
                {
                  title: "Members",
                  value: "1240"
                },
                {
                  title: "Trainers",
                  value: "48"
                },
                {
                  title: "Attendance",
                  value: "94%"
                },
                {
                  title: "Revenue",
                  value: "₹4.8L"
                }
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-3xl border border-orange-500"
                >

                  <h2 className="text-gray-400 mb-3">
                    {item.title}
                  </h2>

                  <h1 className="text-4xl font-bold text-orange-500">
                    {item.value}
                  </h1>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section
        id="features"
        className="py-16 md:py-24 px-4 md:px-10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Powerful Features
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "🧑‍🏫",
                title: "Trainer Management",
                desc: "Manage trainers, schedules and assignments professionally."
              },

              {
                icon: "📅",
                title: "Attendance Tracking",
                desc: "Track member attendance and performance in real-time."
              },

              {
                icon: "🏋️",
                title: "Class Scheduling",
                desc: "Create and manage gym classes and timings easily."
              },

              {
                icon: "🤖",
                title: "AI Analytics",
                desc: "Smart AI-powered reports and business insights."
              }

            ].map((feature, index) => (

              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-orange-500 hover:-translate-y-3 hover:shadow-orange-500/20 hover:shadow-2xl transition duration-300"
              >

                <div className="text-6xl mb-6">
                  {feature.icon}
                </div>

                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  {feature.title}
                </h2>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="py-16 md:py-20 bg-gray-950"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-12">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-black p-8 rounded-3xl border border-gray-800">

              <h3 className="text-2xl font-bold text-orange-500 mb-6">
                Send Enquiry
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
                ></textarea>

                <button className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold">
                  Send Enquiry
                </button>

              </div>

            </div>


            <div className="space-y-6">

              <div className="bg-black p-6 rounded-3xl border border-gray-800">

                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  Address
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  761 ANG MO KIO AVE 2,
                  HORIZON GREEN,
                  SINGAPORE - 567792
                </p>

              </div>

              <div className="bg-black p-6 rounded-3xl border border-gray-800">

                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  Contact Number
                </h3>

                <p className="text-gray-400 text-lg">
                  +65 97916144
                </p>

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


      {/* AI CHATBOT */}

      <button
        className="fixed bottom-28 right-6 bg-orange-500 hover:bg-orange-600 w-16 h-16 rounded-full shadow-2xl z-50 text-3xl"
      >
        🤖
      </button>


      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/6597916144"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition transform hover:scale-110"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-9 h-9"
        >
          <path d="M16.001 3C8.821 3 3 8.822 3 16.002c0 2.292.6 4.53 1.742 6.502L3 29l6.673-1.704A12.94 12.94 0 0 0 16 29c7.18 0 13.001-5.822 13.001-12.998C29.001 8.822 23.18 3 16.001 3z"/>
        </svg>

      </a>

    </div>
  );
}