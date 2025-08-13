import React from 'react';

const PANStep = ({ register, errors, prevStep }) => {
  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Step 2: PAN Verification</h2>
      
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="panNumber" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          PAN Number
        </label>
        <input
          type="text"
          id="panNumber"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("panNumber", {
            required: "PAN number is required",
            pattern: {
              value: /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/,
              message: "Invalid PAN format (e.g., ABCDE1234F)"
            }
          })}
          placeholder="Enter PAN number"
        />
        {errors.panNumber && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.panNumber.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="businessName" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("businessName", {
            required: "Business name is required"
          })}
          placeholder="Enter your business name"
        />
        {errors.businessName && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.businessName.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="organizationType" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Type of Organization
        </label>
        <select
          id="organizationType"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("organizationType", {
            required: "Organization type is required"
          })}
        >
          <option value="">Select organization type</option>
          <option value="proprietorship">Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="huf">HUF</option>
          <option value="company">Company</option>
          <option value="llp">LLP</option>
        </select>
        {errors.organizationType && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.organizationType.message}</p>
        )}
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
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit Registration
        </button>
      </div>
    </div>
  );
};

export default PANStep;