import React, { use } from 'react';
import ProfileLeft from './profileLeft/ProfileLeft';
import ProfileRight from './profileRight/ProfileRight';

const FriendProfile = async ({ params }) => {
    const res = await params;
    const friendId = res.friendId

    const res2 = await fetch('https://keenkeeper-lyart.vercel.app/friends.json')
    const friends = await res2.json();

    const friend = friends.find(friend => friend.id == friendId);

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row md:gap-10 mt-20 mb-20 items-center'>
                {/* left */}
                <div className='md:w-[30%]'>
                    <ProfileLeft friend={friend} />
                </div>

                {/* right */}
                <div className='md:w-[70%] p-20'>
                    <ProfileRight friend={friend}/>
                </div>
            </div>
        </div>
    );
};

export default FriendProfile;