import { useState } from 'react'
import { CheckCircle, Error, HourglassEmpty } from '@mui/icons-material'
import { checkStatus } from '../services/api'

const StatusCheck = () => {
  const [referenceId, setReferenceId] = useState('')
  const [statusData, setStatusData] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckStatus = async (e) => {
    e.preventDefault()
    if (!referenceId.trim()) {
      setError('Please enter a reference ID')
      return
    }
    
    setIsLoading(true)
    setError('')
    try {
      const result = await checkStatus(referenceId)
      setStatusData(result.data)
    } catch (err) {
      setError(err.message || 'Failed to check status')
      setStatusData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const renderStatusIcon = () => {
    if (!statusData) return null
    
    const iconStyle = {
      fontSize: '3rem',
      marginBottom: '1rem'
    }
    
    switch (statusData.status) {
      case 'approved':
        return <CheckCircle style={{ ...iconStyle, color: '#10b981' }} />
      case 'rejected':
        return <Error style={{ ...iconStyle, color: '#ef4444' }} />
      case 'pending':
        return <HourglassEmpty style={{ ...iconStyle, color: '#f59e0b' }} />
      default:
        return null
    }
  }

  const renderStatusMessage = () => {
    if (!statusData) return null
    
    const containerStyle = {
      marginBottom: '1rem'
    }
    
    switch (statusData.status) {
      case 'approved':
        return (
          <div style={{ ...containerStyle, color: '#047857' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Registration Approved</h3>
            <p>Your Udyam registration has been successfully approved.</p>
          </div>
        )
      case 'rejected':
        return (
          <div style={{ ...containerStyle, color: '#b91c1c' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Registration Rejected</h3>
            <p>{statusData.rejectionReason || 'Please check your details and try again.'}</p>
          </div>
        )
      case 'pending':
        return (
          <div style={{ ...containerStyle, color: '#b45309' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Registration Pending</h3>
            <p>Your application is under review. Please check back later.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div style={{
      maxWidth: '42rem',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '0.5rem'
      }}>Check Registration Status</h1>
      <p style={{
        color: '#4b5563',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Enter your Udyam registration reference number to check the status
      </p>
      
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <form onSubmit={handleCheckStatus} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="referenceId" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Udyam Registration Number
            </label>
            <input
              type="text"
              id="referenceId"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                outline: 'none',
                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)'
              }}
              placeholder="Enter your reference number"
            />
            {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? '#60a5fa' : '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseOut={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            {isLoading ? 'Checking...' : 'Check Status'}
          </button>
        </form>
        
        {statusData && (
          <div style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem'
            }}>
              {renderStatusIcon()}
              {renderStatusMessage()}
              
              <div style={{
                width: '100%',
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '0.375rem',
                marginTop: '1rem',
                textAlign: 'left'
              }}>
                <h4 style={{
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>Registration Details:</h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  <div>
                    <p><span style={{ fontWeight: '500' }}>Reference ID:</span> {statusData._id}</p>
                    <p><span style={{ fontWeight: '500' }}>Business Name:</span> {statusData.businessName}</p>
                    <p><span style={{ fontWeight: '500' }}>Applicant Name:</span> {statusData.name}</p>
                  </div>
                  <div>
                    <p><span style={{ fontWeight: '500' }}>Date Submitted:</span> {new Date(statusData.createdAt).toLocaleDateString()}</p>
                    <p><span style={{ fontWeight: '500' }}>PAN Number:</span> {statusData.panNumber}</p>
                    <p><span style={{ fontWeight: '500' }}>Status Last Updated:</span> {new Date(statusData.updatedAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              {statusData.status === 'rejected' && (
                <button style={{
                  marginTop: '1rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                >
                  Re-submit Application
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatusCheck