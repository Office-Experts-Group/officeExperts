// Create this as app/test-invoice/page.js
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function TestInvoiceGenerator() {
  const [testParams, setTestParams] = useState({
    amount: "50.00",
    invoiceNumber: "TEST-001",
    customerName: "Test Customer",
    customerEmail: "test@example.com",
    surchargeAmount: "1.50"
  });

  const [encodedUrl, setEncodedUrl] = useState("");

  // This should match your actual encoding function from paymentUtils
  const encodeUrlParams = (params) => {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    
    // Base64 encode the query string
    return btoa(queryString);
  };

  const generateTestUrl = () => {
    const paramsForEncoding = {
      A: Math.round(parseFloat(testParams.amount) * 100), // Convert to cents
      I: testParams.invoiceNumber,
      C: testParams.customerName,
      E: testParams.customerEmail,
      S: testParams.surchargeAmount
    };

    const encoded = encodeUrlParams(paramsForEncoding);
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/ccp?q=${encoded}`;
    
    setEncodedUrl(fullUrl);
  };

  const testUrls = [
    {
      name: "Basic Test",
      params: { A: 5000, I: "TEST-001", C: "Test Customer", E: "test@example.com" }
    },
    {
      name: "With Surcharge",
      params: { A: 5000, I: "TEST-002", C: "Test Customer", E: "test@example.com", S: "1.50" }
    },
    {
      name: "Large Amount",
      params: { A: 100000, I: "TEST-003", C: "Big Customer", E: "big@example.com", S: "30.00" }
    }
  ];

  const generateQuickTestUrl = (params) => {
    const encoded = encodeUrlParams(params);
    return `${window.location.origin}/ccp?q=${encoded}`;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px' }}>
      <h1>Test Invoice URL Generator</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
        <h3>Generate Custom Test URL:</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Amount ($):</label>
            <input
              type="number"
              step="0.01"
              value={testParams.amount}
              onChange={(e) => setTestParams({...testParams, amount: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Invoice Number:</label>
            <input
              type="text"
              value={testParams.invoiceNumber}
              onChange={(e) => setTestParams({...testParams, invoiceNumber: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Customer Name:</label>
            <input
              type="text"
              value={testParams.customerName}
              onChange={(e) => setTestParams({...testParams, customerName: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Customer Email:</label>
            <input
              type="email"
              value={testParams.customerEmail}
              onChange={(e) => setTestParams({...testParams, customerEmail: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
          
          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Surcharge Amount ($):</label>
            <input
              type="number"
              step="0.01"
              value={testParams.surchargeAmount}
              onChange={(e) => setTestParams({...testParams, surchargeAmount: e.target.value})}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
            />
          </div>
        </div>
        
        <button
          onClick={generateTestUrl}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#046999', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginBottom: '15px'
          }}
        >
          Generate Test URL
        </button>
        
        {encodedUrl && (
          <div style={{ marginTop: '15px' }}>
            <h4>Generated URL:</h4>
            <p style={{ 
              wordBreak: 'break-all', 
              backgroundColor: '#e8e8e8', 
              padding: '10px', 
              borderRadius: '3px',
              fontSize: '12px'
            }}>
              {encodedUrl}
            </p>
            <Link 
              href={encodedUrl}
              style={{ 
                display: 'inline-block',
                padding: '8px 16px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '3px',
                marginTop: '10px'
              }}
            >
              Test This URL
            </Link>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Quick Test URLs:</h3>
        {testUrls.map((test, index) => (
          <div key={index} style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
            <h4>{test.name}</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
              Amount: ${(test.params.A / 100).toFixed(2)} | Invoice: {test.params.I} | 
              Customer: {test.params.C} | Email: {test.params.E}
              {test.params.S && ` | Surcharge: $${test.params.S}`}
            </p>
            <Link
              href={typeof window !== 'undefined' ? generateQuickTestUrl(test.params) : '#'}
              style={{ 
                display: 'inline-block',
                padding: '8px 16px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '3px'
              }}
            >
              Test {test.name}
            </Link>
          </div>
        ))}
      </div>

      <div style={{ padding: '20px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h3>⚠️ Important Notes:</h3>
        <ul>
          <li><strong>Domain Registration:</strong> Ensure your domain is registered with CommBank Simplify</li>
          <li><strong>HTTPS Required:</strong> Payment forms only work on HTTPS sites</li>
          <li><strong>API Keys:</strong> Verify your API keys are active and correct</li>
          <li><strong>No New Customers:</strong> CommBank Simplify is no longer accepting new merchants</li>
        </ul>
      </div>
    </div>
  );
}