import Image from 'next/image';
import React from 'react';
import Tags from './friends/Tags';
import Status from './friends/Status';

const FriendCard = ({friend}) => {
    return (
        <div className='space-y-2 border border-neutral-300 pt-8 pb-8 rounded-md shadow-md text-center hover:cursor-pointer hover:shadow-2xl'>
            {/* image */}
            <div className='bg-amber-100 rounded-full w-fit px-4 py-6 mx-auto'>
                <p className='font-bold'>Image</p>
            </div>

            {/* name */}
            <div>
                <h3 className='text-xl font-bold'>{friend.name}</h3>
                <p className='text-neutral-500'>{friend.days_since_contact}d ago</p>
            </div>
            <div className='space-y-2'>
                {/* tags */}
                <div className='flex justify-center items-center flex-wrap gap-2'>
                    {
                        friend.tags.map((tag, ind) => <Tags key={ind} tag={tag} />)
                    }
                </div>
                
                {/* status */}
                <div>
                    <Status status={friend.status} />
                </div>
            </div>
        </div>
    );
};

export default FriendCard;