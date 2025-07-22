import React from 'react';
import { Link } from '@inertiajs/react';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function LanguageSelector() {
    return (
        <div className="dropdown">
            <button className="btn btn-link text-decoration-none d-flex align-items-center p-2" 
                style={{ 
                    fontFamily: 'Tajawal-Regular', 
                    color: '#333333', 
                    fontSize: '16px' 
                }}>
                <span className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2" 
                    style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                    EN
                </span>
                English
                <KeyboardArrowDown fontSize="small" />
            </button>
            
            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                    <Link className="dropdown-item" href="#">
                        <span className="me-2">🇺🇸</span> English
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" href="#">
                        <span className="me-2">🇸🇦</span> العربية
                    </Link>
                </li>
            </ul>
        </div>
    );
}