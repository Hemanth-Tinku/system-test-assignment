import React, { useState, useEffect } from 'react';
import PerformanceLineChart from '../components/PerformanceLineChart.jsx';
import SidebarAndNavbar from '../components/SidebarAndNavbar.jsx';
import HeatMapTable from '../components/HeatMapTable.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); 

    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('isAuthenticated');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
    const [selectedMetric, setSelectedMetric] = useState('Metric-A');
    const [lineChartData, setLineChartData] = useState([]);
    const [heatMapData] = useState({
        columns: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4', 'Metric 5'],
        rows: [
            [120, 300, 500, 100, 60],
            [90, 150, 200, 400, 300],
            [220, 280, 350, 180, 90],
            [350, 100, 150, 200, 500],
            [400, 350, 120, 200, 450],
            [280, 180, 250, 350, 300],
            [100, 90, 70, 60, 200],
            [300, 250, 400, 500, 350],
        ],
    });

    const metricsData = {
        'Metric-A': [
            { name: 'Jan', value: 120 },
            { name: 'Feb', value: 150 },
            { name: 'Mar', value: 100 },
            { name: 'Apr', value: 175 },
            { name: 'May', value: 220 },
            { name: 'Jun', value: 180 },
            { name: 'Jul', value: 140 },
            { name: 'Aug', value: 160 },
            { name: 'Sep', value: 210 },
            { name: 'Oct', value: 250 },
            { name: 'Nov', value: 280 },
            { name: 'Dec', value: 300 },
        ],
        'Metric-B': [
            { name: 'Jan', value: 200 },
            { name: 'Feb', value: 250 },
            { name: 'Mar', value: 180 },
            { name: 'Apr', value: 220 },
            { name: 'May', value: 270 },
            { name: 'Jun', value: 230 },
            { name: 'Jul', value: 190 },
            { name: 'Aug', value: 210 },
            { name: 'Sep', value: 260 },
            { name: 'Oct', value: 300 },
            { name: 'Nov', value: 320 },
            { name: 'Dec', value: 350 },
        ],
        'Metric-C': [
            { name: 'Jan', value: 80 },
            { name: 'Feb', value: 110 },
            { name: 'Mar', value: 60 },
            { name: 'Apr', value: 130 },
            { name: 'May', value: 170 },
            { name: 'Jun', value: 140 },
            { name: 'Jul', value: 110 },
            { name: 'Aug', value: 130 },
            { name: 'Sep', value: 150 },
            { name: 'Oct', value: 190 },
            { name: 'Nov', value: 210 },
            { name: 'Dec', value: 240 },
        ],
        'Metric-D': [
            { name: 'Jan', value: 300 },
            { name: 'Feb', value: 330 },
            { name: 'Mar', value: 290 },
            { name: 'Apr', value: 350 },
            { name: 'May', value: 380 },
            { name: 'Jun', value: 340 },
            { name: 'Jul', value: 310 },
            { name: 'Aug', value: 320 },
            { name: 'Sep', value: 360 },
            { name: 'Oct', value: 390 },
            { name: 'Nov', value: 420 },
            { name: 'Dec', value: 450 },
        ],
    };

    useEffect(() => {
        if (metricsData[selectedMetric]) {
            setLineChartData(metricsData[selectedMetric]);
        }
    }, [selectedMetric]);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1600px',
        gap: '2rem',
        padding: '2rem',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
    };

    return (
        <SidebarAndNavbar>
            <div style={containerStyle}>
                <PerformanceLineChart
                    data={lineChartData}
                    title="Performance Over Time"
                    description="This chart displays performance trends across different metrics over the year. Select a metric from the dropdown to see specific trends."
                    metrics={['Metric-A', 'Metric-B', 'Metric-C', 'Metric-D']}
                    selectedMetric={selectedMetric}
                    setSelectedMetric={setSelectedMetric}
                />

                <HeatMapTable
                    data={heatMapData}
                    title="Heat Map of Key Metrics"
                    description="This heat map highlights performance across various metrics. Brighter colors indicate higher values."
                />
            </div>
        </SidebarAndNavbar>
    );
};

export default Dashboard;
