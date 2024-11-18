import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import performanceLineChartStyles from '../styles/performanceLineChartStyles';

const PerformanceLineChart = ({ data, title, description, metrics }) => {
    const [selectedMetric, setSelectedMetric] = useState(metrics[0]);

    return (
        <div style={performanceLineChartStyles.container}>
            {/* Title and Description */}
            <div style={performanceLineChartStyles.header}>
                <div>
                    <h2 style={performanceLineChartStyles.title}>{title}</h2>
                    <p style={performanceLineChartStyles.description}>{description}</p>
                </div>

                {/* Metrics Dropdown */}
                <select
                    style={performanceLineChartStyles.dropdown}
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                >
                    {metrics.map((metric, index) => (
                        <option key={index} value={metric}>
                            {metric}
                        </option>
                    ))}
                </select>
            </div>

            {/* Chart */}
            <div style={performanceLineChartStyles.chartContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey={selectedMetric}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default PerformanceLineChart;
