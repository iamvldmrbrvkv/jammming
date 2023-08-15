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
  const [playlist, SetPlaylist] = useState([
    {
      name: 'name 1',
      artist: 'artist 1',
      album: 'album 1',
      id: '1'
    },
    {
      name: 'name 2',
      artist: 'artist 2',
      album: 'album 2',
      id: '2'
    },
    {
      name: 'name 3',
      artist: 'artist 3',
      album: 'album 3',
      id: '3'
    }
  ]);

  return (
    <div className={styles.App}>
      <SearchBar />
      <Tracklist data={data} />
      <Playlist playlistName={playlistName} playlist={playlist} />
    </div>
  );
}

export default App;
