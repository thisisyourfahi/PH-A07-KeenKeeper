import React from 'react';
import { FiVideo } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';

const TimelineHistoryComp = ({ obj }) => {
    console.log(obj)
    return (
        <div className='border border-neutral-200 rounded-md p-4 flex items-center gap-4'>
            <div>
                {obj.icon}
            </div>
            <div>
                <p className='text-neutral-500'>
                    <span className='font-bold text-[#244d3f]'>
                        {obj.action.toUpperCase()} 
                    </span> with {obj.name}
                </p>
                <p className='text-neutral-500'>
                    {obj.time}
                </p>
            </div>
        </div>
    );
};

export default TimelineHistoryComp;