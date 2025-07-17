import React from "react";

const AppointmentForm = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Appointment</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md placeholder-gray-800"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-md placeholder-gray-800"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-800 font-semibold mb-1">Medical Record Number</label>
        <input
          type="text"
          placeholder="e.g. 12345-7890-0021"
          className="w-full px-4 py-2 border rounded-md placeholder-gray-800"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Reason for Visit</label>
          <select className="w-full px-4 py-2 border rounded-md">
            <option>Routine Checkup</option>
            <option>Consultation</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Department</label>
          <select className="w-full px-4 py-2 border rounded-md">
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Preferred Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-800 font-semibold mb-1">Preferred Time</label>
          <input
            type="time"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
