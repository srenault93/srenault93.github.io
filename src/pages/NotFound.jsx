import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="shell notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">This page wandered off.</h1>
        <p className="notfound-text">
          The link may be broken or the project moved.
        </p>
        <Link to="/" className="btn btn-primary">← Back home</Link>
      </div>
    </main>
  )
}
