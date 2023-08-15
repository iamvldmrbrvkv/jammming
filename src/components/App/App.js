import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState([
    {
      name: 'Teen Age Riot (Album Version)',
      artist: 'Sonic Youth',
      album: 'Daydream Nation (Deluxe Edition',
      id: '1'
    },
    {
      name: 'Incinerate',
      artist: 'Sonic Youth',
      album: 'Rather Ripped',
      id: '2'
    },
    {
      name: 'Kool Thing',
      artist: 'Sonic Youth',
      album: 'Goo',
      id: '3'
    }
  ]);
  
  return (
    <div className={styles.App}>
      <SearchBar />
      <Tracklist data={data} />
      <Playlist />
    </div>
  );
}

export default App;
