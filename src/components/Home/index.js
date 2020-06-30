import React, { useState } from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

import * as Icons from 'heroicons-react'
import Albums from '../Albums'
import Artists from '../Artists'
import Browse from '../Browse/index';
import Header from './Header';
import LikedSongs from '../LikedSongs'
import MadeForYou from '../MadeForYou';
import MobileHeader from './MobileHeader'
import Podcasts from '../Podcasts'
import Profile from '../Profile';
import Radio from '../Radio';
import RecentlyPlayed from '../RecentlyPlayed';
import Settings from '../Settings';
import Sidebar from './Sidebar';

const Home = ({ className }) => {
    return (<section className={className}>
        <Sidebar className="hidden sm:flex flex-col w-2/6 md:w-1/6 overflow-auto bg-gray-900 h-full " />
        <div className="w-full sm:w-4/6 flex flex-col items-start">
            <Header className="hidden sm:flex w-full items-center justify-between space-x-2 px-0 sm:px-3 py-2" />
            <MobileHeader />
            <Switch>
                <Route path="/browse"><Browse /></Route>
                <Route exact path="/radio"><Radio /></Route>
                <Route path="/profile"><Profile /></Route>
                <Route exact path="/made-for-you"><MadeForYou /></Route>
                <Route exact path="/recently-played"><RecentlyPlayed /></Route>
                <Route exact path="/liked-songs"><LikedSongs /></Route>
                <Route exact path="/albums"><Albums /></Route>
                <Route exact path="/artists"><Artists /></Route>
                <Route exact path="/podcasts"><Podcasts /></Route>
                <Route exact path="/settings"><Settings /></Route>
                <Route exact path="/"><MainPage /></Route>
            </Switch>
        </div>
        <RightSideBar className="hidden md:flex w-1/6 flex-col items-center justify-center h-full bg-gray-900 px-5 py-2" />
    </section>
    )
}



const MainPage = () => {
    return (<div className="mt-8 font-bold text-xl px-10">
        <h2>Home</h2>
    </div>)
}

const RightSideBar = ({ className = "" }) => {
    const [toggleFriends, setFriends] = useState(false)
    return (<section className={className}>
        <div className="sm:text-xs sm:font-normal text-center font-semibold md:font-bold md:text-lg">See what your friends are playing</div>
        <button onClick={() => setFriends(true)} className="w-full p-1 md:px-1 md:py-2 border text-white text-xs font-semibold md:font-bold border-gray-100 rounded-full uppercase mt-5">Find Friends</button>
        {toggleFriends ? <>
            <FriendsModal close={setFriends} />
        </> : null}
    </section>)
}
const FriendsModal = ({ close }) => {
    return <div className="fixed flex items-center justify-center z-10 w-full h-full inset-0">
        <button className="fixed z-10 w-full h-full inset-0 bg-black opacity-75" onClick={() => close(false)} />
        <div className="z-40 flex flex-col space-y-3 bg-gray-900 rounded-lg shadow-2xl">
            <div className="inline-flex items-start justify-between w-full px-3 py-2 space-x-10">
                <h2 className="text-3xl font-bold text-gray-100">Follow</h2>
                <button className="text-gray-400 hover:text-gray-100" onClick={() => close(false)}><Icons.X className="w-7 h-7" /></button>
            </div>
            <div className="bg-gray-800 w-full h-full">content</div>
            <div className="p-10"></div>
        </div>
    </div>
}
export default Home