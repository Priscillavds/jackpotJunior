import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.module.scss';

const LandscapeWrapper: React.FC = () => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  // Detect orientation changes
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLandscape ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        color: '#333',
        fontSize: '18px',
        padding: '20px',
      }}
    >
      <p>Draai uw apparaat naar liggende modus om deze applicatie te gebruiken.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<LandscapeWrapper />);

serviceWorkerRegistration.register();
