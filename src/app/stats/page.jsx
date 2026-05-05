import React from 'react';
import Top from './Top';
import Chart from './Chart';

const Stats = () => {
    return (
        <div className='container h-[80vh] mx-auto mt-4 md:mt-10 mb-20 p-4 md:p-0'>
            <Top />

            {/* stats section */}
            <Chart></Chart>
        </div>
    );
};

export default Stats;