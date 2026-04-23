import React from 'react';

const Tags = ({tag}) => {
    return (
        <div className='bg-[#CBFADB] text-sm px-2 py-1 rounded-full text-gray-700'>
            {tag.toUpperCase()}
        </div>
    );
};

export default Tags;