// App.js

import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null);

  // Mock function to capture a photo (replace with your actual camera logic)
  const capturePhoto = () => {
    setPhoto("sample-photo.jpg"); // Replace with actual photo data
    setStep(2);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSendPhoto = () => {
    if (phoneNumber) {
      // Logic to send the photo to the user's phone via WhatsApp or another method
      console.log("Sending photo to:", phoneNumber);
      alert(`Photo sent to ${phoneNumber}`);
      // Reset for next user
      setStep(1);
      setPhoneNumber("");
      setPhoto(null);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg">
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Touch to Start</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={capturePhoto}
            >
              Start
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Enter Your Phone Number</h1>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleSendPhoto}
            >
              Send Photo
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(1)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
