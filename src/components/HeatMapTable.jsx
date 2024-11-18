import React from 'react';
import heatMapTableStyles from '../styles/heatMapTableStyles';

const getCellColor = (value) => {
    if (value > 400) return '#ff4d4d';
    if (value > 300) return '#ffcc00';
    if (value > 200) return '#66cc66';
    return '#cccccc';
};

const HeatMapTable = ({ data, title, description }) => {
    return (
        <div style={heatMapTableStyles.container}>
            <div style={heatMapTableStyles.header}>
                <div style={heatMapTableStyles.title}>{title}</div>
                <div style={heatMapTableStyles.description}>{description}</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={heatMapTableStyles.table}>
                    <thead>
                        <tr>
                            {data.columns.map((column, index) => (
                                <th
                                    key={index}
                                    style={heatMapTableStyles.th}
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td
                                        key={colIndex}
                                        style={{
                                            ...heatMapTableStyles.td,
                                            backgroundColor: getCellColor(cell),
                                        }}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HeatMapTable;
