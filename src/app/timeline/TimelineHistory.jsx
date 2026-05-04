'use client'
import React, { useContext } from 'react';
import { FriendsContexts } from '../components/contexts/FriendsContext';
import TimelineHistoryComp from './TimelineHistoryComp';

const TimelineHistory = ({ filter }) => {
    const { timeline } = useContext(FriendsContexts);

    const filteredTimeline = timeline.filter(item => {
        if (filter === "ALL") return true;
        return item.action.toUpperCase() === filter;
    });

    return (
        <div className='space-y-8 pt-8'>
            {
                filteredTimeline.map((obj, ind) => (
                    <TimelineHistoryComp key={ind} obj={obj} />
                ))
            }
        </div>
    );
};

export default TimelineHistory;