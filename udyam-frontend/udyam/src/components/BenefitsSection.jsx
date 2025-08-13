import React from 'react';
import { CheckCircle } from '@mui/icons-material';

const benefits = [
  {
    title: "Financial Benefits",
    items: [
      "Easier access to bank loans",
      "Lower interest rates on loans",
      "Credit guarantee schemes",
      "Subsidies on patents and trademarks"
    ]
  },
  {
    title: "Government Benefits",
    items: [
      "Eligibility for government tenders",
      "Tax rebates and exemptions",
      "Reimbursement of ISO certification",
      "Special consideration in government policies"
    ]
  },
  {
    title: "Operational Benefits",
    items: [
      "Protection against delayed payments",
      "Concession on electricity bills",
      "Technology upgradation support",
      "Skill development programs"
    ]
  }
];

const BenefitsSection = () => {
  return (
    <div style={{ 
      padding: '64px 0',
      backgroundColor: '#f9fafb'
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
        }}>Benefits of Udyam Registration</h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#1e40af'
              }}>{benefit.title}</h3>
              <ul style={{ display: 'grid', gap: '12px' }}>
                {benefit.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircle style={{ color: '#10b981', marginRight: '8px', marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;