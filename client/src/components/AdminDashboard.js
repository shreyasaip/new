import React, { useState } from "react";

function AdminDashboard() {
  const [formData, setFormData] = useState({
    eventName: "",
    category: "technical",
    type: "symposium",
    department: "aiml",
    club: "",
    date: "",
    time: "",
    location: "",
    fee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/events/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          typeOfEvent: formData.type // Change 'type' to 'typeOfEvent'
        })
      });
  
      if (response.ok) {
        alert('Event added successfully!');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };
  

  return (
    <div className="flex">
      <div className="w-1/4 bg-purple-800 text-white p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Admin Navigation</h2>
        <ul>
          <li>
            <a href="#manual-entry" className="text-white">
              Manual Entry
            </a>
          </li>
          <li>
            <a href="#insta-entry" className="text-white">
              Insta Entry
            </a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-semibold text-purple-800 mb-4">
          Manual Entry
        </h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block mb-4">
            Event Name:
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block mb-4">
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="technical">Technical</option>
              <option value="non-technical">Non-Technical</option>
            </select>
          </label>
          <label className="block mb-4">
            Type of Event:
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="symposium">Symposium</option>
              <option value="hackathon">Hackathon</option>
              <option value="webinar">Webinar</option>
              <option value="guest lecture">Guest Lecture</option>
              <option value="paper presentation">Paper Presentation</option>
            </select>
          </label>
          {formData.category === "technical" && (
            <label className="block mb-4">
              Department:
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="aiml">AIML</option>
                <option value="cse">CSE</option>
                <option value="csbs">CSBS</option>
                <option value="csd">CSD</option>
                <option value="it">IT</option>
              </select>
            </label>
          )}
          <label className="block mb-4">
            Club:
            <input
              type="text"
              name="club"
              value={formData.club}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block mb-4">
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block mb-4">
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block mb-4">
            Location:
            <input
              type="text"
              name="location"
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block mb-4">
            Fee:
            <input
              type="number"
              name="fee"
              onChange={handleInputChange}
              required
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <button
            type="submit"
            className="block w-full bg-purple-800 text-white rounded-md py-2 mt-4 font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
