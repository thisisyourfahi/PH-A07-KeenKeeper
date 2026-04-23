import React, { use } from 'react';
import ProfileLeft from './profileLeft/ProfileLeft';

const FriendProfile = async ({ params }) => {
    const res = await params;
    const friendId = res.friendId

    const res2 = await fetch('http://localhost:3000/friends.json')
    const friends = await res2.json();

    const friend = friends.find(friend => friend.id == friendId);

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row md:gap-10 mt-20 mb-20'>
                {/* left */}
                <div className='md:w-[30%]'>
                    <ProfileLeft friend={friend} />
                </div>

                {/* right */}
                <div className='md:w-[70%] bg-lime-200 p-20'>

                </div>
            </div>
        </div>
    );
};

export default FriendProfile;