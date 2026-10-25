import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <Link to="/privacy">Privacy and policy</Link>
      <Link to="/admin" className="ml-auto opacity-75 hover:opacity-100 text-sm">Admin Dashboard</Link>
    </footer>
  )
}
