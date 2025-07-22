import React from 'react';

export default function MetricCards({ metrics }) {
    const metricCards = [
        { 
            title: "TODAY'S TIPS", 
            value: metrics.todayTips, 
            unit: 'TIPS', 
            color: '#63cfe5' 
        },
        { 
            title: 'TOTAL TIPS', 
            value: metrics.totalTipsAmount, 
            unit: 'AED', 
            color: '#888af2' 
        },
        { 
            title: 'ACTIVE EMPLOYEES', 
            value: metrics.activeEmployees, 
            unit: 'EMPLOYEES', 
            color: '#d88d16' 
        },
        { 
            title: 'RECENT TIPS', 
            value: metrics.recentTipsCount, 
            unit: 'TIPS', 
            color: '#39a8ff' 
        },
    ];

    return (
        <div className="row g-3 h-100">
            {metricCards.map((card, index) => (
                <div className="col-sm-6" key={index}>
                    <div className="card h-100 shadow-sm" style={{ 
                        borderRadius: '12px',
                        border: 'none',
                        borderTop: `4px solid ${card.color}`
                    }}>
                        <div className="card-body d-flex flex-column p-4">
                            <h6 className="card-title mb-3" style={{ 
                                color: '#64748b', 
                                fontFamily: 'Tajawal-Medium',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {card.title}
                            </h6>
                            <div className="mt-auto d-flex justify-content-between align-items-end">
                                <h2 className="mb-0" style={{ 
                                    color: '#1e293b', 
                                    fontFamily: 'Tajawal-Bold',
                                    fontSize: '24px'
                                }}>
                                    {card.value}
                                </h2>
                                <small className="ms-1" style={{ 
                                    fontSize: '14px', 
                                    color: card.color,
                                    fontFamily: 'Tajawal-Medium'
                                }}>
                                    {card.unit}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}