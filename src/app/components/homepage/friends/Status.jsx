import React from 'react';

const Status = ({status}) => {
    const statusStyle = {
        overdue: 'bg-[#EF4444]',
        'on-track': 'bg-[#244D3F]',
        'almost due': 'bg-[#EFAD44]'
    }
    return (
        <div className={`badge ${statusStyle[status]} text-white rounded-full`}>
            {status.toUpperCase()}
        </div>
    );
};

export default Status;