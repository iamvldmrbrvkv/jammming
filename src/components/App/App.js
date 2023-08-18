import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { auth, getAccessToken, getAccessError } from '../../util/Spotify';

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
  };

  const removeFromPlaylist = track => {
    SetPlaylist(prev => prev.filter(t => t.id !== track.id));
  };

  const handlePlaylistInput = ({ target }) => setPlaylistName(target.value);

  const handlePlaylistSubmit = () => {
    if (playlistName.length < 1) {
      alert('Please enter a playlist title');
    } else {
      playlist.map(track => track.uri);
      SetPlaylist([]);
    }
  };

  const handleLogIn = () => {
    auth();
  };

  const [token, setToken] = useState('');
  useEffect(() => {
    const gettError = getAccessError();
    if (gettError) {
      alert('Login failed, access denied by user.');
    };
    const getToken = getAccessToken();
    if (getToken) {
      setToken(getToken);
      setTimeout(() => {
        alert('Your session has expired, please login.');
        setToken('');
      }, 1000*60*60);
    };
    return () => {
      window.history.replaceState({}, 'Jammming', '/');
    }
  }, []);
  
  return (
    <div className={styles.App}>
      {!token && <p>To access this app, please login with Spotify.</p>}
      {!token && <button onClick={handleLogIn}>
        Log in with Spotify
      </button>}
      {token && <SearchBar />}
      {token && <Tracklist data={data} addToPlaylist={addToPlaylist} />}
      {token && <Playlist playlistName={playlistName} playlist={playlist} removeFromPlaylist={removeFromPlaylist} handlePlaylistInput={handlePlaylistInput} handlePlaylistSubmit={handlePlaylistSubmit} />}
    </div>
  );
}

export default App;
