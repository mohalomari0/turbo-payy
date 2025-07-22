import React from 'react';
import SidebarLink from '@/Components/Sidebar/SidebarLink';
import { 
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Payments as PaymentsIcon
} from '@mui/icons-material';

export default function Sidebar() {
    return (
        <div className="position-fixed" style={{ 
            width: '214px', 
            height: '100vh',
            zIndex: 1000,
            background: 'linear-gradient(180deg, #002847 0%, #00182a 100%)'
        }}>
            <div className="d-flex flex-column h-100 p-3">
                <div className="mb-4 pt-3">
                    <h6 className="mb-0" style={{ 
                        fontFamily: 'Tajawal-Bold', 
                        color: 'white', 
                        fontSize: '20px',
                        paddingLeft: '8px'
                    }}>
                        Turbo Pay
                    </h6>
                </div>

                <hr className="my-2" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <div className="nav flex-column flex-grow-1">
                    <SidebarLink 
                        href="#" 
                        active 
                        icon={<DashboardIcon />}
                    >
                        Dashboard
                    </SidebarLink>
                    
                    <SidebarLink 
                        href="#" 
                        icon={<PeopleIcon />}
                    >
                        Employees
                    </SidebarLink>
                    
                    <SidebarLink 
                        href="#" 
                        icon={<PaymentsIcon />}
                    >
                        Tips
                    </SidebarLink>
                </div>
            </div>
        </div>
    );
}