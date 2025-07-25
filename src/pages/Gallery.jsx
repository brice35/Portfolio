import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen flex justify-center items-start px-6 py-12 font-inter">
      <div className="w-full max-w-6xl">

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center mb-16 mt-24 text-[#1e1e1e] font-satoshi">
          Services
        </h1>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* UX Design */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              UX
            </div>
            <h2 className="text-xl font-semibold mb-2">UX Design</h2>
            <p className="text-gray-700 text-base text-justify">
              Designing intuitive user journeys tailored to each need for a smooth and enjoyable experience.
            </p>
          </div>

          {/* Visual Interface */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              UI
            </div>
            <h2 className="text-xl font-semibold mb-2">Visual Interface</h2>
            <p className="text-gray-700 text-base text-justify">
              Designing aesthetic, modern, and consistent interfaces aligned with your project's visual identity.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-red-100 flex items-center justify-center rounded-full mb-4 text-red-600 text-xl">
              💻
            </div>
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-700 text-base text-justify">
              Integrating designs and building dynamic websites using React, Firebase, and more.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="text-center space-x-4 mb-24">
          <Link
            to="/about"
            className="inline-block bg-[#dc2626] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-[#1e1e1e] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;
