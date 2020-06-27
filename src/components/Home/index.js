import React from 'react'

import Sidebar from './Sidebar';
import Header from './Header';

import {
    Switch,
    Route,
} from "react-router-dom";

import Profile from '../Profile';

const Home = ({ className }) => {
    return (<section className={className}>
        <Sidebar className="w-2/6 md:w-1/6 overflow-auto bg-gray-900 h-full flex flex-col" />

        <div className="w-4/6 sm:w-4/6 flex flex-col items-start">
            <Header className="w-full flex items-center justify-between space-x-2 px-0 sm:px-3 py-2" />
            <Switch>
                <Route exact path="/"><MainPage /></Route>
                <Route exact path="/profile"><Profile /></Route>
            </Switch>
        </div>
        <RightSideBar className="hidden md:flex w-1/6 flex-col items-center justify-center h-full bg-gray-900 px-5 py-2" />
    </section>
    )
}

const MainPage = () => {
    return (<div className="mt-8 font-bold text-xl px-10">
        <div><h2>Home</h2></div>

    </div>)
}

const RightSideBar = ({ className = "" }) => {
    return (<section className={className}>
        <div className="text-center font-semibold md:font-bold text-sm md:text-lg">See what your friends are playing</div>
        <button className="w-full p-1 md:px-1 md:py-2 border text-white text-xs font-semibold md:font-bold border-gray-100 rounded-full uppercase mt-5">Find Friends</button>
    </section>)
}
export default Home