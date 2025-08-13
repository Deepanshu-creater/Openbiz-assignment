import { Facebook, Twitter, LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '32px 0'
    }}>
      <div style={{ 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Udyam Registration</h3>
            <p style={{ color: '#9ca3af' }}>
              Government-recognized MSME registration portal for Indian businesses.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Quick Links</h3>
            <ul style={{ display: 'grid', gap: '8px' }}>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Udyam</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Registration Process</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Check Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Resources</h3>
            <ul style={{ display: 'grid', gap: '8px' }}>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>MSME Schemes</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>FAQ</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Help Center</a></li>
              <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Download Forms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>Connect With Us</h3>
            <div style={{ 
              display: 'flex',
              gap: '16px',
              marginBottom: '16px'
            }}>
              <a href="#" style={{ color: '#9ca3af' }}><Facebook /></a>
              <a href="#" style={{ color: '#9ca3af' }}><Twitter /></a>
              <a href="#" style={{ color: '#9ca3af' }}><LinkedIn /></a>
            </div>
            <p style={{ color: '#9ca3af' }}>Email: support@udyamregistration.com</p>
            <p style={{ color: '#9ca3af' }}>Helpline: 1800-123-4567</p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #374151',
          marginTop: '32px',
          paddingTop: '24px',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p>© {new Date().getFullYear()} Udyam Registration Portal. All rights reserved.</p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '8px'
          }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer