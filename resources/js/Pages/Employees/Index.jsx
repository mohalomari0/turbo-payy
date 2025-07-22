import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function EmployeesIndex({ employees }) {
    return (
        <AppLayout title="Employees">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '20px'
                }}>
                    EMPLOYEES
                </h5>
                <Link 
                    href={route('employees.create')}
                    className="btn btn-primary" 
                    style={{ 
                        fontFamily: 'Tajawal-Medium',
                        backgroundColor: '#888af2',
                        borderColor: '#888af2',
                        borderRadius: '8px',
                        padding: '8px 16px'
                    }}
                >
                    Add New Employee
                </Link>
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
                                    }}>NAME</th>
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
                                    }}>STATUS</th>
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
                                {employees.map(employee => (
                                    <tr key={employee.id} style={{ cursor: 'pointer' }}>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Medium', 
                                            color: '#1e293b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>{employee.id}</td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Medium', 
                                            color: '#1e293b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            <div className="d-flex align-items-center">
                                                <div className="rounded-circle d-flex justify-content-center align-items-center me-2" 
                                                    style={{ 
                                                        width: '36px', 
                                                        height: '36px',
                                                        fontSize: '14px',
                                                        backgroundColor: '#eef2ff',
                                                        color: '#888af2'
                                                    }}>
                                                    {employee.name.charAt(0)}
                                                </div>
                                                {employee.name}
                                            </div>
                                        </td>
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
                                                {employee.role}
                                            </span>
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Regular', 
                                            color: '#64748b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            <span className={`badge ${employee.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                                {employee.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td style={{ 
                                            fontFamily: 'Tajawal-Regular', 
                                            color: '#64748b', 
                                            fontSize: '14px',
                                            padding: '12px 16px'
                                        }}>
                                            <Link 
                                                href={route('employees.edit', employee.id)}
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
                </div>
            </div>
        </AppLayout>
    );
}