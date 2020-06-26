import React from 'react'

import Sidebar from './Sidebar';
import Header from './Header';

const Home = ({ className }) => {
    return (<div className={className}>
        <Sidebar className="w-1/6 overflow-auto bg-gray-900 h-full flex flex-col" />

        <div className="w-4/6 flex flex-col items-start">
            <Header className="w-full flex  justify-between items-start px-3 py-3" />
            <div className="mt-8 font-bold text-xl px-10">
                <div><h2>Home</h2></div>

            </div>
        </div>
        <div className="hidden sm:block bg-gray-900 sm:w-1/6 flex flex-col items-start">Magna in esse culpa anim. Et esse nisi in consequat in pariatur quis anim irure consectetur exercitation dolor est culpa. Nulla voluptate velit deserunt magna nulla proident esse culpa cillum culpa.</div>
    </div>
    )
}
export default Home