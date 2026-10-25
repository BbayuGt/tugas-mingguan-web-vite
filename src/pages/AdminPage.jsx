import AdminNav from '../components/Admin/AdminNav'
import AdminTable from '../components/Admin/AdminTable'

export default function AdminPage({ messages, setMessages }) {
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
        <AdminTable
          items={messages}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </main>
    </div>
  )
}
