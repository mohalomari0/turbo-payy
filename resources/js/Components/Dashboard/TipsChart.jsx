import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function TipsChart({ chartData }) {
    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Tips',
                data: Object.values(chartData),
                backgroundColor: '#888af2',
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    display: true,
                    drawBorder: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `${context.parsed.y} AED`;
                    }
                }
            },
        },
    };

    return (
        <div className="card shadow-sm h-100" style={{ 
            borderRadius: '12px',
            border: 'none'
        }}>
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center py-3 px-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '16px'
                }}>
                    LAST 10 DAYS OF TIPS
                </h5>
                <div className="dropdown">
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle" 
                        data-bs-toggle="dropdown"
                        style={{ 
                            fontFamily: 'Tajawal-Regular',
                            fontSize: '14px',
                            borderColor: '#e2e8f0'
                        }}>
                        This Month
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                        <li><a className="dropdown-item" href="#">This Week</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="card-body p-4">
                <div style={{ height: 'calc(100% - 40px)', width: '100%' }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
}