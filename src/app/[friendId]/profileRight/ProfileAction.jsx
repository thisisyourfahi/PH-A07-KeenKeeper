import Link from 'next/link';
import React from 'react';
import { FiVideo } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

const ProfileAction = ({ friend }) => {
    return (
        <div className='mt-8 p-4 border border-neutral-200 rounded-md space-y-4'>
            <h4 className='text-xl text-[#244d3f] font-bold'>Quick Check-In</h4>

            <div className='grid grid-cols-3 text-center gap-8'>
                <Link href={'/'} className='border border-neutral-200 py-6 rounded-md hover:shadow-xl'>
                    <LuPhoneCall className='mx-auto' size={30}/>
                    <p className='font-bold'>Call</p>
                </Link>
                <Link href={'/'} className='border border-neutral-200 py-6 rounded-md hover:shadow-xl'>
                    <MdOutlineTextsms className='mx-auto' size={30}/>
                    <p className='font-bold'>Text</p>
                </Link>
                <Link href={'/'} className='border border-neutral-200 py-6 rounded-md hover:shadow-xl'>
                    <FiVideo className='mx-auto' size={30}/>
                    <p className='font-bold'>Text</p>
                </Link>
            </div>
        </div>
    );
};

export default ProfileAction;