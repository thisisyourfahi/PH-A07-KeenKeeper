import React from 'react';
import Top from './Top';
import TimelineHistory from './TimelineHistory';

const Timeline = () => {
    return (
        <div className='container mx-auto mt-10 mb-20'>
            <Top />

            <TimelineHistory />
        </div>
    );
};

export default Timeline;