import React from 'react'

const AvailableSlots = () => {
  const slots = [
    [true, false, true, true, false, false, true, true,  false, true, true], 
    [false, false, false, true, true, true, true, true,  false, true, true], 
    [false, true, false, true, true, false, false, true, false, true, true]  
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="mb-6 border-b border-yellow-200 pb-3">
        <h1 className="text-3xl font-bold text-yellow-700">
          Slots Management Overview
        </h1>
      </header>
      <div className="flex flex-col gap-6">
        {slots.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-6 pb-22 justify-center">
            {row.map((available, index) => (
              <div
                key={index}
                className={`w-22 h-36 rounded-sm ${
                  available ? "bg-green-400" : "bg-red-300"
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableSlots
