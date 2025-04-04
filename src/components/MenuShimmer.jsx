import React from 'react'

function MenuShimmer() {
  return (
    <div className="body-container menu-details">
      <div className="shimmer-banner" 
        style={{
          height: '260px',
          borderRadius: '12px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          marginBottom: '24px'
        }}
      ></div>
      
      <div className="restaurant-info" style={{ animation: 'none' }}>
        <div className="restaurant-header">
          <div style={{ flex: 1 }}>
            <div className="shimmer-title" 
              style={{
                height: '32px',
                width: '70%',
                marginBottom: '16px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px'
              }}
            ></div>
            <div className="shimmer-text" 
              style={{
                height: '16px',
                width: '90%',
                marginBottom: '10px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px'
              }}
            ></div>
            <div className="shimmer-text" 
              style={{
                height: '16px',
                width: '60%',
                marginBottom: '10px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px'
              }}
            ></div>
          </div>
          
          <div 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite'
            }}
          ></div>
        </div>
        
        <div className="restaurant-meta">
          {[1, 2, 3].map(item => (
            <div key={item} className="meta-item">
              <div 
                style={{
                  height: '14px',
                  width: '60px',
                  marginBottom: '8px',
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '4px'
                }}
              ></div>
              <div 
                style={{
                  height: '16px',
                  width: '80px',
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '4px'
                }}
              ></div>
            </div>
          ))}
        </div>
        
        <div>
          <div 
            style={{
              height: '18px',
              width: '120px',
              marginBottom: '12px',
              background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
              borderRadius: '4px'
            }}
          ></div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {[1, 2, 3, 4].map(item => (
              <div key={item}
                style={{
                  height: '36px',
                  width: '100px',
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  borderRadius: '20px'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {[1, 2].map(item => (
            <div key={item}
              style={{
                height: '40px',
                width: '120px',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: '4px'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuShimmer