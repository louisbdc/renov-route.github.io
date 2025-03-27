import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './pages/Hero'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'
import About from './pages/About'
import './App.css'
import References from './pages/References'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <img src="src/assets/logo_renov_route_2.avif" alt="Rénov Route Logo" />
                <span className="logo-text">Rénov Route</span>
              </Link>
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className="nav-links">
                <li><Link to="/realisations">Nos réalisations</Link></li>
                <li><Link to="/references">Nos références</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/contact">Contact ou question ?</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/references" element={<References />} />            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Rénov Route. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
