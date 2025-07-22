import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Header from '@/Components/Header/Header';

export default function AppLayout({ title, children, auth }) {
    return (
        <div className="d-flex" style={{ backgroundColor: '#f1f1f1', minHeight: '100vh' }}>
            <Head title={title} />
            
            <Sidebar />
            
            <div className="flex-grow-1" style={{ marginLeft: '214px' }}>
                <Header user={auth.user} />
                
                <main className="container-fluid py-4 px-4">
                    {children}
                </main>
            </div>
        </div>
    );
}