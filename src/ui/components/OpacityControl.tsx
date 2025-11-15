import React from 'react';

interface OpacityControlProps {
  opacity: number;
  onChange: (value: number) => void;
}

const OpacityControl: React.FC<OpacityControlProps> = ({ opacity, onChange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    // Validate value is within 0-100 range
    if (!isNaN(value) && value >= 0 && value <= 100) {
      onChange(value);
    } else if (e.target.value === '') {
      // Allow empty input temporarily
      onChange(0);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Ensure valid value on blur
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    onChange(value);
  };

  return (
    <div className="opacity-control">
      <label className="opacity-label">Opacity: {opacity}%</label>
      <div className="opacity-inputs">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={opacity}
          onChange={handleSliderChange}
          className="opacity-slider"
        />
        <input
          type="number"
          min="0"
          max="100"
          value={opacity}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="opacity-input"
        />
      </div>
    </div>
  );
};

export default OpacityControl;
