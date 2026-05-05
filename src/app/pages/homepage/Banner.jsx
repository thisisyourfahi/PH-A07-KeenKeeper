import React from 'react';
import BannerCards from './BannerCards';

const Banner = () => {
    return (
        <div className='text-center px-4 md:px-0 mt-4 md:mt-10 space-y-4 border-b border-neutral-300 pb-10 mb-10'>
            <h2 className='text-3xl font-semibold'>Friend to keep close in your life</h2>
            <p className='text-neutral-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'>+ Add Friend</button>
            <BannerCards />
        </div>
    );
};

export default Banner;