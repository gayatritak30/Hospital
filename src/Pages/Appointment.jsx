import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import bgImage from "../assets/hospital.jpeg"; // ✅ background image
import doctorImage from "../assets/i2.jpeg";   // ✅ new doctor image

const Appointment = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg rounded-lg p-8">
        <AppointmentForm />

        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="rounded-lg w-60 h-60 object-cover mb-6"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p>(123) 456-7890</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Email Us</h3>
            <p>healthcarecenter@example.com</p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Our Location</h3>
            <p>123 Anywhere St., Any City, USA 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
