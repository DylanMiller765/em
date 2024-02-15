import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import SpotifyPlayer from './components/SpotifyPlayer';
import './App.css'; // Assuming you have a separate CSS file for global styles
import Starfield from './components/StarField'; // Import the Starfield component

function App() {
  const targetDate = '2024-03-01T19:00:00Z'; // The date and time for the countdown

  return (
    <div className="App text-white"> {/* Apply text-white class to the entire App */}
      <Starfield
        starCount={1000}
        starColor={[255, 0, 0]}
        speedFactor={0.08}
        backgroundColor="black"
      />
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">See You Soon My Valentine</h1>
        <p className="mb-8 text-lg">Cant wait to see you! Piggy too! </p>
        <CountdownTimer targetDate={targetDate} />
        <SpotifyPlayer />
      </header>
    </div>
  );
}

export default App;
