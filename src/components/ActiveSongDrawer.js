import React from 'react';
import * as Icons from 'heroicons-react';

const ActiveSongDrawer = ({ className }) => {
    return <div className={className}>
        <div className="w-2/5 mr-4 px-3 py-2 h-full text-sm text-gray-200">
            <ActiveSong song="Drown (TV size)" artist="milet" isLiked />
        </div>
        <div className="w-3/5 flex flex-col h-full mr-4 items-center justify-between text-xs px-4">
            <div className="flex items-center justify-between w-full">
                <div><Icons.Refresh className="w-5 h-5" /></div>
                <div><Icons.ArrowNarrowLeft className="w-5 h-5" /></div>
                <div><Icons.PlayOutline className="w-7 h-7" /></div>
                <div><Icons.ArrowNarrowRight className="w-5 h-5" /></div>
                <div><Icons.Reply className="w-5 h-5" /></div>
            </div>
            <div className="inline-flex items-center justify-between w-full "><div>0:12</div><div>position</div><div>1:31</div></div>
        </div>
        <div className="w-2/5 h-full inline-flex justify-between items-center text-xs">
            <div><Icons.ClipboardList className="w-5 h-5" /></div>
            <div><Icons.DesktopComputer className="w-5 h-5" /></div>
            <div><Icons.VolumeUp className="w-5 h-5" /></div>
            <div>volume</div>
            <div><Icons.ArrowsExpandOutline className="w-5 h-5" /></div>
        </div>
    </div >
}

const ActiveSong = ({ song = "", isLiked = false }) => {
    return (<span><span className="inline-flex items-center space-x-2">
        <span>{song}</span> <span>{isLiked ? <Icons.Heart className="w-5 h-5" /> : <Icons.HeartOutline className="w-5 h-5" />}</span>
    </span>
        <br /><span className="text-gray-500 text-xs">milet</span>
    </span>)
}

export default ActiveSongDrawer; 