import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProgressTracker from '../components/ProgressTracker';
import AadhaarStep from '../components/RegistrationSteps/AadhaarStep';
import PANStep from '../components/RegistrationSteps/PANStep';
import BusinessDetailsStep from '../components/RegistrationSteps/BusinessDetailsStep';
import DocumentUploadStep from '../components/RegistrationSteps/DocumentUploadStep';
import ReviewStep from '../components/RegistrationSteps/ReviewStep';
import { submitRegistration, uploadDocuments, sendOTP, verifyOTP } from '../services/api';


const Registration = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [showOTPModal, setShowOTPModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger
  } = useForm();

  const nextStep = async () => {
    const fields = stepFields[step];
    const isValid = await trigger(fields);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

 const handleAadhaarSubmit = async () => {
  const mobile = watch('mobile');
  
  try {
    // Validate mobile first
    if (!/^[0-9]{10}$/.test(mobile)) {
      throw new Error('Please enter a valid 10-digit mobile number');
    }

    // Show loading state
    setIsSendingOTP(true);
    
    await sendOTP(mobile);
    setShowOTPModal(true);
  } catch (error) {
    // User-friendly error messages
    let message = 'OTP sending failed';
    if (error.message.includes('Network Error')) {
      message = 'Network error - please check your connection';
    } else if (error.response?.status === 400) {
      message = 'Invalid mobile number format';
    }
    
    setError(message);
    console.error('OTP Error:', error);
  } finally {
    setIsSendingOTP(false);
  }
};

  const handleOTPVerify = async (otp) => {
    try {
      await verifyOTP(watch('mobile'), otp);
      setShowOTPModal(false);
      setStep(2); // Move to PAN step after OTP verification
    } catch (error) {
      console.error('OTP verification failed:', error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // First upload documents
      const docResponse = await uploadDocuments({
        aadhaarFile: data.aadhaarFile[0],
        panFile: data.panFile[0],
        bankDocument: data.bankDocument[0]
      });

      // Prepare registration data
      const registrationData = {
        ...data,
        aadhaarFile: docResponse.aadhaarFile,
        panFile: docResponse.panFile,
        bankDocument: docResponse.bankDocument,
        district: data.city // Assuming city is the district
      };

      // Submit registration
      const result = await submitRegistration(registrationData);
      setSubmissionResult({
        success: true,
        message: 'Registration submitted successfully!',
        data: result
      });
    } catch (error) {
      setSubmissionResult({
        success: false,
        message: error.response?.data?.error || 'Registration failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepFields = {
    1: ['aadhaarNumber', 'name', 'mobile'],
    2: ['panNumber', 'businessName', 'organizationType'],
    3: ['businessAddress', 'pincode', 'state', 'district', 'businessActivity', 'commencementDate'],
    4: ['aadhaarFile', 'panFile', 'bankDocument'],
    5: [] // Review step has no fields to validate
  };

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
        marginBottom: '0.5rem'
      }}>Udyam Registration</h1>
      <p style={{
        color: '#4b5563',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Complete your MSME registration in simple steps
      </p>
      
      <ProgressTracker currentStep={step} totalSteps={5} />
      
      {showOTPModal && (
        <OTPVerificationModal
          mobile={watch('mobile')}
          onVerify={handleOTPVerify}
          onClose={() => setShowOTPModal(false)}
        />
      )}
      
      {submissionResult ? (
        <div style={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          backgroundColor: submissionResult.success ? '#f0fdf4' : '#fef2f2',
          border: `1px solid ${submissionResult.success ? '#bbf7d0' : '#fecaca'}`
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: submissionResult.success ? '#166534' : '#991b1b'
          }}>
            {submissionResult.success ? 'Registration Successful!' : 'Registration Failed'}
          </h2>
          <p style={{ marginBottom: '1rem' }}>{submissionResult.message}</p>
          
          {submissionResult.success && (
            <div style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '0.375rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontWeight: '500',
                marginBottom: '0.5rem'
              }}>Registration Details:</h3>
              <p><span style={{ fontWeight: '500' }}>Reference ID:</span> {submissionResult.data._id}</p>
              <p><span style={{ fontWeight: '500' }}>Business Name:</span> {submissionResult.data.businessName}</p>
              <p><span style={{ fontWeight: '500' }}>Status:</span> Pending Verification</p>
              
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '0.75rem'
              }}>
                <a 
                  href={`/status/${submissionResult.data._id}`}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                >
                  Check Status
                </a>
                <a 
                  href="/"
                  style={{
                    backgroundColor: '#e5e7eb',
                    color: '#1f2937',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d1d5db'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                >
                  Return Home
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={{
          marginTop: '2rem',
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          {step === 1 && (
            <AadhaarStep 
              register={register} 
              errors={errors} 
              nextStep={handleAadhaarSubmit}
              watch={watch}
            />
          )}
          
          {step === 2 && (
            <PANStep 
              register={register} 
              errors={errors} 
              nextStep={nextStep}
              prevStep={prevStep}
              watch={watch}
            />
          )}
          
          {step === 3 && (
            <BusinessDetailsStep 
              register={register} 
              errors={errors} 
              nextStep={nextStep}
              prevStep={prevStep}
              watch={watch}
              setValue={setValue}
            />
          )}
          
          {step === 4 && (
            <DocumentUploadStep 
              register={register} 
              errors={errors} 
              nextStep={nextStep}
              prevStep={prevStep}
              watch={watch}
            />
          )}
          
          {step === 5 && (
            <ReviewStep 
              watch={watch}
              prevStep={prevStep}
              isSubmitting={isSubmitting}
            />
          )}
        </form>
      )}
    </div>
  );
};

export default Registration;