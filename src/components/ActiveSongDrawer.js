import React from 'react';

const ActiveSongDrawer = ({ className }) => {
    return <div className={className}>
        <div className="w-2/5 mr-4 h-full text-sm text-gray-200">Drown(TV size)<br /><span className="text-gray-500 text-xs">milet</span></div>
        <div className="w-3/5 flex flex-col h-full mr-4 items-center justify-between text-xs px-4">
            <div className="flex items-center justify-between w-full">
                <div>icon</div><div>icon</div><div>icon</div><div>icon</div><div>icon</div>
            </div>
            <div className="inline-flex items-center justify-between w-full "><div>0:12</div><div>volume</div><div>1:31</div></div>
        </div>
        <div className="w-2/5 h-full inline-flex justify-between items-center text-xs">
            <div>icon</div><div>icon</div><div>icon</div><div>volume</div><div>icon</div>
        </div>
    </div>
}

export default ActiveSongDrawer; 