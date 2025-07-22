import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';

export default function SearchBar() {
    return (
        <div className="input-group rounded-pill" style={{ width: '320px', backgroundColor: '#f8f9fa' }}>
            <span className="input-group-text bg-transparent border-0">
                <SearchIcon style={{ color: '#94a3b8' }} />
            </span>
            <input 
                type="text" 
                className="form-control bg-transparent border-0" 
                placeholder="Search..." 
                style={{ 
                    fontFamily: 'Tajawal-Regular',
                    fontSize: '14px'
                }}
            />
        </div>
    );
}