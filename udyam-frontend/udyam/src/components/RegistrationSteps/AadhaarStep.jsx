import React from 'react';

const AadhaarStep = ({ register, errors, nextStep }) => {
  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Step 1: Aadhaar Verification</h2>
      
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="aadhaarNumber" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Aadhaar Number
        </label>
        <input
          type="text"
          id="aadhaarNumber"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("aadhaarNumber", {
            required: "Aadhaar number is required",
            pattern: {
              value: /^[0-9]{12}$/,
              message: "Aadhaar must be 12 digits"
            }
          })}
          placeholder="Enter 12-digit Aadhaar number"
        />
        {errors.aadhaarNumber && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.aadhaarNumber.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="name" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Name as per Aadhaar
        </label>
        <input
          type="text"
          id="name"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Name should contain only letters"
            }
          })}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.name.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="mobile" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Mobile Number
        </label>
        <input
          type="text"
          id="mobile"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Mobile must be 10 digits"
            }
          })}
          placeholder="Enter 10-digit mobile number"
        />
        {errors.mobile && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.mobile.message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={nextStep}
        style={{
          width: '100%',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Verify via OTP
      </button>
    </div>
  );
};

export default AadhaarStep;