import React, { useState } from 'react'
import * as Icons from 'heroicons-react';

const Header = ({ className }) => {
    const [toggleUserPopup, setUserPopup] = useState(false)
    const handleUserPopup = () => {
        setUserPopup(!toggleUserPopup)
    }
    return (
        <header className={className}>
            <div className="flex justify-between space-x-1">
                <div className=""><Icons.ChevronLeftOutline className="w-7 h-7" /></div>
                <div className=""><Icons.ChevronRightOutline className="w-7 h-7" /></div>
                <div><input className="rounded-lg text-black bg-gray-100 w-20 px-2" placeholder="Search" /></div>
            </div>
            <div className="flex space-x-1"><div><Icons.UserCircleOutline className="w-7 h-7" /></div><div>spotify-username</div>
                <div className="relative">
                    <button onClick={handleUserPopup}><Icons.ChevronDown className="w-7 h-7" /></button>
                    {toggleUserPopup ? <UserPopup /> : null}
                </div>
            </div>
        </header>
    )
}

const UserPopup = () => {
    return (<nav className="absolute right-0 bg-gray-900 shadow-2xl w-48 text-gray-400 flex flex-col">
        <a className="hover:bg-gray-600 px-5 py-1" href="#">Private Session</a>
        <a className="w-full hover:bg-gray-600 px-5 py-1" href="#">Settings</a>
        <a className="w-full hover:bg-gray-600 px-5 py-1" href="#">Log Out</a>
    </nav >)
}

export default Header;