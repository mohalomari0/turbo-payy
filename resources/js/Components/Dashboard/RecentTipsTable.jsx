import React from 'react';
import { Link } from '@inertiajs/react';

export default function RecentTipsTable({ tips }) {
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
                    RECENT TIPS
                </h5>
                <button className="btn btn-sm btn-outline-primary" style={{ 
                    fontFamily: 'Tajawal-Medium',
                    borderRadius: '8px',
                    borderColor: '#888af2',
                    color: '#888af2',
                    padding: '4px 12px'
                }}>
                    Export
                </button>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive h-100">
                    <table className="table table-hover mb-0">
                        <thead style={{ backgroundColor: '#f8fafc' }}>
                            <tr>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>ID</th>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>DATE</th>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>EMPLOYEE</th>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>ROLE</th>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>AMOUNT</th>
                                <th style={{ 
                                    fontFamily: 'Tajawal-Medium', 
                                    color: '#64748b', 
                                    fontSize: '13px',
                                    padding: '12px 16px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>PAYMENT METHOD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tips.map(tip => (
                                <tr key={tip.id} style={{ cursor: 'pointer' }}>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Medium', 
                                        color: '#1e293b', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>{tip.id}</td>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Regular', 
                                        color: '#64748b', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>{tip.date}</td>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Medium', 
                                        color: '#1e293b', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>{tip.employee}</td>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Regular', 
                                        color: '#64748b', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>
                                        <span className="badge" style={{ 
                                            backgroundColor: '#eef2ff',
                                            color: '#888af2',
                                            fontFamily: 'Tajawal-Medium',
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            borderRadius: '4px'
                                        }}>
                                            {tip.role}
                                        </span>
                                    </td>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Bold', 
                                        color: '#10b981', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>{tip.amount}</td>
                                    <td style={{ 
                                        fontFamily: 'Tajawal-Regular', 
                                        color: '#64748b', 
                                        fontSize: '14px',
                                        padding: '12px 16px'
                                    }}>
                                        <div className="d-flex align-items-center justify-content-center">
                                            {tip.paymentMethod}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}