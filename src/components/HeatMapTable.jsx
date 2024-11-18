import React from 'react';

const getColor = (value) => {
  const intensity = Math.min(255, Math.max(0, 255 - value * 25));
  return `rgb(255, ${intensity}, ${intensity})`;
};

const HeatMapTable = ({ data }) => {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          {data.columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} style={{ backgroundColor: getColor(cell), color: '#000' }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeatMapTable;
