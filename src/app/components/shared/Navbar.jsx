'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { GoClock } from 'react-icons/go';
import { GrHomeRounded } from 'react-icons/gr';
import { TfiStatsUp } from 'react-icons/tfi';
import { FriendsContexts } from '../contexts/FriendsContext';

const Navbar = () => {
    const pathname = usePathname();
    // console.log('pathname:', pathname)

    const {timeline} = useContext(FriendsContexts);
    // console.log(timeline);

    return (
        <div className="bg-base-100 shadow-sm w-full">
            <div className="navbar flex flex-col gap-2 md:gap-0 md:flex-row  justify-between container mx-auto">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">
                        Keen<span className='text-[#244D3F]'>Keeper</span>
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className={`px-4 py-1 rounded-md flex items-center gap-2 ${pathname === '/' ? 'bg-[#244D3F] text-white' : ''
                            }`}
                    >
                        <GrHomeRounded size={20} />
                        Home
                    </Link>
                    <Link
                        href="/timeline"
                        className={`px-4 py-1 rounded-md flex items-center gap-2 ${pathname === '/timeline' ? 'bg-[#244D3F] text-white' : ''
                            }`}
                    >
                        <GoClock size={20} />
                        Timeline
                    </Link>
                    <Link
                        href="/stats"
                        className={`px-4 py-1 rounded-md flex items-center gap-2 ${pathname === '/stats' ? 'bg-[#244D3F] text-white' : ''
                            }`}
                    >
                        <TfiStatsUp size={20} />
                        Stats
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;