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
      uri: 'spotify:track:0WIbzDVEpmOyBnqqdtqIL9',
      id: '1'
    },
    {
      name: 'Incinerate',
      artist: 'Sonic Youth',
      album: 'Rather Ripped',
      uri: 'spotify:track:0lDoG5fQ9cmpvpenwR7Jln',
      id: '2'
    },
    {
      name: 'Kool Thing',
      artist: 'Sonic Youth',
      album: 'Goo',
      uri: 'spotify:track:1ZozGivTAYsOwhy6LVHsPX',
      id: '3'
    }
  ]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, SetPlaylist] = useState([]);

  const addToPlaylist = track => {
    if (playlist.includes(track)) {
      return;
    }
    SetPlaylist(prev => [track, ...prev]);
  }

  const removeFromPlaylist = track => {
    SetPlaylist(prev => prev.filter(t => t.id !== track.id));
  }

  const handleUserInput = ({ target }) => setPlaylistName(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (playlistName.length < 1) {
      alert('Please enter a playlist title');
    } else {
      playlist.map(track => track.uri);
      SetPlaylist([]);
    }
  }

  return (
    <div className={styles.App}>
      <SearchBar />
      <Tracklist data={data} addToPlaylist={addToPlaylist} />
      <Playlist playlistName={playlistName} playlist={playlist} removeFromPlaylist={removeFromPlaylist} handleUserInput={handleUserInput} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
