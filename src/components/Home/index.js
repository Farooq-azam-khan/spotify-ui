import React from 'react'

import Sidebar from './Sidebar';

const Home = ({ className }) => {
    return (<div className={className}>
        <Sidebar className="w-2/6 overflow-auto bg-gray-900 h-full flex flex-col" />
        <div className="w-4/6 flex p-3"><div>laskdjflaksjdflkdjalfd</div></div>
    </div>
    )
}
export default Home