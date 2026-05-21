import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to MyPersonal Trainer. How can I help you?"
    }
  ]);

  const [input, setInput] = useState("");

  return (

    <div className="bg-black min-h-screen text-white overflow-x-hidden pt-24">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-orange-500 px-4 md:px-10 py-4 z-50">

        <div className="flex justify-between items-center">

          {/* LOGO */}

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

            <a href="#trainers" className="hover:text-orange-500 transition">
              Trainers
            </a>

            <a href="#pricing" className="hover:text-orange-500 transition">
              Pricing
            </a>

            <a href="#faq" className="hover:text-orange-500 transition">
              FAQs
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

            <a href="#trainers" onClick={() => setMenuOpen(false)}>
              Trainers
            </a>

            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>

            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQs
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


      {/* ABOUT */}

      <section
        id="about"
        className="py-16 md:py-24 px-4 md:px-10 bg-gray-950"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8">
              About Us
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">

              MyPersonal Trainer is a modern AI-powered
              fitness management platform designed for
              gyms, personal trainers and fitness businesses.

            </p>

            <p className="text-lg text-gray-400 leading-relaxed">

              Manage trainers, attendance, memberships,
              schedules, analytics and customer engagement
              from one smart dashboard.

            </p>

          </div>


          <div className="bg-black border border-orange-500 rounded-3xl p-10">

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="text-5xl">
                  ✅
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-orange-500">
                    Smart Automation
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Automate attendance, schedules and memberships.
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-5">

                <div className="text-5xl">
                  📊
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-orange-500">
                    AI Analytics
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Get powerful AI-based business insights.
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-5">

                <div className="text-5xl">
                  🔒
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-orange-500">
                    Secure Platform
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Enterprise-grade security and performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* TRAINERS */}

      <section
        id="trainers"
        className="py-16 md:py-24 px-4 md:px-10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Our Trainers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                name: "John Carter",
                role: "Strength Coach"
              },
              {
                name: "Sophia Lee",
                role: "Yoga Trainer"
              },
              {
                name: "David Smith",
                role: "Cardio Specialist"
              }
            ].map((trainer, index) => (

              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:border-orange-500 transition"
              >

                <div className="w-28 h-28 mx-auto rounded-full bg-orange-500 mb-6"></div>

                <h2 className="text-2xl font-bold text-orange-500">
                  {trainer.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  {trainer.role}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PRICING */}

      <section
        id="pricing"
        className="py-16 md:py-24 px-4 md:px-10 bg-gray-950"
      >

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Pricing Plans
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Basic",
                price: "$29"
              },
              {
                title: "Standard",
                price: "$59"
              },
              {
                title: "Premium",
                price: "$99"
              }
            ].map((plan, index) => (

              <div
                key={index}
                className="bg-black rounded-3xl p-10 border border-gray-800 hover:border-orange-500 transition text-center"
              >

                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                  {plan.title}
                </h2>

                <h1 className="text-5xl font-bold mb-6">
                  {plan.price}
                </h1>

                <p className="text-gray-400 mb-8">
                  Monthly membership plan
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold">
                  Choose Plan
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* MEMBERSHIP */}

      <section className="py-16 md:py-24 px-4 md:px-10 bg-black">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Membership Benefits
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              "Unlimited Gym Access",
              "Free Fitness Assessment",
              "Personal Trainer Support",
              "Diet & Nutrition Guidance"
            ].map((item, index) => (

              <div
                key={index}
                className="bg-gray-900 p-8 rounded-3xl border border-gray-800 text-center hover:border-orange-500 transition"
              >

                <div className="text-5xl mb-6">
                  💪
                </div>

                <h2 className="text-xl font-bold text-orange-500">
                  {item}
                </h2>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BMI */}

      <section className="py-16 md:py-24 px-4 md:px-10 bg-gray-950">

        <div className="max-w-4xl mx-auto bg-black p-10 rounded-3xl border border-orange-500">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-10">
            BMI Calculator
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="number"
              placeholder="Weight (kg)"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700"
            />

            <input
              type="number"
              placeholder="Height (cm)"
              className="p-4 rounded-xl bg-gray-900 border border-gray-700"
            />

          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold text-lg">
            Calculate BMI
          </button>

        </div>

      </section>


      {/* TESTIMONIALS */}

      <section className="py-16 md:py-24 px-4 md:px-10 bg-black">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Testimonials
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              "Amazing fitness platform!",
              "Best trainer management system.",
              "Professional and easy to use."
            ].map((review, index) => (

              <div
                key={index}
                className="bg-gray-900 p-8 rounded-3xl border border-gray-800"
              >

                <p className="text-gray-300 text-lg">
                  "{review}"
                </p>

                <h3 className="mt-6 text-orange-500 font-bold">
                  ★★★★★
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="py-16 md:py-24 px-4 md:px-10 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            Gallery
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[1,2,3,4,5,6,7,8].map((item) => (

              <div
                key={item}
                className="h-52 bg-gray-800 rounded-3xl border border-gray-700 hover:border-orange-500 transition"
              ></div>

            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section
        id="faq"
        className="py-16 md:py-24 px-4 md:px-10 bg-black"
      >

        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-16">
            FAQs
          </h1>

          <div className="space-y-6">

            {[
              "How to join membership?",
              "Can I manage trainers?",
              "Does it support attendance?"
            ].map((faq, index) => (

              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
              >

                <h2 className="text-xl font-bold text-orange-500">
                  {faq}
                </h2>

                <p className="text-gray-400 mt-3">
                  Yes, our platform fully supports this feature.
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

        </div>

      </section>

    </div>
  );
}