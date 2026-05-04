'use client'
import React, { useContext } from 'react';
import { FriendsContexts } from '../components/contexts/FriendsContext';
import TimelineHistoryComp from './TimelineHistoryComp';

const TimelineHistory = () => {
    const {timeline} = useContext(FriendsContexts)
    return (
        <div className='space-y-8 pt-8'>
            {
                timeline.map((obj, ind) => <TimelineHistoryComp key={ind} obj={obj} />)
            }
        </div>
    );
};

export default TimelineHistory;