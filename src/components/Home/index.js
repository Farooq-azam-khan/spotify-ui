import React from 'react'
import * as Icons from 'heroicons-react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import Sidebar from './Sidebar';
import Header from './Header';

import Profile from '../Profile';
import Browse from '../Browse';
import Radio from '../Radio';

const Home = ({ className }) => {
    return (<section className={className}>
        <Sidebar className="hidden sm:flex flex-col w-2/6 md:w-1/6 overflow-auto bg-gray-900 h-full " />
        <div className="w-full sm:w-4/6 flex flex-col items-start">
            <Header className="hidden sm:flex w-full items-center justify-between space-x-2 px-0 sm:px-3 py-2" />
            <MobileHeader />
            <Switch>
                <Route exact path="/"><MainPage /></Route>
                <Route exact path="/browse"><Browse /></Route>
                <Route exact path="/radio"><Radio /></Route>
                <Route exact path="/profile"><Profile /></Route>
            </Switch>
        </div>
        <RightSideBar className="hidden md:flex w-1/6 flex-col items-center justify-center h-full bg-gray-900 px-5 py-2" />
    </section>
    )
}

const MobileHeader = () => {
    return (<div className="w-full flex py-2 items-center justify-end px-3"><Link to="/profile"><Icons.CogOutline className="w-6 h-6" /></Link></div>)
}

const MainPage = () => {
    return (<div className="mt-8 font-bold text-xl px-10">
        <h2>Home</h2>
    </div>)
}

const RightSideBar = ({ className = "" }) => {
    return (<section className={className}>
        <div className="text-center font-semibold md:font-bold text-sm md:text-lg">See what your friends are playing</div>
        <button className="w-full p-1 md:px-1 md:py-2 border text-white text-xs font-semibold md:font-bold border-gray-100 rounded-full uppercase mt-5">Find Friends</button>
    </section>)
}
export default Home