import React from 'react';
import SearchBar from '@/Components/Header/SearchBar';
import LanguageSelector from '@/Components/Header/LanguageSelector';
import UserDropdown from '@/Components/Header/UserDropdown';

export default function Header({ user }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white shadow-sm position-sticky top-0" 
            style={{ 
                height: '64px',
                zIndex: 999,
                borderBottom: '1px solid #e2e8f0'
            }}>
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center w-100">
                    <div className="d-flex align-items-center me-3">
                        <h6 className="mb-0 d-none d-md-block" style={{ 
                            fontFamily: 'Tajawal-Bold', 
                            color: '#002847', 
                            fontSize: '20px' 
                        }}>
                            Turbo Pay
                        </h6>
                    </div>

                    <SearchBar />
                    
                    <div className="d-flex align-items-center ms-auto">
                        <div className="vr mx-2" style={{ height: '24px' }}></div>
                        
                        <LanguageSelector />
                        
                        <div className="vr mx-2" style={{ height: '24px' }}></div>
                        
                        <UserDropdown user={user} />
                    </div>
                </div>
            </div>
        </nav>
    );
}