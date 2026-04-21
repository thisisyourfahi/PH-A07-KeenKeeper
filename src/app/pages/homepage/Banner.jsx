import React from 'react';
import BannerCards from './BannerCards';

const Banner = () => {
    return (
        <div className='text-center mt-10 space-y-4'>
            <h2 className='text-3xl font-semibold'>Friend to keep close in your life</h2>
            <p className='text-neutral-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'>+ Add Friend</button>
            <BannerCards />
        </div>
    );
};

export default Banner;