import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <div className="p-6 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Privacy &amp; Policies</h1>
      <p className="text-gray-700 mb-6">By using this website you agree to blablabla</p>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to The Shore
      </Link>
    </div>
  )
}
