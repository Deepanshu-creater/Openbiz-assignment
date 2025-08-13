import React from 'react';

const ReviewStep = ({ watch, prevStep, isSubmitting }) => {
  const formData = watch();

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '24px'
      }}>Step 5: Review Your Application</h2>
      
      <div style={{ 
        backgroundColor: '#f9fafb',
        padding: '24px',
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <h3 style={{ 
          fontSize: '18px',
          fontWeight: '500',
          marginBottom: '16px'
        }}>Personal Information</h3>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '16px'
        }}>
          <div>
            <p style={{ color: '#4b5563' }}>Name</p>
            <p style={{ fontWeight: '500' }}>{formData.name}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>Mobile</p>
            <p style={{ fontWeight: '500' }}>{formData.mobile}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>Aadhaar Number</p>
            <p style={{ fontWeight: '500' }}>{formData.aadhaarNumber}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>PAN Number</p>
            <p style={{ fontWeight: '500' }}>{formData.panNumber}</p>
          </div>
        </div>

        <h3 style={{ 
          fontSize: '18px',
          fontWeight: '500',
          margin: '24px 0 16px 0'
        }}>Business Information</h3>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '16px'
        }}>
          <div>
            <p style={{ color: '#4b5563' }}>Business Name</p>
            <p style={{ fontWeight: '500' }}>{formData.businessName}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>Organization Type</p>
            <p style={{ fontWeight: '500' }}>{formData.organizationType}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>Business Activity</p>
            <p style={{ fontWeight: '500' }}>{formData.businessActivity}</p>
          </div>
          <div>
            <p style={{ color: '#4b5563' }}>Commencement Date</p>
            <p style={{ fontWeight: '500' }}>{formData.commencementDate}</p>
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <p style={{ color: '#4b5563' }}>Business Address</p>
          <p style={{ fontWeight: '500' }}>{formData.businessAddress}</p>
          <p style={{ fontWeight: '500' }}>{formData.city}, {formData.state} - {formData.pincode}</p>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start' }}>
          <input
            type="checkbox"
            required
            style={{ marginTop: '4px', marginRight: '8px' }}
          />
          <span>I declare that all information provided is correct as per my knowledge</span>
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          type="button"
          onClick={prevStep}
          style={{
            backgroundColor: '#d1d5db',
            color: '#1f2937',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.5 : 1
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;