import { useState, useEffect } from 'react'
import AdminNav from '../components/Admin/AdminNav'
import AdminTable from '../components/Admin/AdminTable'

export default function AdminPage({ messages: propMessages, setMessages: propSetMessages }) {
  const [internalMessages, setInternalMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const isControlled = propMessages !== undefined && propSetMessages !== undefined
  const messages = isControlled ? propMessages : internalMessages
  const setMessages = isControlled ? propSetMessages : setInternalMessages

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data (${res.status})`)
        }
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        const mappedData = data.map((item) => ({
          id: item.id,
          source: item.email || `192.168.1.${item.userId || 1}`,
          message: item.body || item.title || '',
          state: 'Waiting for approval',
        }))

        setMessages((prev) => {
          const userSubmitted = Array.isArray(prev)
            ? prev.filter((entry) => entry.source === '127.0.0.1')
            : []
          return [...mappedData, ...userSubmitted]
        })
        setLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        setError(err.message)
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [setMessages])

  const handleApprove = (id) => {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, state: 'Approved' } : item
      )
    )
  }

  const handleReject = (id) => {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, state: 'Rejected' } : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <AdminNav />
      <main className="flex justify-center m-4 overflow-x-auto">
        {loading ? (
          <p className="text-gray-500 py-4">Memuat data dari server...</p>
        ) : error ? (
          <p className="text-red-500 py-4">Gagal memuat data: {error}</p>
        ) : (
          <AdminTable
            items={messages}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        )}
      </main>
    </div>
  )
}

