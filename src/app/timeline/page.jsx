'use client'
import React, { useState } from 'react';
import Top from './Top';
import TimelineHistory from './TimelineHistory';

const Timeline = () => {
    const [filter, setFilter] = useState("ALL");

    return (
        <div className='container mx-auto mt-10 mb-40'>
            <Top setFilter={setFilter} filter={filter} />

            <TimelineHistory filter={filter} />
        </div>
    );
};

export default Timeline;