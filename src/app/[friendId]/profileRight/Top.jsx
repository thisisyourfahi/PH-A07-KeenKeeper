import React from 'react';

const Top = ({ friend }) => {
    return (
        <div className='space-y-8'>
            {/* top portion */}
            <div className='grid grid-cols-3 gap-8 text-center'>
                <div className='border border-neutral-200 py-6 rounded-md'>
                    <h3 className='text-2xl font-bold text-[#244d3f]'>{friend.days_since_contact}</h3>
                    <p className='text-neutral-500'>Days Since Contact</p>
                </div>
                <div className='border border-neutral-200 py-6 rounded-md'>
                    <h3 className='text-2xl font-bold text-[#244d3f]'>{friend.goal}</h3>
                    <p className='text-neutral-500'>Goal(Days)</p>
                </div>
                <div className='border border-neutral-200 py-6 rounded-md'>
                    <h3 className='text-2xl font-bold text-[#244d3f]'>{friend.goal}</h3>
                    <p className='text-neutral-500'>Goal</p>
                </div>
            </div>

            {/* middle portion */}
            <div className='flex justify-between border border-neutral-200 rounded-md p-4'>
                <div className='space-y-2'>
                    <h4 className='text-xl text-[#244d3f] font-bold'>Relationship Goal</h4>
                    <p className='text-neutral-500'>Connect every <span className='font-bold'>{friend.goal}</span></p>
                </div>
                <div>
                    <button className='btn btn-sm'>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Top;