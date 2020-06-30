import React, { useState } from 'react'
import * as Icons from 'heroicons-react';
import { NavLink, Switch, Route } from 'react-router-dom';

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

        {/* navbar */}
        <nav className="flex space-x-2">
            <NavLink to="/profile/overview" activeClassName="border-green-700 border-b-2 text-gray-200" className="uppercase text-sm font-medium text-gray-500 hover:text-gray-200">Overview</NavLink>
            <NavLink to="/profile/recently-played-artist" activeClassName="border-green-700 border-b-2 text-gray-200" className="uppercase text-sm font-medium text-gray-500 hover:text-gray-200">Recently Played Artist</NavLink>
            <NavLink to="/profile/following" activeClassName="border-green-700 border-b-2 text-gray-200" className="uppercase text-sm font-medium text-gray-500 hover:text-gray-200">Following (41)</NavLink>
        </nav>

        <Switch>
            <Route exact path="/profile/overview"><Overview /></Route>
            <Route exact path="/profile/recently-played-artist"><RecentlyPlayedArtist /></Route>
            <Route exact path="/profile/following"><Following /></Route>
        </Switch>
    </div>
    )
}

const myFollowing = [
    {
        id: 1,
        name: 'Travis Scott',
        followers: '10,413,865',
        imageUrl: 'https://i1.sndcdn.com/avatars-000701366305-hu9f0i-t500x500.jpg'
    },
    {
        id: 2,
        name: 'Post Malone',
        followers: '26,148,623',
        imageUrl: 'https://i.scdn.co/image/93fec27f9aac86526b9010e882037afbda4e3d5f'
    },
    {
        id: 3,
        name: 'Stormzy',
        followers: '1,755,494',
        imageUrl: 'https://i.scdn.co/image/cf3aa3567c73ea2867d1e4027c29cf45926a72c6'
    },
    {
        id: 4,
        name: 'Houdini',
        followers: '26,231',
        imageUrl: 'https://i.scdn.co/image/069373c55d442d165d4fdc2cbe67f2fe4355f17b'
    }
]
const Following = () => {
    return <div className="w-full h-64 flex flex-col px-3  overflow-auto">
        {myFollowing.map(e => <div key={e.id} className='inline-flex items-center justify-between border-b border-gray-700 pb-5 pt-5'>
            <div className="flex space-x-3 items-center justify-between overflow-hidden">
                <img className="rounded-full w-24 h-24 object-cover" src={e.imageUrl} alt={e.name} />
                <div className="flex flex-col space-y-3"><h2 className="tracking-wider text-gray-200 text-sm font-semibold uppercase">{e.name}</h2>
                    <h4 className="tracking-wider text-gray-500 text-sm">{e.followers} Followers</h4></div>
            </div>
            <div><button className="rounded-full text-green-500 font-semibold uppercase text-xs tracking-widest border border-gray-200 px-3 py-2">following</button></div>
        </div>)}
    </div>
}
const RecentlyPlayedArtist = () => {
    return <div>recently played artist</div>
}
const Overview = () => {
    return <div>overview</div>
}

const ShareDropdown = () => {
    return (<div className="absolute flex flex-col w-32 items-center justify-between py-2 top-0 left-0 ml-10 bg-gray-900">
        <button className="hover:bg-gray-700 w-full inline-flex items-center px-2 justify-between"><span className="px-2">Share</span> <Icons.ChevronRight className="w-7 h-7" /></button>
    </div>)
}
export default Profile
