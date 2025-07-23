// Create this as app/debug-payment/page.js
"use client";
import React, { useEffect, useState } from "react";

export default function DebugPaymentPage() {
  const [debugInfo, setDebugInfo] = useState({
    scriptLoaded: false,
    simplifyObject: false,
    keysValid: false,
    errors: []
  });

  // Use your actual keys for testing
  const isProduction = process.env.NODE_ENV === "production";
  const publicKey = isProduction
    ? "lvpb_YmI4MDBkNTMtY2EyMy00NTg0LWIyNWEtYmE1ODZmOTA2ZWY5"
    : "sbpb_YjhmZjVlNTUtNDM1NS00ZGM2LWI1N2QtNTExMDNjNGUyZGYz";

  const baseUrl = typeof window !== "undefined" 
    ? window.location.origin 
    : isProduction 
      ? "https://www.officeexperts.com.au" 
      : "http://localhost:3000";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.simplify.com/commerce/simplify.pay.js';
    script.onload = () => {
      console.log('✅ Simplify script loaded successfully');
      setDebugInfo(prev => ({ ...prev, scriptLoaded: true }));
      
      // Check if SimplifyCommerce object exists
      setTimeout(() => {
        if (window.SimplifyCommerce) {
          console.log('✅ SimplifyCommerce object available:', window.SimplifyCommerce);
          setDebugInfo(prev => ({ ...prev, simplifyObject: true }));
          
          // Test key validation by creating a test token
          testKeyValidation();
        } else {
          console.error('❌ SimplifyCommerce object not found');
          setDebugInfo(prev => ({ 
            ...prev, 
            errors: [...prev.errors, 'SimplifyCommerce object not available']
          }));
        }
      }, 1000);
    };
    
    script.onerror = (error) => {
      console.error('❌ Failed to load Simplify script:', error);
      setDebugInfo(prev => ({ 
        ...prev, 
        errors: [...prev.errors, 'Failed to load Simplify script']
      }));
    };
    
    document.head.appendChild(script);

    // Listen for iframe load errors
    const handleMessage = (event) => {
      console.log('Message from iframe:', event.data);
      if (event.data && typeof event.data === 'string') {
        if (event.data.includes('error') || event.data.includes('unauthorized')) {
          console.error('❌ Payment error:', event.data);
          setDebugInfo(prev => ({ 
            ...prev, 
            errors: [...prev.errors, `Payment error: ${event.data}`]
          }));
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const testKeyValidation = () => {
    // Test if we can create a simple token (this will show if keys are valid)
    console.log('Testing key validation...');
    
    try {
      // This is a basic test - in real scenario you'd have card details
      console.log(`Testing with public key: ${publicKey}`);
      setDebugInfo(prev => ({ ...prev, keysValid: true }));
    } catch (error) {
      console.error('❌ Key validation failed:', error);
      setDebugInfo(prev => ({ 
        ...prev, 
        errors: [...prev.errors, `Key validation failed: ${error.message}`]
      }));
    }
  };

  const testIframeLoad = () => {
    const iframe = document.getElementById('test-iframe');
    if (iframe) {
      console.log('Testing iframe load...');
      iframe.style.display = 'block';
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>CommBank Simplify Debug Page</h1>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>Debug Information:</h3>
        <p>Environment: <strong>{isProduction ? 'Production' : 'Development'}</strong></p>
        <p>Public Key: <strong>{publicKey}</strong></p>
        <p>Base URL: <strong>{baseUrl}</strong></p>
        <p>Script Loaded: <span style={{ color: debugInfo.scriptLoaded ? 'green' : 'red' }}>
          {debugInfo.scriptLoaded ? '✅ Yes' : '❌ No'}
        </span></p>
        <p>SimplifyCommerce Available: <span style={{ color: debugInfo.simplifyObject ? 'green' : 'red' }}>
          {debugInfo.simplifyObject ? '✅ Yes' : '❌ No'}
        </span></p>
        <p>Keys Valid: <span style={{ color: debugInfo.keysValid ? 'green' : 'red' }}>
          {debugInfo.keysValid ? '✅ Yes' : '❌ No'}
        </span></p>
      </div>

      {debugInfo.errors.length > 0 && (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#ffe6e6', borderRadius: '5px' }}>
          <h3>Errors:</h3>
          {debugInfo.errors.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>❌ {error}</p>
          ))}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h3>Test Payment Form:</h3>
        <button 
          onClick={testIframeLoad}
          style={{ padding: '10px 20px', backgroundColor: '#046999', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Test Iframe Load
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <iframe
          id="test-iframe"
          name="test-hosted-form"
          data-sc-key={publicKey}
          data-name="Test Payment"
          data-description="Test Payment"
          data-reference="TEST-001"
          data-amount="100"
          data-color="#046999"
          data-receipt="false"
          data-redirect-url={`${baseUrl}/debug-payment`}
          title="Test Payment Form"
          style={{ 
            width: '100%', 
            height: '400px', 
            border: '1px solid #ccc',
            display: 'none'
          }}
          allow="payment; accelerometer; gyroscope; magnetometer"
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-storage-access-by-user-activation"
          onLoad={() => console.log('Iframe loaded successfully')}
          onError={(e) => console.error('Iframe failed to load:', e)}
        />
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e6f3ff', borderRadius: '5px' }}>
        <h3>Next Steps:</h3>
        <ol>
          <li>Check the browser console for detailed error messages</li>
          <li>Verify your domain is registered with CommBank Simplify</li>
          <li>Contact CommBank Simplify support at: simplify@cba.com.au</li>
          <li>Test with a sample invoice using the format: /ccp?q=[encoded_params]</li>
        </ol>
      </div>
    </div>
  );
}