import React, { useState } from 'react';
import axios from 'axios';

const BusinessDetailsStep = ({ register, errors, prevStep, setValue }) => {
  const [address, setAddress] = useState({
    pincode: '',
    city: '',
    state: ''
  });

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setAddress({...address, pincode});
    
    if (pincode.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        if (response.data[0].Status === 'Success') {
          const postOffice = response.data[0].PostOffice[0];
          setValue('city', postOffice.District);
          setValue('state', postOffice.State);
          setAddress({
            pincode,
            city: postOffice.District,
            state: postOffice.State
          });
        }
      } catch (error) {
        console.error('Error fetching pincode details:', error);
      }
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Step 3: Business Details</h2>
      
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="businessAddress" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Business Address
        </label>
        <textarea
          id="businessAddress"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            minHeight: '80px'
          }}
          {...register("businessAddress", {
            required: "Business address is required"
          })}
          placeholder="Enter complete business address"
        ></textarea>
        {errors.businessAddress && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.businessAddress.message}</p>
        )}
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '16px'
      }}>
        <div>
          <label htmlFor="pincode" style={{ 
            display: 'block',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            PIN Code
          </label>
          <input
            type="text"
            id="pincode"
            value={address.pincode}
            onChange={handlePincodeChange}
            maxLength="6"
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
            placeholder="Enter 6-digit PIN"
          />
        </div>
        
        <div>
          <label htmlFor="city" style={{ 
            display: 'block',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            City
          </label>
          <input
            type="text"
            id="city"
            value={address.city}
            readOnly
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              backgroundColor: '#f3f4f6'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="state" style={{ 
            display: 'block',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            State
          </label>
          <input
            type="text"
            id="state"
            value={address.state}
            readOnly
            style={{ 
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              backgroundColor: '#f3f4f6'
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="businessActivity" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Business Activity
        </label>
        <input
          type="text"
          id="businessActivity"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("businessActivity", {
            required: "Business activity is required"
          })}
          placeholder="Describe your business activity"
        />
        {errors.businessActivity && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.businessActivity.message}</p>
        )}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="commencementDate" style={{ 
          display: 'block',
          marginBottom: '4px',
          fontWeight: '500'
        }}>
          Date of Commencement
        </label>
        <input
          type="date"
          id="commencementDate"
          style={{ 
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}
          {...register("commencementDate", {
            required: "Commencement date is required"
          })}
        />
        {errors.commencementDate && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}>{errors.commencementDate.message}</p>
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
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessDetailsStep;