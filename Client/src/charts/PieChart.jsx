import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ serverData }) => {
    let uniquePestle = [];
    
    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    });
    
    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length
        };
    });

    const backgroundColors = pestleCount.map((_, index) => {
        const hue = (index * 60) % 360; 
        return `hsl(${hue}, 70%, 60%)`; 
    });

    return (
        <div style={{ height: '50vh', width: '60vw' }}>
            <Pie
                data={{
                    labels: pestleCount.map(i => i.pestle),
                    datasets: [
                        {
                            label: "Projects",
                            data: pestleCount.map(i => i.count),
                            borderWidth: 1,
                            hoverOffset: 5,
                            backgroundColor: backgroundColors,
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
};

export default PieChart;
