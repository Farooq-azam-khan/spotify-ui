import React, { useState } from 'react'
import * as Icons from 'heroicons-react';
import { Link } from "react-router-dom";

const Header = ({ className }) => {
    const [toggleUserPopup, setUserPopup] = useState(false)
    const handleUserPopup = () => {
        setUserPopup(!toggleUserPopup)
    }
    return (
        <header className={className}>
            <div className="inline-flex items-center justify-between space-x-1">
                <button className="block text-gray-600"><Icons.ChevronLeftOutline className="w-7 h-7" /></button>
                <button className="block"><Icons.ChevronRightOutline className="w-7 h-7" /></button>
                <div className="hidden sm:block relative">
                    <input className="h-full w-32 rounded-lg text-black bg-gray-100 pl-6 pr-2" placeholder="Search" />
                    <div className="absolute z-10 bottom-0 mb-1 ml-1 mt-1 flex items-center justify-center"><span><Icons.SearchOutline className="w-4 h-4 text-gray-800" /></span></div>
                </div>
                <div className="block sm:hidden"><button><Icons.SearchOutline className="w-5 h-5" /></button></div>
            </div>
            <div className="inline-flex items-center justify-between">
                <Link className="inline-flex items-center justify-between space-x-1" to="/profile">
                    <span><Icons.UserCircleOutline className="w-7 h-7" /></span>
                    <span className="text-xs sm:text-md sm:font-semibold" >spotify-username</span>
                </Link>
                <div className="relative">
                    <button onClick={handleUserPopup}><Icons.ChevronDown className="w-7 h-7" /></button>
                    {toggleUserPopup ? <>
                        <button onClick={() => setUserPopup(false)} className="fixed w-full h-full inset-0 cursor-default" /><UserPopup />
                    </> : null}
                </div>
            </div>
        </header>
    )
}

const UserPopup = () => {
    return (<nav className="absolute right-0 bg-gray-900 shadow-2xl w-48 text-gray-400 flex flex-col">
        <a className="hover:bg-gray-600 px-5 py-1" href="#">Private Session</a>
        <Link className="w-full hover:bg-gray-600 px-5 py-1" to="/settings">Settings</Link>
        <a className="w-full hover:bg-gray-600 px-5 py-1" href="#">Log Out</a>
    </nav >)
}

export default Header;