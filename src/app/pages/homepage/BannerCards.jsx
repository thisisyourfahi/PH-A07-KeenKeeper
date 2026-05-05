import React from 'react';

const BannerCards = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-4 md:p-10 space-y-2 shadow-md rounded-md border border-neutral-300'>
                <h3 className='text-3xl text-[#244D3F] font-bold'>10</h3>
                <p className='text-neutral-500'>Total Friends</p>
            </div>
            <div className='p-4 md:10 space-y-2 shadow-md rounded-md border border-neutral-300'>
                <h3 className='text-3xl text-[#244D3F] font-bold'>3</h3>
                <p className='text-neutral-500'>On Track</p>
            </div>
            <div className='p-4 md:p-10 space-y-2 shadow-md rounded-md border border-neutral-300'>
                <h3 className='text-3xl text-[#244D3F] font-bold'>6</h3>
                <p className='text-neutral-500'>Need Attention</p>
            </div>
            <div className='p-4 md:p-10 space-y-2 shadow-md rounded-md border border-neutral-300'>
                <h3 className='text-3xl text-[#244D3F] font-bold'>12</h3>
                <p className='text-neutral-500'>Interactions This Month</p>
            </div>
            
            
        </div>
    );
};

export default BannerCards;