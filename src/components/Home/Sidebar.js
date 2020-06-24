import React from 'react'

const Sidebar = ({ className }) => {
    return (
        <div className={className} >
            <div className="p-3">icon</div>
            <div>
                <nav>
                    <ul className="flex flex-col">
                        <li className="text-sm text-gray-100 font-bold border-l-4 border-green-400 px-8"><button>Home</button></li>
                        <li className="text-sm text-gray-500 font-bold px-8"><button>Browse</button></li>
                        <li className="text-sm text-gray-500 font-bold px-8"><button>Radio</button></li>
                    </ul>
                </nav>
            </div>
            <div className="mt-10 px-4 flex flex-col overflow-auto text-gray-300 border-b border-gray-600 w-full h-40">
                <div>
                    <h2 className="text-xs leading-tight uppercase font-semibold">Your Library</h2>
                </div>
                <div className="mt-2">
                    <ul className="flex flex-col">
                        <li className="text-sm mb-1 truncate">Made For You</li>
                        <li className="text-sm mb-1 truncate">Recently Played</li>
                        <li className="text-sm mb-1 truncate">Liked Songs</li>
                        <li className="text-sm mb-1 truncate">Albums</li>
                        <li className="text-sm mb-1 truncate">Artists</li>
                        <li className="text-sm mb-1 truncate">Podcasts</li>
                    </ul>
                </div>
                {/* playlists */}
                <div className="mt-3">
                    <h2 className="text-xs leading-tight uppercase font-semibold">Playlists</h2>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <li className="text-sm truncate">The Future Nostalgia</li>
                        <li className="text-sm truncate">JoJo OST</li>
                        <li className="text-sm truncate">Mr Robot OST</li>
                        <li className="text-sm truncate">Peaceful Piano</li>
                        <li className="text-sm truncate">Tear Drop</li>
                    </ul>
                </div>

            </div>
            <div className="flex items-center justify-cetner p-3"><div className="mr-3">icon</div><div>New Playlist</div></div>
            <div className="flex-grow bg-purple-600 h-64">image</div>

        </div>
    )
}

export default Sidebar
