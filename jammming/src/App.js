import './App.css';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { useState } from 'react';
import SearchBar from './components/SearchBar';


function App() {

  const [tracksToAdd, setTracksToAdd] = useState([]);
  const [tracks, setTracks] = useState([]);

  return (
    <div>
      <div className='center' >
        <SearchBar setTracks={setTracks} className="center" />
      </div>
      <div className='container'>
        <SearchResults setTracksToAdd={setTracksToAdd} tracksToAdd={tracksToAdd} tracks={tracks} setTracks={setTracks} />
        <Playlist tracksToAdd={tracksToAdd} setTracksToAdd={setTracksToAdd} />
      </div>
    </div>
  );
}

export default App;
