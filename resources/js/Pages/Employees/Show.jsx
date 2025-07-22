import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function EmployeeShow({ employee }) {
    return (
        <AppLayout title="Employee Details">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '20px'
                }}>
                    EMPLOYEE DETAILS
                </h5>
                <Link 
                    href={route('employees.index')}
                    className="btn btn-outline-secondary" 
                    style={{ 
                        fontFamily: 'Tajawal-Medium',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}
                >
                    Back to List
                </Link>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4" style={{ 
                        borderRadius: '12px',
                        border: 'none'
                    }}>
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3" 
                                style={{ 
                                    width: '100px', 
                                    height: '100px',
                                    fontSize: '36px',
                                    backgroundColor: '#eef2ff',
                                    color: '#888af2'
                                }}>
                                {employee.name.charAt(0)}
                            </div>
                            
                            <h4 style={{
                                fontFamily: 'Tajawal-Bold',
                                color: '#1e293b',
                                marginBottom: '8px'
                            }}>
                                {employee.name}
                            </h4>
                            
                            <span className="badge mb-3" style={{ 
                                backgroundColor: '#eef2ff',
                                color: '#888af2',
                                fontFamily: 'Tajawal-Medium',
                                fontSize: '14px',
                                padding: '6px 12px',
                                borderRadius: '20px'
                            }}>
                                {employee.role}
                            </span>
                            
                            <div className={`badge d-block mb-4 ${employee.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                {employee.is_active ? 'Active' : 'Inactive'}
                            </div>
                            
                            <div className="d-flex justify-content-center gap-2">
                                <Link 
                                    href={route('employees.edit', employee.id)}
                                    className="btn btn-outline-primary"
                                    style={{ 
                                        fontFamily: 'Tajawal-Medium',
                                        borderRadius: '8px',
                                        padding: '8px 16px'
                                    }}
                                >
                                    Edit Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="card shadow-sm" style={{ 
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
                        </div>
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
                                            }}>DATE</th>
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
                                        {employee.tips && employee.tips.length > 0 ? (
                                            employee.tips.map(tip => (
                                                <tr key={tip.id}>
                                                    <td style={{ 
                                                        fontFamily: 'Tajawal-Regular', 
                                                        color: '#64748b', 
                                                        fontSize: '14px',
                                                        padding: '12px 16px'
                                                    }}>
                                                        {new Date(tip.date).toLocaleDateString('en-GB')}
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
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center py-4" style={{ 
                                                    fontFamily: 'Tajawal-Regular', 
                                                    color: '#64748b'
                                                }}>
                                                    No tips recorded yet
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}