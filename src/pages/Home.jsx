import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="bg-black min-h-screen text-white overflow-x-hidden pt-24">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-orange-500 px-4 md:px-10 py-4 z-50">

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
                Smart AI-Based Fitness Management System
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
        className="bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32 px-4 md:px-10"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8">

              Transform Your
              <br />

              Fitness
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
                   title: "Active Classes",
  value: "120"
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
                desc: "Manage trainers professionally."
              },

              {
                icon: "📅",
                title: "Attendance Tracking",
                desc: "Track attendance in real-time."
              },

              {
                icon: "🏋️",
                title: "Class Scheduling",
                desc: "Manage classes and schedules."
              },

              {
                icon: "🤖",
                title: "AI Analytics",
                desc: "Smart AI-powered insights."
              }

            ].map((feature, index) => (

              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-orange-500 hover:-translate-y-3 transition"
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
  className="py-20 md:py-28 px-4 md:px-10 bg-gradient-to-b from-black to-gray-950"
>

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}

    <div className="text-center mb-16">

      <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 mb-6">
        About Us
      </h1>

      <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>

    </div>


    {/* CONTENT */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT SIDE */}

      <div className="space-y-8">

        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">

          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
            Smart Fitness Management
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            MyPersonal Trainer is a next-generation
            AI-powered fitness management platform
            designed for gyms, fitness studios,
            personal trainers, and wellness businesses.

          </p>

        </div>


        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">

          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
            Personalized Fitness Experience
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            Every member receives personalized attention
            and customized fitness programs based on their
            body goals, fitness level, and lifestyle.

            Our trainers focus on creating effective workout
            routines, proper guidance, and continuous motivation
            to help members achieve long-term fitness success.

          </p>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="space-y-8">

        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">

          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
            Member-Focused Training
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            At MyPersonal Trainer, our primary focus is helping
            members achieve their fitness goals through
            expert guidance, personalized training programs,
            and continuous support from certified trainers.

          </p>

        </div>


        <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-orange-500 transition duration-300">

          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
            Healthy Lifestyle Journey
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            Whether your goal is weight loss, muscle building,
            strength training, flexibility improvement,
            or overall wellness, our trainers are committed
            to delivering a safe, effective, and
            results-driven fitness experience.

          </p>

        </div>

      </div>

    </div>


    {/* BOTTOM SECTION */}

    <div className="mt-16 bg-black border border-orange-500 rounded-3xl p-8 md:p-12 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
        Our Mission
      </h2>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">

        We believe fitness is not just about workouts —
        it is about building confidence, discipline,
        healthy habits, and a better lifestyle for every member.

      </p>

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
            Trainer Profiles
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
                className="bg-gray-900 rounded-3xl p-8 border border-gray-800 text-center hover:border-orange-500 transition"
              >

                <div className="w-28 h-28 rounded-full bg-orange-500 mx-auto mb-6"></div>

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
                className="bg-black rounded-3xl p-10 border border-gray-800 hover:border-orange-500 text-center"
              >

                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                  {plan.title}
                </h2>

                <h1 className="text-5xl font-bold mb-6">
                  {plan.price}
                </h1>

                <button className="bg-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-600">
                  Choose Plan
                </button>

              </div>

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

      <footer className="bg-black border-t border-orange-500 py-8">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            MyPersonal Trainer
          </h2>

          <p className="text-gray-400">
            Smart AI-Based Fitness Management System
          </p>

          <p className="text-gray-600 mt-4 text-sm">
            © 2026 MyPersonal Trainer. All Rights Reserved.
          </p>

        </div>

      </footer>



      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/6597916144"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50"
      >
        💬
      </a>

    </div>
  );
}