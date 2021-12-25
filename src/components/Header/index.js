import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave"
        />
        <p className="wave-name">Wave </p>
      </div>
      <div>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/">
              {' '}
              Home{' '}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              {' '}
              About{' '}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              {' '}
              Contact{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
