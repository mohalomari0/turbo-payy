import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function TipsIndex({ tips }) {
    return (
        <AppLayout title="Tips">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '20px'
                }}>
                    TIPS HISTORY
                </h5>
                <div className="d-flex gap-2">
                    <Link 
                        href={route('tips.create')}
                        className="btn btn-primary" 
                        style={{ 
                            fontFamily: 'Tajawal-Medium',
                            backgroundColor: '#888af2',
                            borderColor: '#888af2',
                            borderRadius: '8px',
                            padding: '8px 16px'
                        }}
                    >
                        Add New Tip
                    </Link>
                    <button className="btn btn-outline-primary" style={{ 
                        fontFamily: 'Tajawal-Medium',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}>
                        Export
                    </button>
                </div>
            </div>

            <div className="card shadow-sm" style={{ 
                borderRadius: '12px',
                border: 'none'
            }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
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
                                    }}>AMOUNT</th>
                                    <th style={{ 
                                        fontFamily: 'Tajawal-Medium', 
                                        color: '#64748b', 
                                        fontSize: '13px',
                                        padding: '12px 16px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>PAYMENT METHOD</th>
                                    <th style={{ 
                                        fontFamily: 'Tajawal-Medium', 
                                        color: '#64748b', 
                                        fontSize: '13px',
                                        padding: '12px 16px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tips.data.map(tip => (
                                    <tr key={tip.id}>
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
                                        }}>
                                            {new Date(tip.date).toLocaleDateString('en-GB')}
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Medium', 
                                            color: '#1e293b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            <Link href={route('employees.show', tip.employee.id)} className="text-decoration-none">
                                                {tip.employee.name}
                                            </Link>
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Bold', 
                                            color: '#10b981', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            {tip.amount} AED
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Regular', 
                                            color: '#64748b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            {tip.payment_method}
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Regular', 
                                            color: '#64748b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            <Link 
                                                href={route('tips.edit', tip.id)}
                                                className="btn btn-sm btn-outline-primary me-2"
                                            >
                                                Edit
                                            </Link>
                                            <button className="btn btn-sm btn-outline-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {tips.links && (
                        <div className="card-footer bg-white border-0 d-flex justify-content-center py-3">
                            <nav>
                                <ul className="pagination pagination-sm mb-0">
                                    {tips.links.map((link, index) => (
                                        <li key={index} className={`page-item ${link.active ? 'active' : ''} ${link.url === null ? 'disabled' : ''}`}>
                                            <Link 
                                                href={link.url || '#'} 
                                                className="page-link" 
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}