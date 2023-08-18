import styles from './Playlist.module.css';

function Playlist({ playlistName, playlist, removeFromPlaylist, handlePlaylistInput, handlePlaylistSubmit }) {
  return (
    <div className={styles.Playlist}>
      <h2>Playlist</h2>
      <input
          id='playlist'
          type='text'
          name='playlist'
          value={playlistName}
          placeholder='Enter A Playlist Title'
          onChange={handlePlaylistInput}
        />
        <ul>
          {playlist.map(track => 
          <li key={track.id}>
            {track.name}-{track.artist}-{track.album}
            <button onClick={() => removeFromPlaylist(track)}>
              &#8722;
            </button>
          </li>
          )}
        </ul>
        <button onClick={handlePlaylistSubmit}>
          Save To Spotify
        </button>
    </div>
  );
}

export default Playlist;