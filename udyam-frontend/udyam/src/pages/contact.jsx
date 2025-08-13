import { useState } from 'react'
import { Email, Phone, LocationOn } from '@mui/icons-material'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitMessage('Thank you for contacting us! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div style={{
      maxWidth: '56rem',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>Contact Us</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>Send us a message</h2>
          
          {submitMessage ? (
            <div style={{
              backgroundColor: '#f0fdf4',
              color: '#166534',
              padding: '1rem',
              borderRadius: '0.375rem',
              border: '1px solid #bbf7d0'
            }}>
              {submitMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '0.25rem',
                  fontWeight: '500'
                }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '0.25rem',
                  fontWeight: '500'
                }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '0.25rem',
                  fontWeight: '500'
                }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '0.25rem',
                  fontWeight: '500'
                }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
                  }}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#60a5fa' : '#2563eb',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#2563eb')}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#eff6ff',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #dbeafe'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Email style={{
                marginRight: '0.5rem',
                color: '#2563eb'
              }} />
              Email Support
            </h3>
            <p style={{
              color: '#374151'
            }}>
              For general inquiries and support:
            </p>
            <a href="mailto:support@udyamregistration.com" style={{
              color: '#2563eb',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              support@udyamregistration.com
            </a>
          </div>
          
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid #bbf7d0'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Phone style={{
                marginRight: '0.5rem',
                color: '#16a34a'
              }} />
              Helpline
            </h3>
            <p style={{
              color: '#374151'
            }}>
              Our customer care team is available:
            </p>
            <p style={{
              fontWeight: '500'
            }}>Monday to Friday, 9 AM to 6 PM</p>
            <a href="tel:18001234567" style={{
              color: '#16a34a',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              1800-123-4567 (Toll-free)
            </a>
          </div>
          
          <div style={{
            backgroundColor: '#f5f3ff',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            border: '1px solid ' + '#e9d5ff'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <LocationOn style={{
                marginRight: '0.5rem',
                color: '#7c3aed'
              }} />
              Office Address
            </h3>
            <address style={{
              fontStyle: 'normal',
              color: '#374151'
            }}>
              Ministry of Micro, Small and Medium Enterprises<br />
              Udyam Registration Portal<br />
              Nirman Bhawan, New Delhi - 110011<br />
              India
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact