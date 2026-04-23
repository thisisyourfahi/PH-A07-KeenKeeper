'use client'
import Image from 'next/image';
import React from 'react';
import Tags from './Tags';
import Status from './Status';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/${friend.id}`}>
            <div className='space-y-2 border border-neutral-300 pt-8 pb-8 rounded-md shadow-md text-center hover:cursor-pointer hover:shadow-2xl'>
                {/* image */}
                <div className='w-fit mx-auto'>
                    <Image alt={friend.name}
                        width={90} height={90}
                        src={friend.picture}
                        className='rounded-full'
                    />
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
        </Link>
    );
};

export default FriendCard;