import React from 'react';

const About = () => {
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
      }}>About Udyam Registration</h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>What is Udyam Registration?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Udyam Registration is the Government of India's official process for Micro, Small, and Medium Enterprises (MSMEs) to register and obtain recognition. It replaced the earlier system of MSME registration known as Udyog Aadhaar in 2020.
        </p>
        <p>
          The registration process is completely online, paperless, and based on self-declaration. No documents or proof are required to be uploaded for registering an MSME.
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
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
            color: '#1e40af'
          }}>Objectives</h3>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
              Promote ease of doing business for MSMEs
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
              Provide recognition and identity to MSMEs
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
              Enable access to government schemes and benefits
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
              Facilitate formalization of informal enterprises
            </li>
          </ul>
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
            color: '#166534'
          }}>Key Features</h3>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>•</span>
              Permanent registration number (Udyam Registration Number)
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>•</span>
              Free of cost registration process
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>•</span>
              No physical documentation required
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>•</span>
              Instant registration certificate
            </li>
          </ul>
        </div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>MSME Classification</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ minWidth: '100%', border: '1px solid #e5e7eb' }}>
            <thead style={{ backgroundColor: '#f9fafb' }}>
              <tr>
                <th style={{
                  padding: '0.5rem 1rem',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb'
                }}>Classification</th>
                <th style={{
                  padding: '0.5rem 1rem',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb'
                }}>Manufacturing</th>
                <th style={{
                  padding: '0.5rem 1rem',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb'
                }}>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  fontWeight: '500'
                }}>Micro</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹1 Cr &amp; Turnover &lt; ₹5 Cr</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹10 L &amp; Turnover &lt; ₹50 L</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  fontWeight: '500'
                }}>Small</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹10 Cr &amp; Turnover &lt; ₹50 Cr</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹2 Cr &amp; Turnover &lt; ₹5 Cr</td>
              </tr>
              <tr>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  fontWeight: '500'
                }}>Medium</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹50 Cr &amp; Turnover &lt; ₹250 Cr</td>
                <td style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb'
                }}>Investment &lt; ₹5 Cr &amp; Turnover &lt; ₹25 Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;