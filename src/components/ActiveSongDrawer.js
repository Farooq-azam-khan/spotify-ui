import React from 'react';
import * as Icons from 'heroicons-react';

const ActiveSongDrawer = ({ className }) => {
    return <div className={className}>
        <div className="w-2/5 px-3 py-2 h-full text-sm text-gray-200">
            <ActiveSong song="Drown (TV size)" artist="milet" isLiked />
        </div>
        <div className="w-3/5 flex flex-col h-full items-center justify-around text-xs md:px-12">
            <div className="w-full inline-flex items-center justify-around">
                <button className="block hover:text-gray-200 text-gray-400"><Icons.RefreshOutline className="w-7 h-7" /></button>
                <button className="block hover:text-gray-200 text-gray-400"><Icons.ArrowNarrowLeftOutline className="w-7 h-7" /></button>
                <button className="block hover:text-gray-200 text-gray-400"><Icons.PlayOutline className="w-7 h-8" /></button>
                <button className="block hover:text-gray-200 text-gray-400"><Icons.ArrowNarrowRightOutline className="w-7 h-7" /></button>
                <button className="block hover:text-gray-200 text-gray-400"><Icons.ReplyOutline className="w-7 h-7" /></button>
            </div>
            <div className="inline-flex items-center justify-between w-full text-md"><div>0:12</div><div>position</div><div>1:31</div></div>
        </div>
        <div className="w-2/5 h-full inline-flex justify-around items-center text-xs md:px-7">
            <button className="block"><Icons.ClipboardList className="w-5 h-5" /></button>
            <button className="block"><Icons.DesktopComputer className="w-5 h-5" /></button>
            <button className="block"><Icons.VolumeUp className="w-5 h-5" /></button>
            <button className="block">volume</button>
            <button className="block"><Icons.ArrowsExpandOutline className="w-5 h-5" /></button>
        </div>
    </div >
}

const ActiveSong = ({ song = "", isLiked = false }) => {
    return (<span><span className="inline-flex items-center space-x-2">
        <span className="text-sm sm:font-semibold sm:text-md">{song}</span> <span>{isLiked ? <Icons.Heart className="w-5 h-5" /> : <Icons.HeartOutline className="w-5 h-5" />}</span>
    </span>
        <br /><span className="text-gray-500 text-xs">milet</span>
    </span>)
}

export default ActiveSongDrawer; 