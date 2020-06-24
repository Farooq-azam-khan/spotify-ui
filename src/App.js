import React from 'react';

import ActiveSongDrawer from './components/ActiveSongDrawer';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-screen h-screen">
      <div className="flex bg-gray-800 h-full">
        <div className="overflow-auto bg-gray-900 h-full">Officia eiusmod irure ea amet consectetur Lorem irure exercitation.Reprehenderit velit elit esse ullamco cillum.</div>
        <div className="flex-grow">Officia eiusmod irure ea amet consectetur Lorem irure exercitation.Reprehenderit velit elit esse ullamco cillum.</div>
      </div>
      <ActiveSongDrawer className="flex w-full items-center justify-between bg-gray-700 px-3 py-1" />
    </div>

  );
}

export default App;
