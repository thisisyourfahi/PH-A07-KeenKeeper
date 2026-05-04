'use client'
import { FriendsContexts } from '@/app/components/contexts/FriendsContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiVideo } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';


const actionIcons = {
    call: <LuPhoneCall size={30} />,
    text: <MdOutlineTextsms size={30} />,
    video: <FiVideo size={30} />
    
}

const ProfileAction = ({ friend }) => {
    const { timeline, setTimeline } = useContext(FriendsContexts)

    const handleAction = (action) => {
        const now = new Date();
        const tempObj = {
            action: action,
            icon: actionIcons[action],
            name: friend.name,
            time: now.toDateString()
        }
        setTimeline([...timeline, tempObj]);
        console.log(timeline);
        
    }

    return (
        <div className='mt-8 p-4 border border-neutral-200 rounded-md space-y-4'>
            <h4 className='text-xl text-[#244d3f] font-bold'>Quick Check-In</h4>

            <div className='grid grid-cols-3 text-center gap-8'>
                <button
                    onClick={() => handleAction('call')}
                    className='py-6 flex flex-col items-center justify-center border border-neutral-200 rounded-md hover:shadow-xl cursor-pointer transition-shadow'
                >
                    {actionIcons['call']}
                    <p className='font-bold'>Call</p>
                </button>
                <button
                    onClick={() => handleAction('text')}
                    className='py-6 flex flex-col items-center justify-center border border-neutral-200 rounded-md hover:shadow-xl cursor-pointer transition-shadow'
                >
                    {actionIcons['text']}
                    <p className='font-bold'>Text</p>
                </button>
                <button
                    onClick={() => handleAction('video')}
                    className='py-6 flex flex-col items-center justify-center border border-neutral-200 rounded-md hover:shadow-xl cursor-pointer transition-shadow'
                >
                    {actionIcons['video']}
                    <p className='font-bold'>Video</p>
                </button>
            </div>
        </div>
    );
};

export default ProfileAction;