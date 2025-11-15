import React from 'react';

interface PresetButtonsProps {
  opacity: number;
  onCreateScrim: (color: 'black' | 'white', opacity: number) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({ opacity, onCreateScrim }) => {
  const handleBlackClick = () => {
    onCreateScrim('black', opacity);
  };

  const handleWhiteClick = () => {
    onCreateScrim('white', opacity);
  };

  return (
    <div className="preset-buttons">
      <button
        className="button button-primary preset-button"
        onClick={handleBlackClick}
      >
        <span className="button-icon">⬛</span>
        Black Scrim
      </button>
      <button
        className="button button-secondary preset-button"
        onClick={handleWhiteClick}
      >
        <span className="button-icon">⬜</span>
        White Scrim
      </button>
    </div>
  );
};

export default PresetButtons;
