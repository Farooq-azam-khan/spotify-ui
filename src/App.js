import React from 'react';

import ActiveSongDrawer from './components/ActiveSongDrawer';
import Home from './components/Home'
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-screen h-screen">
      <Home className="flex bg-gray-800 h-full w-full" />
      <ActiveSongDrawer className="flex w-full items-center justify-between bg-gray-700 px-3 py-1" />
    </div>

  );
}

export default App;
