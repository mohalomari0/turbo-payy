import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link, useForm } from '@inertiajs/react';

export default function EmployeeForm({ employee = null }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: employee?.name || '',
        role: employee?.role || 'Barber',
        is_active: employee?.is_active || true,
    });

    const roles = ['Barber', 'Stylist', 'Senior Barber', 'Apprentice', 'Manager'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee) {
            put(route('employees.update', employee.id));
        } else {
            post(route('employees.store'));
        }
    };

    return (
        <AppLayout title={employee ? 'Edit Employee' : 'Create Employee'}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '20px'
                }}>
                    {employee ? 'EDIT EMPLOYEE' : 'ADD NEW EMPLOYEE'}
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

            <div className="card shadow-sm" style={{ 
                borderRadius: '12px',
                border: 'none'
            }}>
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="role" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Role
                            </label>
                            <select
                                className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                                id="role"
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            >
                                {roles.map(role => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                            {errors.role && (
                                <div className="invalid-feedback">
                                    {errors.role}
                                </div>
                            )}
                        </div>

                        <div className="mb-4 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="is_active"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="is_active" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Active Employee
                            </label>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={processing}
                                style={{ 
                                    fontFamily: 'Tajawal-Medium',
                                    backgroundColor: '#888af2',
                                    borderColor: '#888af2',
                                    borderRadius: '8px',
                                    padding: '8px 24px'
                                }}
                            >
                                {processing ? 'Saving...' : 'Save Employee'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}