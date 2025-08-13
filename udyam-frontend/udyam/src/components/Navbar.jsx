import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav style={{ 
      backgroundColor: '#1e40af',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          fontSize: '20px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          textDecoration: 'none'
        }}>
          <img 
            src="/assets/udyam-logo.png" 
            alt="Udyam Logo" 
            style={{ height: '32px', marginRight: '8px' }}
          />
          Udyam Registration
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '24px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/registration" style={{ color: 'white', textDecoration: 'none' }}>Registration</Link>
          <Link to="/status" style={{ color: 'white', textDecoration: 'none' }}>Check Status</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={{ 
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Login Button - Desktop */}
        <button style={{ 
          display: 'none',
          backgroundColor: 'white',
          color: '#1e40af',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>
          Login / Signup
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ 
          backgroundColor: '#1e3a8a',
          padding: '8px 16px'
        }}>
          <Link to="/" style={{ 
            display: 'block',
            padding: '8px 0',
            color: 'white',
            textDecoration: 'none'
          }}>Home</Link>
          <Link to="/about" style={{ 
            display: 'block',
            padding: '8px 0',
            color: 'white',
            textDecoration: 'none'
          }}>About</Link>
          <Link to="/registration" style={{ 
            display: 'block',
            padding: '8px 0',
            color: 'white',
            textDecoration: 'none'
          }}>Registration</Link>
          <Link to="/status" style={{ 
            display: 'block',
            padding: '8px 0',
            color: 'white',
            textDecoration: 'none'
          }}>Check Status</Link>
          <Link to="/contact" style={{ 
            display: 'block',
            padding: '8px 0',
            color: 'white',
            textDecoration: 'none'
          }}>Contact</Link>
          <button style={{ 
            width: '100%',
            backgroundColor: 'white',
            color: '#1e40af',
            padding: '8px 16px',
            borderRadius: '6px',
            marginTop: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Login / Signup
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar