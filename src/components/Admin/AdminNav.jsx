import { Link } from 'react-router-dom'

export default function AdminNav() {
  return (
    <nav className="bg-indigo-950 px-4 py-2 flex items-center justify-between">
      <div>
        <h1 className="text-white text-lg font-bold">The shore's Administrator</h1>
      </div>
      <div>
        <Link to="/" className="text-indigo-200 hover:text-white text-sm">
          ← Back to Shore
        </Link>
      </div>
    </nav>
  )
}
