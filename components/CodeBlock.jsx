'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/codeBlock.module.scss';

const CodeBlock = ({ code, language }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Import Prism dynamically only on the client side
    const loadPrism = async () => {
      // Dynamic imports for Prism and its dependencies
      await import('prismjs/themes/prism-tomorrow.css');
      const Prism = await import('prismjs');
      
      // Import required languages
      await import('prismjs/components/prism-core');
      await import('prismjs/components/prism-clike');
      await import('prismjs/components/prism-javascript');
      await import('prismjs/components/prism-markup'); // This includes HTML
      await import('prismjs/components/prism-css');
      
      // Import plugins
      await import('prismjs/plugins/line-numbers/prism-line-numbers');
      await import('prismjs/plugins/line-numbers/prism-line-numbers.css');
      await import('prismjs/plugins/toolbar/prism-toolbar');
      await import('prismjs/plugins/toolbar/prism-toolbar.css');
      await import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');
      
      // Highlight code after all imports are loaded
      Prism.default.highlightAll();
    };
    
    if (isMounted) {
      loadPrism();
    }
  }, [isMounted, code]);
  
  // Map some language names to their Prism equivalents
  const languageMap = {
    html: 'markup',
    xml: 'markup',
    javascript: 'javascript',
    js: 'javascript',
    css: 'css',
    // Add more mappings as needed
  };
  
  // Use mapped language or fallback to the original
  const prismLanguage = languageMap[language] || language;
  
  if (!isMounted) {
    return <div className="code-placeholder">Loading code...</div>;
  }
  
  return (
    <div className={styles.codeBlockContainer}>
      <div className={styles.codeHeader}>
        <span className={styles.languageBadge}>{language}</span>
      </div>
      <pre className={`line-numbers`}>
        <code className={`language-${prismLanguage}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;