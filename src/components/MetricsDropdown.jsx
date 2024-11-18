import React, { useState } from 'react';

const MetricsDropdown = ({ metrics, onSelectionChange }) => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    const updatedSelection = selectedMetrics.includes(value)
      ? selectedMetrics.filter((metric) => metric !== value)
      : [...selectedMetrics, value];

    setSelectedMetrics(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  return (
    <div>
      <label htmlFor="metrics">Select Metrics:</label>
      <select
        id="metrics"
        multiple
        value={selectedMetrics}
        onChange={handleChange}
        style={{ width: '200px', height: '100px' }}
      >
        {metrics.map((metric) => (
          <option key={metric} value={metric}>
            {metric}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MetricsDropdown;
