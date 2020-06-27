import React, { useState } from 'react'
import * as Icons from 'heroicons-react';

const Profile = () => {
    const [toggleShare, setShare] = useState(false)
    const handleShare = () => { setShare(!toggleShare) }
    return (<div className="w-full h-full flex flex-col px-3 space-y-2 py-2">
        {/* profile image/info */}
        <div>
            <div className="inline-flex items-center space-x-3 px-2 justify-between">
                <span className="relative w-16 h-16 flex flex-col items-center justify-around rounded-full bg-gray-700 overflow-hidden shadow-xl">
                    <span><Icons.UserOutline className="w-10 h-10" /></span>
                    <span className="absolute w-full  text-center z-10 bottom-0 inset-x-0  pb-1 bg-gray-900 text-xs">change</span>
                </span>
                <span className="flex flex-col"><span>user</span>
                    <span className="text-3xl font-extrabold text-gray-200">my-username</span>
                </span>
            </div>
        </div>
        <div className="relative">
            <button onClick={handleShare} className="rounded-full"><Icons.DotsCircleHorizontalOutline className="w-8 h-8" /></button>
            {toggleShare ? <><button className="fixed inset-0 w-full h-full cursor-default" onClick={() => setShare(false)}></button><ShareDropdown /></> : null}
        </div>
        <nav className="flex space-x-2">
            <button className="uppercase border-green-700 border-b-2 text-sm font-bold text-gray-200">Overview</button>
            <button className="uppercase text-sm font-bold text-gray-500 hover:text-gray-200">Recently Played Artist</button>
            <button className="uppercase text-sm font-bold text-gray-500 hover:text-gray-200">Following (41)</button>
        </nav>
    </div>
    )
}

const ShareDropdown = () => {
    return (<div className="absolute flex flex-col w-32 items-center justify-between py-2 top-0 left-0 ml-10 bg-gray-900">
        <button className="hover:bg-gray-700 w-full inline-flex items-center px-2 justify-between"><span className="px-2">Share</span> <Icons.ChevronRight className="w-7 h-7" /></button>
    </div>)
}
export default Profile
