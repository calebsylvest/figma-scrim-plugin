import React, { useEffect, useState } from 'react';
import OpacityControl from './components/OpacityControl';
import PresetButtons from './components/PresetButtons';
import './styles.css';

const App: React.FC = () => {
  const [opacity, setOpacity] = useState(50);

  useEffect(() => {
    // Notify plugin code that UI is ready
    parent.postMessage({ pluginMessage: { type: 'ready' } }, '*');
  }, []);

  const handleOpacityChange = (value: number) => {
    setOpacity(value);
  };

  const handleCreateScrim = (color: 'black' | 'white', opacity: number) => {
    parent.postMessage({
      pluginMessage: {
        type: 'create-scrim',
        color,
        opacity
      }
    }, '*');
  };

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <div className="container">
      <h1 className="heading">Scrim & Overlay Generator</h1>

      <section className="section">
        <h2 className="section-title">Preset Scrims</h2>
        <PresetButtons opacity={opacity} onCreateScrim={handleCreateScrim} />
      </section>

      <section className="section">
        <h2 className="section-title">Opacity Control</h2>
        <OpacityControl opacity={opacity} onChange={handleOpacityChange} />
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
