import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import PrivacyPage from './pages/PrivacyPage'

const INITIAL_ADMIN_DATA = [
  { id: 1, source: '192.168.1.1', message: 'Halo', state: 'Waiting for approval' },
  { id: 2, source: '192.168.1.69', message: 'Woi', state: 'Rejected' },
  { id: 3, source: '192.168.1.67', message: '676767667', state: 'Approved' },
]

export default function App() {
  const [adminMessages, setAdminMessages] = useState(INITIAL_ADMIN_DATA)

  const handleAddNewMessage = (msg) => {
    const newEntry = {
      id: adminMessages.length + 1,
      source: '127.0.0.1',
      message: msg,
      state: 'Waiting for approval',
    }
    setAdminMessages((prev) => [...prev, newEntry])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddNewMessage={handleAddNewMessage} />}
        />
        <Route
          path="/admin"
          element={
            <AdminPage
              messages={adminMessages}
              setMessages={setAdminMessages}
            />
          }
        />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/admin.html" element={<Navigate to="/admin" replace />} />
        <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
