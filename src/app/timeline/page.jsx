'use client'
import React, { useState } from 'react';
import Top from './Top';
import TimelineHistory from './TimelineHistory';

const Timeline = () => {
    const [filter, setFilter] = useState("ALL");

    return (
        <div className='container mx-auto mt-4 md:mt-10 mb-40 p-4 md:p-0'>
            <Top setFilter={setFilter} filter={filter} />

            <TimelineHistory filter={filter} />
        </div>
    );
};

export default Timeline;