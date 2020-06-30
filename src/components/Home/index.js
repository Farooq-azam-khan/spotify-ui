import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

import Albums from '../Albums'
import Artists from '../Artists'
import Browse from '../Browse';
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
                <Route exact path="/browse"><Browse /></Route>
                <Route exact path="/radio"><Radio /></Route>
                <Route exact path="/profile"><Profile /></Route>
                <Route exact path="/made-for-you"><MadeForYou /></Route>
                <Route exact path="/recently-played"><RecentlyPlayed /></Route>
                <Route exact path="/liked-songs"><LikedSongs /></Route>
                <Route exact path="/albums"><Albums /></Route>
                <Route exact path="/artists"><Artists /></Route>
                <Route exact path="/podcasts"><Podcasts /></Route>
                <Route exact path="/settings"><Settings /></Route>
                <Route path="/"><MainPage /></Route>
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
    return (<section className={className}>
        <div className="sm:text-xs sm:font-normal text-center font-semibold md:font-bold md:text-lg">See what your friends are playing</div>
        <button className="w-full p-1 md:px-1 md:py-2 border text-white text-xs font-semibold md:font-bold border-gray-100 rounded-full uppercase mt-5">Find Friends</button>
    </section>)
}
export default Home