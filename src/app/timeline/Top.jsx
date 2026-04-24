import React from 'react';

const Top = () => {
    return (
        <div className='space-y-4 border-b border-neutral-200 pb-4'>
            <h2 className="text-3xl font-bold text-[#244D3f]">Timeline</h2>

            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Filter Timeline ⬇</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Call</a></li>
                    <li><a>Text</a></li>
                    <li><a>Video</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Top;