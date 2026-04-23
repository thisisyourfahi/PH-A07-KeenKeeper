import FriendCard from '@/app/components/homepage/friends/FriendCard';
import React from 'react';
import ProfileLeftTopCard from './ProfileLeftTopCard';
import { FiRefreshCcw } from 'react-icons/fi';
import ProfileLeftBottom from './ProfileLeftBottom';

const ProfileLeft = ({ friend }) => {
    return (
        <div>
            <div className='text-center'>
                <ProfileLeftTopCard friend={friend} />
            </div>
            <div>
                <ProfileLeftBottom />
            </div>
        </div>
    );
};

export default ProfileLeft;