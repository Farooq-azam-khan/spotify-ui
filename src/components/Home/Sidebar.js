import React, { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
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
            <button className="p-3 inline-flex items-center justify-center space-x-3 text-gray-500 hover:text-gray-100"><span><Icons.PlusCircleOutline className="w-7 h-7" /></span>
                <span className="text-xs sm:text-sm md:text-md leading-none">New Playlist</span>
            </button>
            <div className="flex-grow bg-purple-600 flex items-center justify-center "><span>image</span></div>

        </div>
    )
}



const Navbar = ({ className = "flex flex-col space-y-1" }) => {
    let isHome = useRouteMatch({
        path: '/',
        exact: true
    });
    let isBrowse = useRouteMatch({
        path: '/browse',
        exact: true
    });
    let isRadio = useRouteMatch({
        path: '/radio',
        exact: true
    });
    return (<nav className={className}>
        <Link to="/" className={`inline-flex  font-bold text-xs sm:text-sm text-white hover:text-gray-100  ${isHome ? 'px-4 border-green-400 border-l-4' : 'px-5 text-gray-500'}`}>
            <span><Icons.Home className="w-7 h-7" /></span><span>Home</span>
        </Link>
        <Link to="/browse" className={`inline-flex  font-bold text-xs sm:text-sm text-white hover:text-gray-100  ${isBrowse ? 'px-4 border-green-400 border-l-4' : 'px-5 text-gray-500'}`}>
            <span><Icons.BookOpenOutline className="w-7 h-7" /></span><span>Browse</span>
        </Link>
        <Link to="/radio" className={`inline-flex  font-bold text-xs sm:text-sm text-white hover:text-gray-100  ${isRadio ? 'px-4 border-green-400 border-l-4' : 'px-5 text-gray-500'}`}>
            <span><Icons.GlobeAltOutline className="w-7 h-7" /></span><span>Radio</span>
        </Link>
    </nav>)
}

const Menu = () => {
    return (<div className='absolute left-0 ml-2 bg-gray-700 flex items-center px-3 py-1'>
        <ul><li>File</li><li>Edit</li><li>View</li><li>Playback</li><li>Help</li></ul>
    </div>)
}

export default Sidebar
