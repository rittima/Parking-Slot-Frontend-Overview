import React, { useState } from 'react';

const ExitGate = () => {
  const [confirm, setConfirm] = useState('');

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="mb-6 border-b border-yellow-200 pb-3">
        <h1 className="text-3xl font-bold text-yellow-700">
          Exit Gate
        </h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl flex flex-col md:flex-row">
        {/* Left Section - Car Info */}
        <div className="bg-yellow-100 flex-1 p-6 ">
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            Car Plate Number
          </h2>
          <p className="mb-4 text-md font-medium text-gray-800">
            Plate No: <span className="font-semibold">WB 06 F 597</span>
          </p>

          {/* Confirm Section */}
          <p className="mb-2 text-md font-medium text-gray-800">
            Confirm Y/N:
          </p>
          <div className="flex gap-6">
            {/* Yes */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Yes"
                checked={confirm === 'Yes'}
                onChange={(e) => setConfirm(e.target.value)}
                className="accent-green-600"
              />
              Yes
            </label>

            {/* No */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="No"
                checked={confirm === 'No'}
                onChange={(e) => setConfirm(e.target.value)}
                className="accent-red-600"
              />
              No
            </label>
          </div>

          {/* Output for Yes */}
          {confirm === 'Yes' && (
            <p className="mt-4 text-green-700 font-semibold">Confirmed ✅</p>
          )}
        </div>

        {/* Right Section - Plate Image */}
        <div className="p-6 bg-gray-200 flex-1 flex items-center justify-center overflow-hidden ">
          <img
            src="https://imgs.search.brave.com/Jw_hoYMvvDC7fN42Q7wqZ2hi69M2FZpiySzXbhBiNTs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L0luZGlhbl9W/ZWhpY2xlX1JlZ2lz/dHJhdGlvbl9QbGF0/ZV8tX0tvbGthdGFf/MjAxMS0wNy0yOV80/MDg4Xyhjcm9wcGVk/KS5KUEc"
            alt="Car Plate"
            className="max-h-40 object-contain"
          />
        </div>
      </div>

      {/* Output for No */}
      {confirm === 'No' && (
        <div className="mt-6 p-6 bg-white border border-yellow-200 rounded-lg  hover:shadow-xl">
          <label className="block mb-3 text-sm font-medium text-gray-700">
            Enter the Plate Number:
          </label>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <p className="mt-3 text-xs text-gray-500">
            Selected option:{' '}
            <span className="font-bold text-yellow-600">{confirm}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ExitGate;
