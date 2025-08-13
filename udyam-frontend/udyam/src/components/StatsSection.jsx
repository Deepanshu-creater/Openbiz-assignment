import React from 'react';

const stats = [
  {
    value: '10M+',
    label: 'MSMEs Registered'
  },
  {
    value: '30%',
    label: 'Faster Loan Approval'
  },
  {
    value: '50K+',
    label: 'Government Tenders'
  },
  {
    value: '₹5L Cr',
    label: 'Credit Facilitated'
  }
];

const StatsSection = () => {
  return (
    <div style={{
      padding: '64px 0',
      backgroundColor: '#1e40af',
      color: 'white'
    }}>
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
        }}>Udyam Registration Impact</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '8px'
              }}>{stat.value}</div>
              <div style={{ fontSize: '18px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;