import React from 'react';

const DocumentUploadStep = ({ register, errors, nextStep, prevStep }) => {
  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Step 4: Document Upload</h2>
      
      <div style={{ display: 'grid', gap: '24px' }}>
        <div>
          <label htmlFor="aadhaarFile" style={{ 
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Aadhaar Card (PDF/Image)
          </label>
          <input
            type="file"
            id="aadhaarFile"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
            {...register("aadhaarFile", {
              required: "Aadhaar card is required"
            })}
          />
          {errors.aadhaarFile && (
            <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.aadhaarFile.message}</p>
          )}
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Max file size: 2MB</p>
        </div>

        <div>
          <label htmlFor="panFile" style={{ 
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            PAN Card (PDF/Image)
          </label>
          <input
            type="file"
            id="panFile"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
            {...register("panFile", {
              required: "PAN card is required"
            })}
          />
          {errors.panFile && (
            <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.panFile.message}</p>
          )}
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Max file size: 2MB</p>
        </div>

        <div>
          <label htmlFor="bankDocument" style={{ 
            display: 'block',
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Bank Account Proof (PDF/Image)
          </label>
          <input
            type="file"
            id="bankDocument"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
            {...register("bankDocument", {
              required: "Bank proof is required"
            })}
          />
          {errors.bankDocument && (
            <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.bankDocument.message}</p>
          )}
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Max file size: 2MB</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px' }}>
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
            type="button"
            onClick={nextStep}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadStep;