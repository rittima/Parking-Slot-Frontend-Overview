import React from 'react'

const History = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="mb-6 border-b border-yellow-300 pb-3">
        <h1 className="text-3xl font-bold text-yellow-700">
          History Overview
        </h1>
        <p className="text-gray-500 text-sm">Track all vehicle parking history records</p>
      </header>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-yellow-100 text-gray-900 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">License No.</th>
              <th className="px-6 py-3 text-left">Entry Time</th>
              <th className="px-6 py-3 text-left">Exit Time</th>
              <th className="px-6 py-3 text-left">Parking Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-yellow-600 hover:bg-yellow-50">
              <td className="px-6 py-4">WB 06 F 597</td>
              <td className="px-6 py-4">2025-08-09 10:15 AM</td>
              <td className="px-6 py-4">2025-08-09 01:45 PM</td>
              <td className="px-6 py-4">₹50</td>
            </tr>
            <tr className="border-b border-yellow-600 hover:bg-yellow-50">
              <td className="px-6 py-4">WB 07 G 876</td>
              <td className="px-6 py-4">2025-08-08 09:30 AM</td>
              <td className="px-6 py-4">2025-08-08 12:00 PM</td>
              <td className="px-6 py-4">₹40</td>
            </tr>
            <tr>
              <td className="px-6 py-4">WB 09 H 123</td>
              <td className="px-6 py-4">2025-08-07 08:00 AM</td>
              <td className="px-6 py-4">2025-08-07 10:15 AM</td>
              <td className="px-6 py-4">₹30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History
