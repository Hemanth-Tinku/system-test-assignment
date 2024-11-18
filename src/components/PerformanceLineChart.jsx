import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import performanceLineChartStyles from '../styles/performanceLineChartStyles';

const PerformanceLineChart = ({ data, title, description, metrics, selectedMetric, setSelectedMetric }) => {
    return (
        <div style={performanceLineChartStyles.container}>
            <div style={performanceLineChartStyles.header}>
                <div>
                    <h3 style={performanceLineChartStyles.title}>{title}</h3>
                    <p style={performanceLineChartStyles.description}>{description}</p>
                </div>
                <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '5px', marginBottom: '1rem' }}
                >
                    {metrics.map((metric) => (
                        <option key={metric} value={metric}>
                            {metric}
                        </option>
                    ))}
                </select>
            </div>
            <div style={performanceLineChartStyles.chartContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PerformanceLineChart;
