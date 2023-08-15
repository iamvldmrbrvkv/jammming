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
  const [playlistName, setPlaylistName] = useState('Playlist');
  const [playlist, SetPlaylist] = useState([]);

  const addToPlaylist = track => {
    if (playlist.includes(track)) {
      return;
    }
    SetPlaylist(prev => [track, ...prev]);
  }

  return (
    <div className={styles.App}>
      <SearchBar />
      <Tracklist data={data} addToPlaylist={addToPlaylist} />
      <Playlist playlistName={playlistName} playlist={playlist} />
    </div>
  );
}

export default App;
