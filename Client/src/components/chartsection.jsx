import React from 'react';
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const ChartsSection = ({ serverData }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,backgroundColor:'white'}}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                <div className="chart-container">
                    <h3>Bar Chart - Number of Projects in Each Sector</h3>
                    <BarChart serverData={serverData} />
                </div>
                <div className="chart-container">
                    <h3>Polar Area Chart - Data Distribution</h3>
                    <PolarChart serverData={serverData} />
                </div>
                <div className="chart-container">
                    <h3>Line Chart - Projects per Pestle</h3>
                    <LineChart serverData={serverData} />
                </div>
                <div className="chart-container">
                    <h3>Radar Chart - Projects per Pestle</h3>
                    <RadarChart serverData={serverData} />
                </div>
                <div className="chart-container">
                    <h3>Doughnut Chart - Data Distribution</h3>
                    <DoughnutChart serverData={serverData} />
                </div>
                <div className="chart-container">
                    <h3>Pie Chart - Data Distribution</h3>
                    <PieChart serverData={serverData} />
                </div>
            </div>
        </div>
    );
};

export default ChartsSection;
