import Link from 'next/link';
import React from 'react';
import { GoClock } from 'react-icons/go';
import { GrHomeRounded } from 'react-icons/gr';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm w-full">
            <div className="navbar flex justify-between container mx-auto">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <Link href='/' className='flex items-center gap-2 bg-[#244D3F] px-4 py-1 rounded-md text-white'>
                        <GrHomeRounded size={20} />
                        <button>Home</button>
                    </Link>
                    <Link href='/' className='flex items-center gap-2 bg-[#244D3F] px-4 py-1 rounded-md text-white'>
                        <GoClock size={20} />
                        <button>Timeline</button>
                    </Link>
                    <Link href='/' className='flex items-center gap-2 bg-[#244D3F] px-4 py-1 rounded-md text-white'>
                        <TfiStatsUp size={20} />
                        <button>Stats</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;