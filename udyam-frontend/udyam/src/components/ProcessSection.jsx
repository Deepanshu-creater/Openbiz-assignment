import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Fill Online Application',
    description: 'Complete the simple online form with basic business details'
  },
  {
    number: '2',
    title: 'Upload Documents',
    description: 'Upload required documents (Aadhaar, PAN, etc.)'
  },
  {
    number: '3',
    title: 'Get Certificate',
    description: 'Receive your Udyam Registration Certificate via email'
  }
];

const ProcessSection = () => {
  return (
    <div style={{ padding: '64px 0' }}>
      <div style={{ 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <h2 style={{ 
          fontSize: '30px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '48px'
        }}>How to Register</h2>
        
        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#e5e7eb',
            transform: 'translateY(-50%)',
            display: 'none'
          }}></div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                position: 'relative',
                zIndex: 10
              }}>
                <div style={{ 
                  backgroundColor: '#dbeafe',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <span style={{ 
                    color: '#1e40af',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}>{step.number}</span>
                </div>
                <div style={{ 
                  backgroundColor: 'white',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ 
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>{step.title}</h3>
                  <p style={{ color: '#4b5563' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a 
            href="/registration" 
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '500',
              display: 'inline-block',
              transition: 'background-color 0.3s',
              textDecoration: 'none'
            }}
          >
            Start Registration Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;