"use client";

import React, { useState } from "react";

const Suggestions = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrftoken = getCookie("csrftoken");
    try {
      const response = await fetch(
        "https://notices.tcioe.edu.np/api/curriculum/suggestions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
          },
          body: JSON.stringify({ name, message }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Your suggestion has been submitted successfully.");
    } catch (error) {
      // Handle errors here (e.g., showing an error message)
      console.error("There was a problem with the fetch operation:", error);
      alert("Error submitting your suggestion. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Leave Your Suggestions Here
      </h1>
      <h2 className="text-xl font-medium mb-6">
        Have any suggestions? We'd love to hear them!
      </h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-3 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Suggestions;
