import React, { useState } from 'react';
import SidebarAndNavbar from '../components/SidebarAndNavbar';
import MetricsDropdown from '../components/MetricsDropdown';
import PerformanceLineChart from '../components/PerformanceLineChart';
import HeatMapTable from '../components/HeatMapTable';

const Dashboard = () => {
    const [selectedMetrics, setSelectedMetrics] = useState([]);
    const [lineChartData, setLineChartData] = useState([
        { name: 'Jan', value: 40 },
        { name: 'Feb', value: 30 },
        { name: 'Mar', value: 20 },
        { name: 'Apr', value: 27 },
    ]);
    const [heatMapData, setHeatMapData] = useState({
        columns: ['Metric 1', 'Metric 2', 'Metric 3'],
        rows: [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90],
        ],
    });

    return (
        <SidebarAndNavbar>
            <h1>Dashboard</h1>
            <MetricsDropdown
                metrics={['Metric 1', 'Metric 2', 'Metric 3']}
                onSelectionChange={setSelectedMetrics}
            />
            <PerformanceLineChart data={lineChartData} />
            <HeatMapTable data={heatMapData} />
        </SidebarAndNavbar>
    );
};

export default Dashboard;
