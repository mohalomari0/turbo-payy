import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Link, useForm } from '@inertiajs/react';

export default function TipForm({ tip = null, employees }) {
    const { data, setData, post, put, processing, errors } = useForm({
        employee_id: tip?.employee_id || '',
        amount: tip?.amount || '',
        payment_method: tip?.payment_method || 'card',
        date: tip?.date ? new Date(tip.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    });

    const paymentMethods = [
        { value: 'card', label: 'Credit/Debit Card' },
        { value: 'google_pay', label: 'Google Pay' },
        { value: 'apple_pay', label: 'Apple Pay' },
        { value: 'cash', label: 'Cash' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tip) {
            put(route('tips.update', tip.id));
        } else {
            post(route('tips.store'));
        }
    };

    return (
        <AppLayout title={tip ? 'Edit Tip' : 'Add New Tip'}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="mb-0" style={{ 
                    fontFamily: 'Tajawal-Bold', 
                    color: '#002847',
                    fontSize: '20px'
                }}>
                    {tip ? 'EDIT TIP RECORD' : 'ADD NEW TIP'}
                </h5>
                <Link 
                    href={route('tips.index')}
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
                            <label htmlFor="employee_id" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Employee
                            </label>
                            <select
                                className={`form-select ${errors.employee_id ? 'is-invalid' : ''}`}
                                id="employee_id"
                                value={data.employee_id}
                                onChange={(e) => setData('employee_id', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            >
                                <option value="">Select Employee</option>
                                {employees.map(employee => (
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name} ({employee.role})
                                    </option>
                                ))}
                            </select>
                            {errors.employee_id && (
                                <div className="invalid-feedback">
                                    {errors.employee_id}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Amount (AED)
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                id="amount"
                                value={data.amount}
                                onChange={(e) => setData('amount', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            />
                            {errors.amount && (
                                <div className="invalid-feedback">
                                    {errors.amount}
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="payment_method" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Payment Method
                            </label>
                            <select
                                className={`form-select ${errors.payment_method ? 'is-invalid' : ''}`}
                                id="payment_method"
                                value={data.payment_method}
                                onChange={(e) => setData('payment_method', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            >
                                {paymentMethods.map(method => (
                                    <option key={method.value} value={method.value}>
                                        {method.label}
                                    </option>
                                ))}
                            </select>
                            {errors.payment_method && (
                                <div className="invalid-feedback">
                                    {errors.payment_method}
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="date" className="form-label" style={{
                                fontFamily: 'Tajawal-Medium',
                                color: '#1e293b',
                                fontSize: '14px'
                            }}>
                                Date
                            </label>
                            <input
                                type="date"
                                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                id="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                                style={{
                                    borderRadius: '8px',
                                    padding: '10px 12px'
                                }}
                            />
                            {errors.date && (
                                <div className="invalid-feedback">
                                    {errors.date}
                                </div>
                            )}
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
                                {processing ? 'Saving...' : 'Save Tip Record'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}