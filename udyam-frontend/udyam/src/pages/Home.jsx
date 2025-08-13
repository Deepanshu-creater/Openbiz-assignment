import HeroSection from '../components/HeroSection'
import BenefitsSection from '../components/BenefitsSection'
import ProcessSection from '../components/ProcessSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '64px',
      paddingBottom: '64px'
    }}>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      
      <div style={{
        backgroundColor: '#eff6ff',
        padding: '48px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '30px',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Ready to Register Your Business?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '32px',
            maxWidth: '672px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Join thousands of businesses that have already registered with Udyam and are enjoying the benefits.
          </p>
          <a 
            href="/registration" 
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '500',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            Start Registration Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home