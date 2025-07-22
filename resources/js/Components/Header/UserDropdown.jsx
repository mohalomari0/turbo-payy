import React from 'react';
import { Link } from '@inertiajs/react';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function UserDropdown({ user }) {
    return (
        <div className="dropdown">
            <button className="btn btn-outline-dark d-flex align-items-center p-2" 
                style={{ 
                    fontFamily: 'Tajawal-Regular', 
                    fontSize: '16px',
                    borderRadius: '7px',
                    borderWidth: '1px'
                }}>
                <span className="rounded-circle bg-secondary d-flex justify-content-center align-items-center me-2" 
                    style={{ width: '24px', height: '24px', fontSize: '10px' }}>
                    {user?.name?.charAt(0) || 'U'}
                </span>
                {user?.name || 'User'}
                <KeyboardArrowDown fontSize="small" />
            </button>
            
            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                    <Link className="dropdown-item" href={route('profile.edit')}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" href={route('logout')} method="post" as="button">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}