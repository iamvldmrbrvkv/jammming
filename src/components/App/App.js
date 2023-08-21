import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';
import { auth, getAccessToken, getAccessError } from '../../util/Spotify';

function App() {
  const [data, setData] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, SetPlaylist] = useState([]);
  const [searchInput, SetSearchInput] = useState('');

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

  const handleSeachInput = ({ target }) => SetSearchInput(target.value);

  const handleSearchSubmit = () => {
    if (searchInput.length < 1) {
      alert('Please enter a song title');
    } else {
      getTracks();
    }
  };

  const [token, setToken] = useState('');
  useEffect(() => {
    const getError = getAccessError();
    if (getError) {
      alert('Login failed, access denied by user!');
    };
    const getToken = getAccessToken();
    if (getToken) {
      setToken(getToken);
      setTimeout(() => {
        alert('Your session has expired, please login!');
        setToken('');
      }, 1000*60*60);
    };
    return () => {
      window.history.replaceState({}, 'Jammming', '/');
    }
  }, []);

  const spotifyBaseUrl = 'https://api.spotify.com';
  const queryParams = `q=${searchInput}&type=track`;

  const getTracks = async () => {
    if (token) {
      const searchEndPoint = '/v1/search?';
      const requestParams = `${queryParams}`;
      const urlToFetch = `${spotifyBaseUrl}${searchEndPoint}${requestParams}`;
      try {
        const response = await fetch(urlToFetch, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        if (response.ok) {
          const jsonResponse = await response.json();
          const items = jsonResponse.tracks.items;
          const tracks = items.map(item => {
            return {
              id: item.id,
              name: item.name,
              artists: item.artists.map(artist => artist.name).join(', '),
              album: item.album.name,
              uri: item.uri
            }
          })
          setData(tracks);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={styles.App}>
      {!token && <p>To access this app, please login with Spotify.</p>}
      {!token && <button onClick={handleLogIn}>
        Log in with Spotify
      </button>}
      {token && <SearchBar searchInput={searchInput} handleSeachInput={handleSeachInput} handleSearchSubmit={handleSearchSubmit} />}
      {token && <SearchResults data={data} addToPlaylist={addToPlaylist} />}
      {token && <Playlist playlistName={playlistName} playlist={playlist} removeFromPlaylist={removeFromPlaylist} handlePlaylistInput={handlePlaylistInput} handlePlaylistSubmit={handlePlaylistSubmit} />}
    </div>
  );
}

export default App;
