import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

// استيراد المكونات مع معالجة الأخطاء
const MetricCards = React.lazy(() => import('@/Components/Dashboard/MetricCards'));
const TipsChart = React.lazy(() => import('@/Components/Dashboard/TipsChart'));
const TopEmployees = React.lazy(() => import('@/Components/Dashboard/TopEmployees'));
const RecentTipsTable = React.lazy(() => import('@/Components/Dashboard/RecentTipsTable'));

export default function Dashboard({ metrics, topEmployees, recentTips, chartData }) {
    return (
        <AppLayout title="Dashboard">
            <DashboardHeader />
            
            <div className="row g-4 mb-4" style={{ minHeight: '350px' }}>
                <div className="col-md-6 h-100">
                    <React.Suspense fallback={<div>Loading metrics...</div>}>
                        <MetricCards metrics={metrics} />
                    </React.Suspense>
                </div>
                
                <div className="col-md-6 h-100">
                    <React.Suspense fallback={<div>Loading chart...</div>}>
                        <TipsChart chartData={chartData} />
                    </React.Suspense>
                </div>
            </div>
            
            <div className="row g-4" style={{ minHeight: '400px' }}>
                <div className="col-md-4 h-100">
                    <React.Suspense fallback={<div>Loading top employees...</div>}>
                        <TopEmployees employees={topEmployees} />
                    </React.Suspense>
                </div>
                
                <div className="col-md-8 h-100">
                    <React.Suspense fallback={<div>Loading recent tips...</div>}>
                        <RecentTipsTable tips={recentTips} />
                    </React.Suspense>
                </div>
            </div>
        </AppLayout>
    );
}

function DashboardHeader() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0" style={{ 
                fontFamily: 'Tajawal-Bold', 
                color: '#002847',
                fontSize: '20px'
            }}>
                DASHBOARD
            </h5>
            <div className="d-flex align-items-center">
                <span className="me-3" style={{ fontFamily: 'Tajawal-Regular', color: '#64748b' }}>
                    Today: {new Date().toLocaleDateString('en-GB')}
                </span>
                <button className="btn btn-primary" style={{ 
                    fontFamily: 'Tajawal-Medium',
                    backgroundColor: '#888af2',
                    borderColor: '#888af2',
                    borderRadius: '8px',
                    padding: '8px 16px'
                }}>
                    Generate Report
                </button>
            </div>
        </div>
    );
}