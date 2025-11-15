import React from 'react';

type Direction = 'top-to-bottom' | 'bottom-to-top';

interface GradientButtonsProps {
  opacity: number;
  onCreateGradient: (color: 'black' | 'white', direction: Direction, opacity: number) => void;
}

const GradientButtons: React.FC<GradientButtonsProps> = ({ opacity, onCreateGradient }) => {
  const handleBlackTopToBottom = () => {
    onCreateGradient('black', 'top-to-bottom', opacity);
  };

  const handleBlackBottomToTop = () => {
    onCreateGradient('black', 'bottom-to-top', opacity);
  };

  const handleWhiteTopToBottom = () => {
    onCreateGradient('white', 'top-to-bottom', opacity);
  };

  const handleWhiteBottomToTop = () => {
    onCreateGradient('white', 'bottom-to-top', opacity);
  };

  return (
    <div className="gradient-buttons">
      <button
        className="button button-primary gradient-button"
        onClick={handleBlackTopToBottom}
      >
        <span className="button-icon">⬛</span>
        <span>Black ↓</span>
      </button>
      <button
        className="button button-primary gradient-button"
        onClick={handleBlackBottomToTop}
      >
        <span className="button-icon">⬛</span>
        <span>Black ↑</span>
      </button>
      <button
        className="button button-secondary gradient-button"
        onClick={handleWhiteTopToBottom}
      >
        <span className="button-icon">⬜</span>
        <span>White ↓</span>
      </button>
      <button
        className="button button-secondary gradient-button"
        onClick={handleWhiteBottomToTop}
      >
        <span className="button-icon">⬜</span>
        <span>White ↑</span>
      </button>
    </div>
  );
};

export default GradientButtons;
