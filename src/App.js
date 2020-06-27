import React from 'react';

import ActiveSongDrawer from './components/ActiveSongDrawer';
import Home from './components/Home'
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-screen h-screen">
      <Home className="w-full flex-grow flex bg-gray-800" />
      <ActiveSongDrawer className="w-full flex items-center justify-between space-x-0 sm:space-x-1 md:space-x-4 bg-gray-700 px-3 py-1" />
    </div>

  );
}

export default App;
