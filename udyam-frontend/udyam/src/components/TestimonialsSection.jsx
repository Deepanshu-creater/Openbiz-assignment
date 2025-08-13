import React from 'react';
import { Star } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    business: 'Sharma Textiles',
    review: 'Got my Udyam certificate within 24 hours. The process was completely hassle-free and helped me secure a business loan.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    business: 'Patel Foods',
    review: 'The registration was so simple. We got our first government tender within 3 months of getting Udyam registered.',
    rating: 4
  },
  {
    name: 'Vikram Singh',
    business: 'Singh Automobiles',
    review: 'The interest rate benefit alone made it worth registering. Highly recommend to all small business owners.',
    rating: 5
  }
];

const TestimonialsSection = () => {
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
        }}>What Our Users Say</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} style={{ color: '#eab308' }} />
                ))}
              </div>
              <p style={{ 
                color: '#4b5563', 
                marginBottom: '16px', 
                fontStyle: 'italic' 
              }}>"{testimonial.review}"</p>
              <div style={{ fontWeight: '600' }}>{testimonial.name}</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>{testimonial.business}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;