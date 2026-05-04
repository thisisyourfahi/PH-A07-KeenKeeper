import React from 'react';
import Top from './Top';
import Chart from './Chart';

const Stats = () => {
    return (
        <div className='container h-[80vh] mx-auto mt-10 mb-20'>
            <Top />

            {/* stats section */}
            <Chart></Chart>
        </div>
    );
};

export default Stats;