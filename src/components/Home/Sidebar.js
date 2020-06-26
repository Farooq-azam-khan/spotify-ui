import React, { useState } from 'react'

import * as Icons from 'heroicons-react';

const Sidebar = ({ className }) => {
    const [toggleMenu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!toggleMenu)
    }
    return (
        <div className={className} >
            <div className="relative p-3">
                <button onClick={handleMenu}><Icons.DotsHorizontal className="w-7 h-7" /></button>
                {toggleMenu ? <Menu /> : null}
            </div>
            <Navbar />
            <div className="mt-4 pl-5 flex flex-col overflow-auto text-gray-300 border-b border-gray-600 h-32">
                {/* Your Library */}
                <div>
                    <h2 className="text-xs leading-tight uppercase font-semibold">Your Library</h2>
                </div>
                <ul className="mt-2 flex flex-col space-y-1 text-sm">
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Made For You</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Recently Played</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Liked Songs</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Albums</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Artists</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href='#'>Podcasts</a></li>
                </ul>
                {/* Playlists */}
                <div className="mt-4">
                    <h2 className="text-xs leading-tight uppercase font-semibold">Playlists</h2>
                </div>
                <ul className="flex flex-col space-y-1 text-sm mt-2">
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href="#">JoJo OST</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href="#">The Future Nostalgia</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href="#">Mr Robot OST</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href="#">Peaceful Piano</a></li>
                    <li className="truncate text-gray-400 hover:text-gray-100"><a href="#">Tear Drop</a></li>
                </ul>

            </div>
            <button className="p-3 inline-flex items-center justify-center space-x-3 text-gray-500 hover:text-gray-100"><span><Icons.PlusCircleOutline className="w-7 h-7" /></span> <span>New Playlist</span></button>
            <div className="flex-grow bg-purple-600 flex items-center justify-center "><span>image</span></div>

        </div>
    )
}

const Navbar = ({ className = "" }) => {
    return (<nav className={className}>
        <ul className="flex flex-col">
            <li className="text-sm text-gray-100 font-bold border-l-4 border-green-400 px-4">
                <button className="inline-flex items-center justify-between text-white hover:text-gray-100 space-x-2"><span><Icons.Home /></span><span>Home</span></button>
            </li>
            <li className="text-sm text-gray-500 font-bold px-5">
                <button className="inline-flex items-center justify-between text-gray-500 hover:text-gray-100 space-x-2"><span><Icons.BookOpenOutline /></span><span>Browse</span></button>
            </li>
            <li className="text-sm text-gray-500 font-bold px-5">
                <button className="inline-flex items-center justify-between text-gray-500 hover:text-gray-100 space-x-2"><span><Icons.GlobeAltOutline /></span><span>Radio</span></button>
            </li>
        </ul>
    </nav>)
}

const Menu = () => {
    return (<div className='absolute left-0 ml-2 bg-gray-700 flex items-center px-3 py-1'>
        <ul><li>File</li><li>Edit</li><li>View</li><li>Playback</li><li>Help</li></ul>
    </div>)
}

export default Sidebar
