import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'heroicons-react';

import ActiveSongDrawer from './components/ActiveSongDrawer';
import Home from './components/Home'
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-screen h-screen">
      <Home className="w-full flex-grow flex bg-gray-800" />
      <ActiveSongDrawer className="hidden sm:flex w-full items-center justify-between space-x-0 space-x-1 md:space-x-4 bg-gray-700 px-3 py-1" />

      <MobileNavar />
    </div>

  );
}

const MobileNavar = () => {
  return (<div className="w-full flex flex-col sm:hidden items-center justify-center space-x-1 bg-gray-900">
    <div className="w-full border-b border-gray-700 inline-flex justify-between">
      <div className="w-1/5 h-full py-2">image</div>
      <div className="w-3/5 h-full py-2">Song name, artist blah blah</div>
      <div className="w-1/5 h-full py-2 inline-flex items-center justify-between">
        <button><Icons.HeartOutline className="w-5 h-5" /></button>
        <Icons.Play className="w-5 h-5" />
      </div>
    </div>
    <nav className="w-full flex justify-between py-3 px-4">
      <Link className="flex flex-col items-center justify-center space-y-1" to="/">
        <div><Icons.Home className="w-8 h-8" /></div>
        <div>Home</div>
      </Link>
      <Link className="flex flex-col items-center justify-center space-y-1" to="/browse">
        <div ><Icons.SearchOutline className="w-8 h-8" /></div>
        <div className="text-gray-600 text-xs">Search</div>
      </Link>
      <Link className="flex flex-col items-center justify-center space-y-1" to="/radio">
        <div><Icons.GlobeAltOutline className="w-8 h-8" /></div>
        <div className="text-gray-600 text-xs">Your Library</div>
      </Link>
    </nav>
  </div>)
}

export default App;
