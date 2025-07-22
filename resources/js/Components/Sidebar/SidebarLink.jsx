import React from 'react';
import { Link } from '@inertiajs/react';

export default function SidebarLink({ href, active = false, icon, children }) {
    return (
        <Link 
            href={href} 
            className={`nav-link d-flex align-items-center ps-3 py-3 my-1 ${active ? 'active' : ''}`}
            style={{ 
                borderLeft: active ? '4px solid #888af2' : 'none', 
                backgroundColor: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                borderRadius: '4px'
            }}
        >
            {React.cloneElement(icon, { 
                style: { 
                    color: active ? 'white' : 'rgba(255, 255, 255, 0.7)', 
                    minWidth: '24px' 
                } 
            })}
            <span className="ms-3" style={{ 
                fontFamily: active ? 'Tajawal-Medium' : 'Tajawal-Regular', 
                color: active ? 'white' : 'rgba(255, 255, 255, 0.7)', 
                fontSize: '16px' 
            }}>
                {children}
            </span>
        </Link>
    );
}