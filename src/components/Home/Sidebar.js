import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import * as Icons from 'heroicons-react';

const Sidebar = ({ className }) => {
    const [toggleMenu, setMenu] = useState(false);
    const [toggleNewPlaylist, setNewPlaylist] = useState(true);
    const handleMenu = () => {
        setMenu(!toggleMenu)
    }

    return (
        <div className={className} >
            <div className="relative p-3">
                <button onClick={handleMenu}><Icons.DotsHorizontal className="w-7 h-7" /></button>
                {toggleMenu ? <><button onClick={() => setMenu(false)} className="cursor-default fixed w-full h-full inset-0" /><Menu /></> : null}
            </div>
            <Navbar />
            <div className="mt-4  flex flex-col overflow-auto text-gray-300 border-b border-gray-600 h-32">
                {/* Your Library */}
                <div>
                    <h2 className="text-xs pl-5 leading-tight uppercase font-semibold">Your Library</h2>
                </div>
                <div className="mt-2 flex flex-col space-y-1 text-sm">
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/made-for-you">Made For You</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/recently-played">Recently Played</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/liked-songs">Liked Songs</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/albums">Albums</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/artists">Artists</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/podcasts">Podcasts</NavLink>
                </div>
                {/* Playlists */}
                <div className="px-5 mt-4">
                    <h2 className="text-xs leading-tight uppercase font-semibold">Playlists</h2>
                </div>
                <div className="flex flex-col space-y-1 text-sm mt-2">
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/the-future-nostalgia">The Future Nostalgia</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/mr-robot-ost">Mr Robot OST</NavLink>
                    <NavLink activeClassName="px-4 border-green-400 border-l-4" className="px-5 truncate text-gray-400 hover:text-gray-100" to="/peaceful-piano">Peaceful Piano</NavLink>
                </div>

            </div>
            <button onClick={() => setNewPlaylist(true)} className="p-3 inline-flex items-center justify-center space-x-3 text-gray-500 hover:text-gray-100">
                <span><Icons.PlusCircleOutline className="w-7 h-7" /></span>
                <span className="text-xs sm:text-sm md:text-md leading-none">New Playlist</span>
            </button>
            {toggleNewPlaylist ? <>
                <NewPlaylistModal close={setNewPlaylist} />
            </> : null}
            <div className="flex-grow bg-purple-600 flex items-center justify-center ">
                <span>image</span>
            </div>

        </div >
    )
}

const NewPlaylistModal = ({ close }) => {
    return (<div className="fixed flex items-center justify-center  z-10 w-full h-full inset-0">
        <button className="fixed z-10 w-full h-full inset-0 bg-black opacity-75" onClick={() => close(false)} />

        <div className="z-40 flex  flex-col bg-gray-900 rounded-lg p-4 shadow-2xl">
            <div className="inline-flex items-center justify-between">
                <h2 className="flex-grow">Create Playlist</h2>
                <button onClick={() => close(false)}><Icons.XOutline className="w-7 h-7" /></button>
            </div>
            <div className="flex">
                <div>image</div>
                <div>
                    <label>Name<input className="bg-gray-200 text-gray-800" placeholder="My Playlist #1" /></label>
                </div>
            </div>
        </div>
    </div>)
}
const Navbar = ({ className = "flex flex-col space-y-1" }) => {

    return (<nav className={className}>
        <NavLink exact to="/" className="inline-flex items-center space-x-3 font-bold text-xs sm:text-sm hover:text-gray-100 px-5 text-gray-500" activeClassName="px-4 border-green-400 border-l-4">
            <span><Icons.Home className="w-7 h-7" /></span><span>Home</span>
        </NavLink>
        <NavLink exact to="/browse" className="inline-flex items-center space-x-3 font-bold text-xs sm:text-sm hover:text-gray-100 px-5 text-gray-500" activeClassName="px-4 border-green-400 border-l-4">
            <span><Icons.BookOpenOutline className="w-7 h-7" /></span><span>Browse</span>
        </NavLink>
        <NavLink exact to="/radio" className="inline-flex items-center space-x-3 font-bold text-xs sm:text-sm hover:text-gray-100 px-5 text-gray-500" activeClassName="px-4 border-green-400 border-l-4">
            <span><Icons.GlobeAltOutline className="w-7 h-7" /></span><span>Radio</span>
        </NavLink>
    </nav>)
}

const Menu = () => {
    return (<div className='absolute left-0 ml-2 bg-gray-700 flex items-center px-3 py-1'>
        <ul>
            <li>File</li><li>Edit</li><li>View</li><li>Playback</li><li>Help</li>
        </ul>
    </div>)
}

export default Sidebar
