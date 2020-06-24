import React from 'react'

const Header = ({ className }) => {
    return (
        <header className={className}>
            <div className="flex justify-between space-x-1">
                <div className="">icon</div>
                <div className="">icon</div>
                <div><input className="rounded-lg text-black bg-gray-100 w-20 px-2" placeholder="Search" /></div>
            </div>
            <div className="flex space-x-1"><div>icon</div><div>spotify-username</div><div>icon</div></div>
        </header>
    )
}

export default Header
