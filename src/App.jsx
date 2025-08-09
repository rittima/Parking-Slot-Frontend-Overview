import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import AvailableSlots from './pages/AvailableSlots'
import History from './pages/History' // Make sure you have this import
import { Route, Routes } from 'react-router-dom'
import ExitGate from './pages/ExitGate'
import EntryGate from './pages/EntryGate'

function App() {

  return (
    <>
      {/* Show message on mobile and tablet */}
      <div id="mobile-block" className='block lg:hidden text-center text-red-600 text-xl p-6'>
        This CRM application is not available on mobile or tablet devices.
      </div>

      {/* Show app only on large screens */}
      <div id="desktop-app" className="hidden lg:flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* <Navbar /> */}

          <main className="flex-1 p-4 bg-yellow-50 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/available-slot" element={<AvailableSlots />} />
              <Route path="/entry" element={<EntryGate />} />
              <Route path="/exit" element={<ExitGate />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
