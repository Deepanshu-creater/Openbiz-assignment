const ProgressTracker = ({ currentStep, totalSteps }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        position: 'relative' 
      }}>
        {/* Progress line */}
        <div style={{ 
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#e5e7eb',
          transform: 'translateY(-50%)',
          zIndex: 0
        }}></div>
        <div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: 0,
            height: '4px',
            backgroundColor: '#2563eb',
            transform: 'translateY(-50%)',
            zIndex: 10,
            transition: 'all 0.3s',
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` 
          }}
        ></div>
        
        {/* Steps */}
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 20
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: step <= currentStep ? '#2563eb' : 'white',
              color: step <= currentStep ? 'white' : '#6b7280',
              border: step <= currentStep ? 'none' : '2px solid #d1d5db'
            }}>
              {step}
            </div>
            <span style={{
              fontSize: '12px',
              marginTop: '4px',
              color: step <= currentStep ? '#2563eb' : '#6b7280',
              fontWeight: step <= currentStep ? '500' : 'normal'
            }}>
              Step {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressTracker