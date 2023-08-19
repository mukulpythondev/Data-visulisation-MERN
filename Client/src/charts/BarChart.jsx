import React from 'react'
import { Bar } from 'react-chartjs-2';

import Chart from 'chart.js/auto';

const BarChart = ({serverData}) => {

    let uniqueSectors = [];
    
    //using forEach because it doesn't return any array and we are adding unique sector names to an array
    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    // counting the total number of projects in each sector uniquely
    const sectorCount = uniqueSectors.map((item) => {
        return {
            sector: item,
            count: serverData.filter((i) => i.sector === item).length
        }
    })
    

    return (
    

        <div  style={{ height: '50vh', width: '60vw' }} >
            
            <Bar
                data={{
                    labels: uniqueSectors.map((e) => e),
                    datasets: [
                        {
                            label: 'Total Projects',
                            data: sectorCount.map((e) => e.count),
                            backgroundColor: '#a1340d',
                            borderColor: 'black',
                            borderWidth: 1,
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
               
            />
        </div>
    );
}

export default BarChart