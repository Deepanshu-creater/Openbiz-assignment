import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div style={{ 
      backgroundColor: '#1e40af',
      color: 'white',
      padding: '64px 0'
    }}>
      <div style={{ 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          width: '100%',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '16px'
          }}>Register your business with Udyam in minutes</h1>
          <p style={{ 
            fontSize: '20px',
            marginBottom: '32px'
          }}>Government-recognized MSME registration with instant acknowledgement</p>
          <Link 
            to="/registration" 
            style={{
              backgroundColor: 'white',
              color: '#1e40af',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '500',
              display: 'inline-block',
              transition: 'background-color 0.3s',
              textDecoration: 'none'
            }}
          >
            Start Registration
          </Link>
        </div>
        <div style={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src="/assets/business-growth.svg" 
            alt="Business Growth Illustration" 
            style={{ 
              maxWidth: '512px',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;