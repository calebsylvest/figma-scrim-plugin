import React, { useEffect } from 'react';
import './styles.css';

const App: React.FC = () => {
  useEffect(() => {
    // Notify plugin code that UI is ready
    parent.postMessage({ pluginMessage: { type: 'ready' } }, '*');
  }, []);

  const handleCreateScrim = () => {
    parent.postMessage({ pluginMessage: { type: 'create-scrim' } }, '*');
  };

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <div className="container">
      <h1 className="heading">Scrim & Overlay Generator</h1>

      <section className="section">
        <h2 className="section-title">Preset Scrims</h2>
        <p className="placeholder-text">
          Preset buttons will be implemented in Phase 2
        </p>
        <div className="button-group">
          <button className="button button-primary" onClick={handleCreateScrim}>
            Test: Create Scrim
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Opacity Control</h2>
        <p className="placeholder-text">
          Opacity controls will be implemented in Phase 2
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Gradient Scrims</h2>
        <p className="placeholder-text">
          Gradient options will be implemented in Phase 3
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Color from Image</h2>
        <p className="placeholder-text">
          Color extraction will be implemented in Phase 4
        </p>
      </section>

      <div className="footer">
        <button className="button button-secondary" onClick={handleCancel}>
          Close
        </button>
      </div>
    </div>
  );
};

export default App;
