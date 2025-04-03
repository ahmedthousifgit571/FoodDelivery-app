import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);
  const [meteorCount, setMeteorCount] = useState(0);

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDuration: `${Math.random() * 3 + 2}s`
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Add a meteor every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMeteorCount(prev => (prev + 1) % 10); // Cycle through 0-9
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom, #000000, #0a1128, #1a237e)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Stars */}
      {stars.map(star => (
        <div 
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top, 
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: 'white',
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration} infinite alternate`
          }}
        />
      ))}
      
      {/* Meteor */}
      <div 
        style={{
          position: 'absolute',
          top: `${meteorCount * 10}%`,
          left: '100%',
          width: '100px',
          height: '2px',
          background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          transform: 'rotate(-45deg)',
          animation: 'meteor 2s linear forwards',
          opacity: 0.7
        }}
      />
      
      {/* Planet */}
      <div style={{
        position: 'absolute',
        width: '256px',
        height: '256px',
        borderRadius: '50%',
        background: '#3949ab',
        opacity: 0.2,
        bottom: '48px',
        left: '-128px'
      }} />
      
      {/* Error content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '500px',
        padding: '0 24px'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          marginBottom: '8px',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>404</h1>
        
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: '600',
          marginBottom: '16px'
        }}>Houston, we have a problem</h2>
        
        <p style={{
          color: '#cbd5e1',
          marginBottom: '32px'
        }}>The page you're looking for has drifted into deep space or never existed in this galaxy.</p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: 'center',
          '@media (min-width: 640px)': {
            flexDirection: 'row'
          }
        }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#2563eb',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              border: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.background = '#2563eb'}
          >
            <HomeIcon />
            Return Home
          </button>
          
          <button 
            onClick={() => window.location.reload()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#4338ca',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              border: 'none',
              color: 'white'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#3730a3'}
            onMouseOut={(e) => e.currentTarget.style.background = '#4338ca'}
          >
            <RefreshIcon />
            Try Again
          </button>
        </div>
        
        <div style={{
          marginTop: '48px',
          color: '#94a3b8'
        }}>
          <p style={{ fontSize: '0.875rem' }}>
            Lost? <span style={{ 
              color: '#60a5fa', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Contact our support team <ArrowRightIcon />
            </span>
          </p>
        </div>
      </div>
      
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            100% { opacity: 1; }
          }
          
          @keyframes meteor {
            0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
            100% { transform: translateX(-1000px) translateY(1000px) rotate(-45deg); opacity: 0; }
          }

          @media (min-width: 640px) {
            .button-container {
              flex-direction: row;
            }
          }
        `}
      </style>
    </div>
  );
};

// Icon components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Error;